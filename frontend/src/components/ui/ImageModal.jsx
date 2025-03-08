import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEvents } from "../../context/EventsContext"; 
import { formatDate } from "@/utils/formatDate.js";

const ImageModal = ({ currentIndex, onClose, onNext, onPrev, visibleEvents }) => {
    const { events } = useEvents();
  useEffect(() => {
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

  return (
    <div className="fixed inset-0 backdrop-brightness-30  flex items-center justify-center z-50 p-4">

      <button onClick={onClose} className="absolute top-6 right-6 text-white text-3xl cursor-pointer hover:scale-110 transition-transform">
        <X size={50} />
      </button>

    
      <button onClick={onPrev} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:scale-110 transition-transform">
        <ChevronLeft size={80} />
      </button>

      
      <div className="flex flex-col items-center p-5 rounded-lg ">
        <img
          src={currentEvent.Image.url}
          alt={currentEvent?.Title}
          className="w-[600px] h-[400px] object-cover rounded-lg shadow-md"
        />

        
        <div className="w-full mt-4 text-center flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-stone-50">{currentEvent?.Title}</h1>
          <span className="text-2xl text-white">{formatDate(currentEvent?.Date)}</span>
        </div>
      </div>

      
      <button onClick={onNext} className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer hover:scale-110 transition-transform">
        <ChevronRight size={80} />
      </button>
    </div>
  );
};

export default ImageModal;
