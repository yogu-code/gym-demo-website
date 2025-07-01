import React from "react";
import { Target, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                We're More Than Just a Gym
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Fitness First, we're more than just a gym; we're a community
                dedicated to helping you achieve your fitness goals. Our
                experienced trainers provide personalized guidance, and our
                modern facilities offer a wide range of equipment and classes to
                suit all fitness levels.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're just starting your fitness journey or you're a
                seasoned athlete, we provide the support, motivation, and
                resources you need to transform your body and mind.
              </p>
            </div>
          </div>
          <div className="-space-y-8">
            <Image
              src={
                "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={700}
              height={700}
              alt="about section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
