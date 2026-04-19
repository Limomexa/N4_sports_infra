import { useState } from "react";
import {
  Menu,
  X,
  Send,
  MapPin,
  Ruler,
  Phone,
  User,
  Activity,
} from "lucide-react";
import Logo from "../assets/images/logo1.png";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <div className="flex items-center">
              <a
                href="#home"
                className="flex items-center group transition-all duration-300"
              >
                <div className="h-16 w-auto flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="N4 Sports Infra Logo"
                    className="h-35 pt-6 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col justify-center ml-[-30px]">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-950 group-hover:text-green-700 transition-colors duration-300 leading-[0.9] uppercase">
                    SPORTS INFRA
                  </h1>
                  <p className="text-[10px] font-bold text-green-600 mt-1 uppercase tracking-[0.2em]">
                    TURF CONSTRUCTION
                  </p>
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-1 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Get Quote Button */}
            <div className="hidden md:block">
              <a href="#contact">
                <button className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-3 cursor-pointer rounded-xl text-lg font-bold hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-green-200 flex items-center gap-2 group">
                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse "></span>
                  Get Quote
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Updated with Touch Feedback */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col p-6 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    /* TOUCH FEEDBACK ADDED HERE */
                    className="text-xl font-bold text-gray-800 hover:text-green-600 hover:bg-green-50 active:bg-green-100 active:scale-95 px-4 py-3 rounded-xl transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform">
                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
                    Get Quote
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
