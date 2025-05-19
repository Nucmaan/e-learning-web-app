"use client"
import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition-colors cursor-pointer flex items-center gap-2">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="hidden xs:inline">E-Learn</span>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden sm:flex flex-1 mx-4 lg:mx-8 justify-center">
          <div className="w-full max-w-lg relative group">
            <div className="w-full flex items-center bg-gray-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm group-hover:shadow-md transition-all border border-gray-200 group-hover:border-blue-200">
              <FaSearch className="text-gray-400 group-hover:text-blue-500 transition-colors mr-3 text-lg" />
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="bg-transparent outline-none flex-1 text-sm sm:text-base text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Right: Links & Auth */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/Contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/Login" className="px-4 sm:px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 font-medium transition-all duration-200 text-sm sm:text-base">
              Log In
            </Link>
            <Link href="/Register" className="px-4 sm:px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium shadow-sm hover:shadow-md transition-all duration-200 text-sm sm:text-base">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 sm:hidden" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Search"
          >
            <FaSearch size={20} className="text-gray-700" />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? 
              <FaTimes size={22} className="text-gray-700" /> : 
              <FaBars size={22} className="text-blue-600" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Search - Shown when search button is clicked on smallest screens */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 p-4">
          <div className="relative">
            <div className="w-full flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
              <FaSearch className="text-gray-400 mr-3 text-lg" />
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="bg-transparent outline-none flex-1 text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl px-4 sm:px-6 py-6 space-y-4 animate-fadeIn border-t border-gray-100">
          <Link href="/courses" className="block px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 font-medium transition-colors">
            Courses
          </Link>
          <Link href="/About" className="block px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 font-medium transition-colors">
            About Us
          </Link>
          <Link href="/Contact" className="block px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 font-medium transition-colors">
            Contact
          </Link>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-100">
            <Link href="/Login" className="w-full px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 font-medium text-center transition-all duration-200">
              Log In
            </Link>
            <Link href="/Register" className="w-full px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium text-center shadow-sm hover:shadow-md transition-all duration-200">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
