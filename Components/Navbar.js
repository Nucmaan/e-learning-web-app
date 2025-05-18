"use client"
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-extrabold text-indigo-700 tracking-tight hover:text-indigo-800 transition-colors cursor-pointer">E-Learn</Link>
        </div>
        {/* Center: Search Bar */}
        <div className="flex-1 mx-4 sm:mx-8 md:mx-12 flex justify-center">
          <div className="w-full max-w-lg flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm hover:shadow transition-all focus-within:ring-2 focus-within:ring-indigo-200">
            <FaSearch className="text-gray-400 mr-3 text-lg" />
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="bg-transparent outline-none flex-1 text-base text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
        {/* Right: Links & Auth */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/courses" className="text-gray-700 hover:text-indigo-700 font-semibold transition-colors relative group">
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-indigo-700 font-semibold transition-colors relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/Contact" className="text-gray-700 hover:text-indigo-700 font-semibold transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/Login" className="px-5 py-1.5 border-2 border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-50 font-semibold transition-all duration-200">Log In</Link>
          <Link href="/Register" className="px-5 py-1.5 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 font-semibold shadow hover:shadow-md transition-all duration-200 ml-2">Sign Up</Link>
        </div>
        {/* Hamburger for mobile */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-200" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} className="text-indigo-700" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-5 py-6 space-y-3 animate-fadeIn border-t border-gray-100">
          <Link href="/courses" className="block px-3 py-3 rounded-lg hover:bg-indigo-50 text-gray-700 font-semibold transition-colors">Courses</Link>
          <Link href="/About" className="block px-3 py-3 rounded-lg hover:bg-indigo-50 text-gray-700 font-semibold transition-colors">About Us</Link>
          <Link href="/Contact" className="block px-3 py-3 rounded-lg hover:bg-indigo-50 text-gray-700 font-semibold transition-colors">Contact</Link>
          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-100">
            <Link href="/Login" className="flex-1 px-4 py-2 border-2 border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-50 font-semibold transition-all duration-200">Log In</Link>
            <Link href="/Register" className="flex-1 px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 font-semibold shadow hover:shadow-md transition-all duration-200">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
