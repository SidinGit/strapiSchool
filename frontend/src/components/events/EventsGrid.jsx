import EventCard from "./EventCard"

const EventsGrid = ({ events, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-[#f5f5f5] aspect-[4/3] rounded-lg mb-4"></div>
            <div className="h-5 bg-[#f5f5f5] rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-[#f5f5f5] rounded w-1/3"></div>
          </div>
        ))}
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#4e4e4f] text-lg">No events found in this category.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventsGrid

