import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { Calendar, ArrowLeft } from "lucide-react"
import { formatDate } from "../utils/formatDate"

const EventDetailsPage = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/api/events/${id}?populate=*`)

        if (response.data && response.data.data) {
          setEvent(response.data.data)
        }
      } catch (err) {
        setError("Failed to fetch event details. Please try again later.")
        console.error("Error fetching event details:", err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchEventDetails()
    }
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-[#f5f5f5] rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-[#f5f5f5] rounded-lg mb-6"></div>
          <div className="h-4 bg-[#f5f5f5] rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-[#f5f5f5] rounded w-full mb-2"></div>
          <div className="h-4 bg-[#f5f5f5] rounded w-full mb-2"></div>
          <div className="h-4 bg-[#f5f5f5] rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error || "Event not found"}</p>
        <Link to="/events" className="inline-flex items-center text-[#3481e8] mt-4 hover:underline">
          <ArrowLeft size={16} className="mr-1" /> Back to Events
        </Link>
      </div>
    )
  }

  const { attributes } = event
  const { title, description, date, category, image } = attributes

  // Get image URL or use placeholder
  // const imageUrl = image?.data?.attributes?.url
  //   ? `${import.meta.env.VITE_STRAPI_URL}${image.data.attributes.url}`
  //   : "/placeholder.svg?height=400&width=800"

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/events" className="inline-flex items-center text-[#3481e8] mb-6 hover:underline">
        <ArrowLeft size={16} className="mr-1" /> Back to Events
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">{title}</h1>

      <div className="flex items-center mb-6 text-[#9e9e9e]">
        <Calendar size={18} className="mr-1" />
        <span>{formatDate(date)}</span>
        <span className="mx-2">•</span>
        <span className="bg-[#f5f5f5] px-3 py-1 rounded-full text-sm">{category}</span>
      </div>

      <div className="mb-8">
        <img
          src={event.data.Image.url || "/placeholder.svg"}
          alt={title}
          className="w-full h-auto rounded-lg object-cover max-h-[500px]"
        />
      </div>

      <div className="prose max-w-none">
        <p className="text-[#4e4e4f] leading-relaxed whitespace-pre-line">{description}</p>
      </div>
    </div>
  )
}

export default EventDetailsPage

