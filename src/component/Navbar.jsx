import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router";
import Logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "CV", href: "/cv" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleNavClick = (itemName) => {
    setActiveTab(itemName);
    setIsMenuOpen(false);
  };

  return (
    <div className={`${isDarkMode ? "dark bg-gray-900" : "bg-white"} transition-colors duration-300`}>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="logo" className="w-10 h-10 object-cover rounded-full" />
              <Link to="/">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">ME|Dev</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href || activeTab === item.name
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/Ellen_Mensah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 text-black text-sm font-medium rounded-lg hover:bg-[#FD0315] transition-colors duration-200 shadow-sm">
                  Online CV
                </button>
              </a>

              <Link to="/contact">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-[#FD0315] transition-colors duration-200 shadow-sm">
                  Hire Me
                </button>
              </Link>

              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#FD0315] dark:hover:text-[#FD0315] transition-colors duration-200"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#FD0315] dark:hover:text-[#FD0315] transition-colors duration-200"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#FD0315] dark:hover:text-[#FD0315] transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Navigation Menu - moved inside header */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-4 py-3 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname === item.href || activeTab === item.name
                      ? "text-[#FD0315] bg-orange-50 dark:bg-[#FD0315]/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#FD0315] dark:hover:text-[#FD0315] hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <Link to="/contact">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm">
                    Hire Me
                  </button>
                </Link>
                <a
                  href="/Ellen_Mensah_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full px-4 py-2 bg-[#FD0315] text-white text-sm font-medium rounded-lg hover:bg-[#FD0315] transition-colors duration-200 shadow-sm">
                    Online CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
