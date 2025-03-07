import { useState } from "react"
import HeroSection from "../components/ui/HeroSection"
import { MapPin, Phone, Mail } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call to Strapi
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      setSubmitStatus({
        success: true,
        message: "Thank you for your message. We will get back to you soon!",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="We'd love to hear from you. Reach out with any questions or inquiries."
        backgroundImage="/contact-hero.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Get in Touch</h2>
              <p className="text-[#4e4e4f] mb-8">
                Whether you have a question about admissions, events, or anything else, our team is ready to answer all
                your questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#f5f5f5] p-3 rounded-full mr-4">
                    <MapPin className="text-[#3481e8]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1a1a1a] mb-1">Address</h3>
                    <address className="not-italic text-[#4e4e4f]">
                      DBTR NHS, Mahadhaana Street,
                      <br />
                      Kamanjar Salai, Mayiladuthurai,
                      <br />
                      Tamilnadu - 609001
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f5f5f5] p-3 rounded-full mr-4">
                    <Phone className="text-[#3481e8]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1a1a1a] mb-1">Phone</h3>
                    <p className="text-[#4e4e4f]">+91.436.422.3272</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f5f5f5] p-3 rounded-full mr-4">
                    <Mail className="text-[#3481e8]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1a1a1a] mb-1">Email</h3>
                    <p className="text-[#4e4e4f]">contact@nationalhighschool.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Send us a Message</h2>

              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#d9d9d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3481e8]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#d9d9d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3481e8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#d9d9d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3481e8]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-[#d9d9d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3481e8]"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="Event Information">Event Information</option>
                      <option value="Alumni Relations">Alumni Relations</option>
                      <option value="Donation">Donation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4a4a4a] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-[#d9d9d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3481e8]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#f54e39] text-white px-6 py-3 rounded hover:bg-[#eb242a] transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Visit Our Campus</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {/* This would be replaced with an actual Google Map embed */}
            <div className="aspect-[16/9] bg-[#eaeaea] flex items-center justify-center">
              <p className="text-[#9e9e9e]">Google Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

