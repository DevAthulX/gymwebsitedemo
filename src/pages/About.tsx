import React from 'react';
import { Target, Heart, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Asgard Strength</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Where legends are forged and strength is built. Welcome to the home of champions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Asgard Strength was born from a simple belief: that everyone deserves to discover their inner strength. 
                Located in the heart of Balaramapuram, we've been serving the local community with dedication and passion 
                for fitness excellence.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Named after the mythical realm of the gods, our gym embodies the spirit of strength, courage, and 
                perseverance. We believe that true strength comes not just from physical power, but from the character 
                and determination built through consistent training and community support.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="text-center">
                <div className="text-6xl font-bold text-black mb-2">500+</div>
                <div className="text-xl text-gray-600">Members Strong</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide a welcoming, supportive environment where individuals of all fitness levels can 
                achieve their strength and wellness goals. We are committed to fostering a community that 
                celebrates progress, embraces challenges, and builds lasting friendships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Heart className="h-12 w-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the premier strength training facility in Kerala, known for our exceptional community, 
                expert guidance, and unwavering commitment to helping every member become the strongest 
                version of themselves, both physically and mentally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from equipment maintenance to member service."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community",
                description: "We build a supportive community where everyone feels welcome and motivated to succeed."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Progress",
                description: "We celebrate every milestone and support continuous improvement in all aspects of fitness."
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white text-black p-4 rounded-lg mb-4 inline-block group-hover:bg-gray-200 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Head Coach",
                role: "Strength & Conditioning Specialist",
                description: "Certified trainer with 10+ years experience in powerlifting and strength training."
              },
              {
                name: "Fitness Director",
                role: "Exercise Physiologist",
                description: "Expert in movement science and injury prevention with a passion for bodybuilding."
              },
              {
                name: "Community Manager",
                role: "Member Experience Coordinator",
                description: "Dedicated to creating an inclusive environment where every member feels valued."
              }
            ].map((member, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Photo Coming Soon</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;