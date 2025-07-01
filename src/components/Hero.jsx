"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Dumbbell } from "lucide-react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Heading stays at top in both views */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Unleash</span>
                <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Your
                </span>
                <span className="block">Potential</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg">
                Transform your body and mind with our expert trainers and
                state-of-the-art facilities
              </p>
            </div>

            {/* Image appears here on mobile only */}
            <div className="lg:hidden mt-6">
              <Image
                className="rounded-lg overflow-hidden bg-orange-500 shadow-lg shadow-orange-500/50 w-full"
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={700}
                height={700}
                alt="Gym workout"
                priority
              />
            </div>

            {/* Buttons stay below in both views */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25">
                Get Started
              </button>
              <a
                href="#about"
                className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Image (desktop only) */}
          <div className="hidden lg:block lg:w-1/2">
            <Image
              className="rounded-lg overflow-hidden bg-orange-500 shadow-lg shadow-orange-500/50 w-full"
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={700}
              height={700}
              alt="Gym workout"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
