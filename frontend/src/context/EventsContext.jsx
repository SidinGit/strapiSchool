import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const EventsContext = createContext(undefined)

export const useEvents = () => {
  const context = useContext(EventsContext)
  if (context === undefined) {
    throw new Error("useEvents must be used within an EventsProvider")
  }
  return context
}

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const [featuredEvents, setFeaturedEvents] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${import.meta.env.VITE_STRAPI_URL}/api/events?populate=*`)
        if (response.data && response.data.data) {
          setEvents(response.data.data)
          
          setFeaturedEvents(response.data.data)

          const uniqueCategories = [...new Set(response.data.data.map((event) => event.Category))]
          setCategories(["All", ...uniqueCategories])
        }
      } catch (err) {
        setError("Failed to fetch events. Please try again later.")
        console.error("Error fetching events:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const filterEvents = (category) => {
    if (category === "All") {
      return events
    }
    return events.filter((event) => event.Category === category)
  }

  return (
    <EventsContext.Provider
      value={{
        events,
        featuredEvents,
        categories,
        loading,
        error,
        filterEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  )
}

