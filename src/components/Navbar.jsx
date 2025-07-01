"use client";
import React, { useState, useEffect } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-4 lg:px-8 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg shadow-lg shadow-black/30 border-b border-gray-800/50"
          : "bg-black shadow-md shadow-black/20"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Dumbbell className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold text-white">Fitness First</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
          >
            About
          </a>
          <a
            href="#service"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
          >
            Pricing
          </a>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Now
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!AWS_REGION)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#"
              className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#service"
              className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 mt-4">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}