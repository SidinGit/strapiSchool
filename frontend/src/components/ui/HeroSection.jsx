const HeroSection = ({ title, description, backgroundImage}) => {
    return (
      <section
        // className="relative bg-cover bg-center py-16 md:py-24 h-100 w-auto"
        className="relative bg-cover bg-center bg-no-repeat py-32 md:py-48 flex flex-col justify-center items-center text-center border-2 border-black"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          boxShadow: "0px 8px 5px -3px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {description && <p className=" font-poppins max-w-3xl mx-auto text-lg md:text-xl opacity-90">{description}</p>}
        </div>
      </section>
    )
  }
  
  export default HeroSection
  
  