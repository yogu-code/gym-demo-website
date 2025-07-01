import React from 'react';
import { User, Users, Apple, Zap, Heart, Calendar, Target, Trophy } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Personal Training",
      description: "Customized workout plans and one-on-one guidance from certified trainers.",
      features: ["Personalized workout plans", "One-on-one sessions", "Progress tracking", "Nutrition advice"],
      popular: false
    },
    {
      icon: Users,
      title: "Group Fitness Classes",
      description: "Engaging and motivating group classes for all fitness levels.",
      features: ["Variety of class types", "Expert instructors", "Social motivation", "Flexible scheduling"],
      popular: true
    },
    {
      icon: Apple,
      title: "Nutrition Coaching",
      description: "Expert advice on healthy eating habits to complement your fitness journey.",
      features: ["Meal planning", "Dietary consultations", "Supplement guidance", "Habit formation"],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "HIIT Training",
      description: "High-intensity interval training for maximum results in minimum time."
    },
    {
      icon: Heart,
      title: "Cardio Programs",
      description: "Comprehensive cardiovascular training to improve heart health and endurance."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions and classes that fit your busy lifestyle and schedule."
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Work with trainers to set realistic goals and track your progress."
    },
    {
      icon: Trophy,
      title: "Fitness Assessments",
      description: "Regular evaluations to monitor your progress and adjust your program."
    }
  ];

  return (
    <section className="bg-black py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive Fitness Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4">
            We offer a variety of services to cater to your individual needs and preferences.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 group">
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <service.icon className="w-10 h-10 text-white" />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;