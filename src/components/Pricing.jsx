"use client"
import { useState } from 'react';
import { Check, Dumbbell, Trophy, Flame, Users } from 'lucide-react';

export default function GymPricingSection() {

  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: 'Basic',
      icon: Dumbbell,
      description: 'Perfect for fitness beginners',
      monthlyPrice: "2,500",
      setupFee: 0,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Free parking',
        'Basic fitness assessment',
        'Mobile app access'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      type:"month"
    },
    {
      name: 'Premium',
      icon: Trophy,
      description: 'Most popular choice for serious fitness',
      monthlyPrice: "6,000",
      setupFee: 0,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Access to pool & sauna',
        'Guest pass (2 per month)',
        'Towel service'
      ],
      popular: true,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      type:"3-month"
    },
    {
      name: 'Elite',
      icon: Flame,
      description: 'Ultimate fitness experience',
      monthlyPrice: "10,000",
      annualPrice: 79,
      setupFee: 0,
      features: [
        'Everything in Premium',
        '4 personal training sessions/month',
        'Priority class booking',
        'Massage therapy (2 sessions/month)',
        'Nutritionist consultation',
        'VIP locker room access',
        'Unlimited guest passes',
        'Supplement discounts'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      type:"year"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Membership Plans
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your body and mind with our state-of-the-art facilities and expert guidance. Choose the plan that fits your fitness journey.
          </p>
          

        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = plan.monthlyPrice;
            const type = plan.type;
            
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl transition-all duration-500 transform ${
                  plan.popular 
                    ? 'scale-105 lg:scale-110 shadow-2xl shadow-orange-500/25' 
                    : hoveredPlan === index 
                      ? 'scale-105 shadow-xl' 
                      : 'hover:scale-105 hover:shadow-xl'
                } ${
                  plan.popular
                    ? `bg-gradient-to-br ${plan.bgColor} border-2 border-orange-500/50 backdrop-blur-xl`
                    : `bg-gradient-to-br from-gray-800/80 to-gray-700/80 border border-gray-600/50 backdrop-blur-xl`
                }`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                
                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-6 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{plan.name}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-6xl font-bold text-white">₹{price}</span>
                        <span className="text-gray-400 ml-2 text-xl">/{type}</span>
                      </div>
                      {plan.setupFee === 0 && (
                        <div className="text-sm text-green-400 mt-2 font-semibold">
                          No Setup Fee
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-200">
                        <div className={`p-1 rounded-full bg-gradient-to-r ${plan.gradient} mr-3 flex-shrink-0 mt-1`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}