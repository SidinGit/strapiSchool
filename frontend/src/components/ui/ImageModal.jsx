import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEvents } from "../../context/EventsContext"; 
import { formatDate } from "@/utils/formatDate.js";

/*
src={`${import.meta.env.VITE_STRAPI_URL}${currentEvent.Image.url}`}
 */
const ImageModal = ({ currentIndex, onClose, onNext, onPrev, visibleEvents }) => {
    const { events } = useEvents();
  useEffect(() => {
    //* Close modal when Escape key is pressed
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  if (!visibleEvents.length || currentIndex === null) return null

  const currentEvent = visibleEvents[currentIndex]
  console.log(currentIndex)

  return (
    <div className="fixed inset-0 backdrop-brightness-30  flex items-center justify-center z-50">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-20 right-100 text-white text-3xl cursor-pointer hover:scale-110 transition-transform">
        <X size={40} />
      </button>

      {/* Left Arrow */}
      <button onClick={onPrev} className="absolute left-90 text-white text-3xl cursor-pointer hover:scale-110 transition-transform">
        <ChevronLeft size={50} />
      </button>

      {/* Image Container */}
      <div className="flex flex-col items-center p-5 rounded-lg ">
        <img
          src={currentEvent.Image.url}
          alt={currentEvent?.Title || "Event Image"}
          className="w-[600px] h-[400px] object-cover rounded-lg shadow-md"
        />

        {/* Title & Date Below Image */}
        <div className="w-full mt-4 text-center flex justify-between items-center">
          <h3 className="text-lg font-semibold text-stone-50">{currentEvent?.Title || "Untitled Event"}</h3>
          <span className="text-sm text-white">{formatDate(currentEvent?.Date) || "Unknown Date"}</span>
        </div>
      </div>

      {/* Right Arrow */}
      <button onClick={onNext} className="absolute right-90 text-white text-3xl cursor-pointer hover:scale-110 transition-transform">
        <ChevronRight size={50} />
      </button>
    </div>
  );
};

export default ImageModal;
