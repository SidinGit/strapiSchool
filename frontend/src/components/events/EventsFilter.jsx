import { useState } from "react"
import { useEvents } from "../../context/EventsContext"

const EventsFilter = ({ onFilterChange }) => {
  const { categories } = useEvents()
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap gap-4 px-8 md:px-24">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-6 py-3 rounded-full text-lg font-medium transition-colors 
            ${
              activeCategory === category ? "bg-[#3481e8] text-white" : "bg-[#f5f5f5] text-[#4a4a4a] hover:bg-[#514e4e] hover:text-white border-1"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default EventsFilter

