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

        {/* Mobile menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xl ">
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium transition-colors">
            The School
          </Link>
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium transition-colors">
            Academics
          </Link>
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium transition-colors">
            Life @ DBTR
          </Link>
          <Link to="/" className="text-[#1a1a1a] hover:text-[#f54e39] font-medium transition-colors">
            Contact us
          </Link>
          <Link to="/" className="text-[#1a1a1a] border border-[#d9d9d9] hover:border-[#f54e39] hover:text-[#f54e39] px-4 py-2 rounded transition-colors">
            CSR
          </Link>
          <Link to="/" className="bg-[#f54e39] text-white px-4 py-2 hover:bg-white hover:text-[#f54e39] border border-[#f54e39] rounded flex items-center transition-colors">
            Donate <span className="ml-1">❤</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-md transition-colors">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The School
            </Link>
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Life @ DBTR
            </Link>
            <Link
              to="/"
              className="text-[#1a1a1a] hover:text-[#f54e39] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <div className="flex space-x-4 pt-2">
              <Link
                to="/"
                className="text-[#1a1a1a] border border-[#d9d9d9] hover:border-[#f54e39] hover:text-[#f54e39] px-4 py-2 rounded text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CSR
              </Link>
              <Link
                to="/"
                className="bg-[#f54e39] text-white hover:bg-white hover:text-[#f54e39] border border-[#f54e39] px-4 py-2 rounded flex items-center justify-center transition-colors"
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

