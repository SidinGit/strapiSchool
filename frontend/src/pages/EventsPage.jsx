import { useState, useEffect } from "react"
import { useEvents } from "../context/EventsContext"
import HeroSection from "../components/ui/HeroSection"
import EventsFilter from "../components/events/EventsFilter"
import EventsGrid from "../components/events/EventsGrid"

const EventsPage = () => {
  const { events, loading, error, filterEvents } = useEvents()
  const [filteredEvents, setFilteredEvents] = useState([])
  const [visibleEvents, setVisibleEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 6

  useEffect(() => {
    // Initialize with all events
    setFilteredEvents(events)
  }, [events])

  useEffect(() => {
    // Update visible events when filtered events or page changes
    const startIndex = (currentPage - 1) * eventsPerPage
    const endIndex = startIndex + eventsPerPage
    setVisibleEvents(filteredEvents.slice(0, endIndex))
  }, [filteredEvents, currentPage])

  const handleFilterChange = (category) => {
    setCurrentPage(1)
    setFilteredEvents(filterEvents(category))
  }

  const loadMoreEvents = () => {
    setCurrentPage(currentPage + 1)
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <HeroSection
        title="Our events gallery"
        description="Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together."
        backgroundImage="../images/heroSectionBG.png"
      />

      <div className="container mx-auto px-4 py-12">
        <EventsFilter onFilterChange={handleFilterChange} />

        <EventsGrid events={visibleEvents} loading={loading} />

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
      </div>
    </div>
  )
}

export default EventsPage

