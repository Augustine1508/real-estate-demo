import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 tracking-wide"
        >
          RealEstate<span className="text-gray-900">Demo</span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="text-2xl md:hidden hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/properties" className="hover:text-blue-600">Properties</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4 font-medium ">
          <li><Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/properties" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Properties</Link></li>
          <li><Link to="/about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
