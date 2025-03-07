import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../images/schoolLogo.png";
import pepperLogo from "../../images/Pepper_Square_Logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] text-[#191919] px-6 md:px-20 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-x-16">
        {/* Column 1 - Logo */}
        <div className="flex flex-col items-center md:items-start md:ml-7">
          <img src={logo} alt="School Logo" className="h-30 w-auto" />
        </div>

        {/* Column 2 - School Info */}
        <div className="text-center md:text-left md:ml-[-6rem]">
          <h1 className="text-xl font-bold">DBTR National Higher Secondary School</h1>
          <p className="text-sm text-[#232C95]">Virtuousness is Life</p>
          <p className="text-sm text-[#404040] mt-2">Established in 1901, situated in the temple town of Mayiladuthurai.</p>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-[#404040]">
            <li><a className="hover:text-[#f54e39]">Admissions</a></li>
            <li><a className="hover:text-[#f54e39]">Alumni Association</a></li>
            <li><a className="hover:text-[#f54e39]">Donate</a></li>
            <li><a className="hover:text-[#f54e39]">Events</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="md:ml-[-2rem]">
          <h2 className="text-lg font-semibold ">Contact</h2>
          <p className="text-sm text-[#404040] mt-2">DBTR NHS</p>
          <p className="text-sm text-[#404040]">Mahadhaana Street, Kamanjar Salai, Mayiladuthurai, Tamilnadu - 609001</p>
          <p className="text-sm text-[#404040] mt-2">+91.436.422.3272</p>
          <p className="text-sm text-[#404040]">contact@nationalhighschool.in</p>
        </div>

        {/* Column 5 - Donate */}
        <div className="flex flex-col items-center md:items-start md:ml-[-2rem] mt-8">
          <p className="text-[#191919] font-extrabold text-xl">Big or small, you can make an impact.</p>
          <a className="bg-[#f54e39] text-white px-6 py-2 rounded inline-flex items-center mt-2 hover:text-[#f54e39] hover:bg-white hover:border-[#f54e39] hover:border-2 transition-colors">
            Donate ❤
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 pt-4 border-t border-gray-250 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} DBTR. All Rights Reserved | <a className="hover:text-[#f54e39] transition-colors">Sitemap</a></p>
        
        <div className="flex space-x-4 mt-4 md:mt-0 text-2xl">
          <a className="hover:text-[#f54e39] transition-colors"><FaTwitter /></a>
          <a className="hover:text-[#f54e39] transition-colors"><FaLinkedinIn /></a>
          <a className="hover:text-[#f54e39] transition-colors"><FaInstagram /></a>
          <a className="hover:text-[#f54e39] transition-colors"><FaFacebookF /></a>
          <a className="hover:text-[#f54e39] transition-colors"><FaYoutube /></a>
        </div>  
      </div>
      <p className="mt-4 md:mt-5 text-[#4A4A4A]">
        Designed by
        <span className="ml-4" >
          <img src={pepperLogo} alt="Pepper Square" className="inline-block h-6 w-auto" />
        </span>
      </p>

    </footer>
  );
};

export default Footer;
