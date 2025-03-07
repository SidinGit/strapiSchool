import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from "../../images/schoolLogo.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between md:px-10">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="h-18 w-auto" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xl">
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium">
            The School
          </Link>
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium">
            Academics
          </Link>
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium">
            Life @ DBTR
          </Link>
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium">
            Contact us
          </Link>
          <Link to="/" className="text-[#1a1a1a] border border-[#d9d9d9] hover:border-[#f54e39] px-4 py-2 rounded">
            CSR
          </Link>
          <Link to="/" className="bg-[#f54e39] text-white px-4 py-2 rounded flex items-center">
            Donate <span className="ml-1">❤</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              The School
            </Link>
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Life @ DBTR
            </Link>
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <div className="flex space-x-4 pt-2">
              <Link
                to="/"
                className="text-[#1a1a1a] border border-[#d9d9d9] hover:border-[#f54e39] px-4 py-2 rounded text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                CSR
              </Link>
              <Link
                to="/"
                className="bg-[#f54e39] text-white px-4 py-2 rounded flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate <span className="ml-1">❤</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

