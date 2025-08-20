import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, Users, Trophy, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            ASGARD <span className="text-gray-300">STRENGTH</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
            Forge your strength. Build your character. Join the legends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg"
            >
              JOIN NOW
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="tel:+918606377013"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              CALL US NOW
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Asgard Strength?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Dumbbell className="h-12 w-12" />,
                title: "Professional Equipment",
                description: "State-of-the-art equipment for all your strength training needs"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Expert Trainers",
                description: "Certified trainers to guide you on your fitness journey"
              },
              {
                icon: <Trophy className="h-12 w-12" />,
                title: "Proven Results",
                description: "Track record of helping members achieve their fitness goals"
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "Flexible Hours",
                description: "Open 7 days a week to fit your busy schedule"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black text-white p-6 rounded-lg mb-4 inline-block group-hover:bg-gray-800 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join hundreds of members who have transformed their lives at Asgard Strength. 
            Your strongest self is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              GET STARTED TODAY
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;