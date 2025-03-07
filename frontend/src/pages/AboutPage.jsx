import HeroSection from "../components/ui/HeroSection"

const AboutPage = () => {
  return (
    <div>
      <HeroSection
        title="About Our School"
        description="Learn about our rich history, values, and educational philosophy."
        backgroundImage="/about-hero.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Our History</h2>
              <p className="text-[#4e4e4f] mb-4">
                Established in 1901, DBTR National Higher Secondary School has a rich heritage of academic excellence
                and holistic education. Founded by visionary educators, our institution has grown from a small school to
                one of the most respected educational establishments in the region.
              </p>
              <p className="text-[#4e4e4f]">
                Located in the temple town of Mayiladuthurai, our school draws inspiration from both traditional values
                and modern educational approaches, creating a unique learning environment for our students.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Historical photo of DBTR School"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Academic Excellence</h3>
                <p className="text-[#4e4e4f]">
                  We believe in providing rigorous academic programs that challenge students to reach their full
                  potential and develop critical thinking skills.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Character Development</h3>
                <p className="text-[#4e4e4f]">
                  We emphasize the importance of integrity, respect, responsibility, and compassion in all aspects of
                  education.
                </p>
              </div>
              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Holistic Growth</h3>
                <p className="text-[#4e4e4f]">
                  We nurture the intellectual, physical, emotional, and social development of each student through
                  diverse programs and activities.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 text-center">Our Campus</h2>
            <p className="text-[#4e4e4f] text-center max-w-3xl mx-auto mb-8">
              Our campus provides a conducive environment for learning with modern facilities and infrastructure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="School building"
                  className="rounded-lg shadow-sm w-full h-auto mb-3"
                />
                <h4 className="font-medium text-[#1a1a1a]">Main Building</h4>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Science laboratory"
                  className="rounded-lg shadow-sm w-full h-auto mb-3"
                />
                <h4 className="font-medium text-[#1a1a1a]">Science Labs</h4>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Sports ground"
                  className="rounded-lg shadow-sm w-full h-auto mb-3"
                />
                <h4 className="font-medium text-[#1a1a1a]">Sports Facilities</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

