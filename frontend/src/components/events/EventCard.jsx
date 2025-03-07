
import { Calendar } from "lucide-react"
import { formatDate } from "../../utils/formatDate"

const EventCard = ({ event }) => {

  return (
    <div
      className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-md transition-shadow"
    >
      <div className="aspect-[2/1] overflow-hidden">
        <img
          src={event?.Image?.url}
          alt={event.Title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4 border-1 border-[#ced0d2] rounded-b-xl">
        <h3 className="font-medium text-[#1a1a1a] text-2xl mb-2">{event.Title}</h3>
        <div className="flex items-center text-[#9e9e9e]">
          <Calendar size={14} className="mr-1 text-[#3481E8]" />
          <span>{formatDate(event.Date)}</span>
        </div>
      </div>
    </div>
  )
}

export default EventCard

