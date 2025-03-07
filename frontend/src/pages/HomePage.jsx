import { useState, useEffect } from "react"
import { useEvents } from "../context/EventsContext"
import HeroSection from "../components/ui/HeroSection"
import EventsFilter from "../components/events/EventsFilter"
import EventCard from "../components/events/EventCard"
import ImageModal from "../components/ui/ImageModal"
import heroImage from "../images/heroSectionBG.png"


const HomePage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const { events, categories, loading, filterEvents } = useEvents()
  const [filteredEvents, setFilteredEvents] = useState([])
  const [visibleEvents, setVisibleEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 6

  // Initialize filtered events
  useEffect(() => {
    setFilteredEvents(events)
  }, [events])

  // Paginate the visible events
  useEffect(() => {
    const endIndex = currentPage * eventsPerPage
    setVisibleEvents(filteredEvents.slice(0, endIndex))
  }, [filteredEvents, currentPage])

  const handleFilterChange = (category) => {
    setCurrentPage(1)
    setFilteredEvents(filterEvents(category)) // Update state based on the selected category
  }

  const loadMoreEvents = () => {
    setCurrentPage((prev) => prev + 1)
  }

  // Open Image Modal
  const openImageModal = (index) => {
    setSelectedImageIndex(index);
    // console.log(visibleEvents[index])
  };

  // Close Image Modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Show Next Image
  const showNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev < visibleEvents.length - 1 ? prev + 1 : 0
    );
  };

  // Show Previous Image
  const showPrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : visibleEvents.length - 1
    );
  };

  console.log(events)

  return (
    <div>
      <HeroSection
        title="Our events gallery"
        description="Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together."
        backgroundImage={heroImage}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
          <EventsFilter categories={categories} onFilterChange={handleFilterChange} />
          </div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white aspect-[4/3] rounded-lg mb-4"></div>
                  <div className="h-5 bg-white rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-white rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="container mx-auto px-8 md:px-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {visibleEvents.map((event, index) => (
                    <div key={event.id} onClick={() => openImageModal(index)}>
                      <EventCard event={event} />
                    </div>
                  ))}
                </div>
              </div>

              {visibleEvents.length < filteredEvents.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMoreEvents}
                    className="border border-[#d9d9d9] text-[#1a1a1a] hover:border-[#f54e39] hover:text-[#f54e39] px-6 py-2 rounded transition-colors"
                  >
                    View more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

       {/* Image Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          currentIndex={selectedImageIndex}
          onClose={closeModal}
          onNext={showNextImage}
          onPrev={showPrevImage}
          visibleEvents={visibleEvents}
        />
      )}
    </div>
  )
}

export default HomePage
