import React from 'react';
import { Check, Star, Phone, ArrowRight, MapPin } from 'lucide-react';

const Membership: React.FC = () => {
  const membershipPlans = [
    {
      name: "Basic",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym equipment",
        "Basic workout guidance",
        "Locker facilities",
        "7 days a week access"
      ],
      popular: false
    },
    {
      name: "Premium",
      description: "Ideal for serious fitness enthusiasts",
      features: [
        "All Basic features",
        "Personal training sessions",
        "Nutrition consultation",
        "Progress tracking",
        "Priority equipment access"
      ],
      popular: true
    },
    {
      name: "Elite",
      description: "For dedicated athletes and competitors",
      features: [
        "All Premium features",
        "Unlimited personal training",
        "Competition preparation",
        "Customized meal plans",
        "24/7 gym access",
        "Supplement guidance"
      ],
      popular: false
    }
  ];

  const handleVisitGym = () => {
    const address = "Near SBI Bank, Balaramapuram, Pallichal, Kerala 695501";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Asgard Strength</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Choose the membership plan that fits your fitness goals
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-50 rounded-lg p-8 ${
                  plan.popular ? 'border-4 border-black shadow-xl scale-105' : 'border border-gray-200'
                } transition-all duration-300 hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-gray-700">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Contact us for detailed pricing information and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918606377013"
                className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Pricing
              </a>
              <button
                onClick={handleVisitGym}
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Visit Our Gym
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Student Discount</h3>
              <p className="text-gray-700 mb-4">
                Students get special discounts on all membership plans. Valid student ID required.
              </p>
              <div className="text-3xl font-bold text-green-600">Special Rates</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Annual Membership</h3>
              <p className="text-gray-700 mb-4">
                Save more with our annual membership plans. Contact us for exclusive annual rates.
              </p>
              <div className="text-3xl font-bold text-green-600">Best Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Asgard Strength?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Trainers",
                description: "Certified professionals with years of experience"
              },
              {
                title: "Premium Equipment",
                description: "State-of-the-art machines and free weights"
              },
              {
                title: "Flexible Hours",
                description: "Open 7 days a week to fit your schedule"
              },
              {
                title: "Community",
                description: "Join a supportive fitness community"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Don't wait any longer. Start your fitness journey today and become the strongest version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918606377013"
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call to Join Now
            </a>
            <button
              onClick={handleVisitGym}
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Gym
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started Today!</h2>
            <p className="text-gray-700 mb-6">
              Call us now to schedule your free consultation and tour of our facilities.
            </p>
            <div className="text-2xl font-bold text-black mb-2">
              +91 86063 77013 | 8921537509
            </div>
            <p className="text-gray-600">
              Near SBI Bank, Balaramapuram, Pallichal, Kerala 695501
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;