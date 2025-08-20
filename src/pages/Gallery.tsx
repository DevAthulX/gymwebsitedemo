import React from 'react';
import { Trophy, Users, Dumbbell, Award, MapPin } from 'lucide-react';

const Gallery: React.FC = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery & Achievements</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Celebrating our members' success stories and the strength of our community
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="h-12 w-12" />,
                title: "Regional Champions",
                description: "15+ regional powerlifting championships won by our members",
                count: "15+"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Active Members",
                description: "Growing community of dedicated strength athletes",
                count: "500+"
              },
              {
                icon: <Dumbbell className="h-12 w-12" />,
                title: "Training Hours",
                description: "Collective hours of strength training delivered",
                count: "10,000+"
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Success Stories",
                description: "Members who achieved their transformation goals",
                count: "200+"
              }
            ].map((achievement, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="bg-black text-white p-4 rounded-lg mb-4 inline-block">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold mb-2 text-black">{achievement.count}</div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Photo Gallery</h2>
          <p className="text-center text-gray-600 mb-8">
            Coming soon - Your gym images will be displayed here
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Gym Interior", placeholder: "gym-interior-1.jpg" },
              { title: "Training Session", placeholder: "training-session-1.jpg" },
              { title: "Competition Winners", placeholder: "competition-winners-1.jpg" },
              { title: "Equipment Setup", placeholder: "equipment-setup-1.jpg" },
              { title: "Member Achievements", placeholder: "member-achievements-1.jpg" },
              { title: "Community Event", placeholder: "community-event-1.jpg" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 mb-2">📸</div>
                    <div className="text-sm text-gray-600">{item.placeholder}</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">Image placeholder - Upload your gym photos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Spotlight */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Member Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Success Story #1",
                achievement: "Lost 30kg in 8 months",
                quote: "Asgard Strength changed my life. The supportive community and expert guidance helped me achieve goals I never thought possible."
              },
              {
                name: "Success Story #2",
                achievement: "Deadlifted 200kg",
                quote: "From never touching a barbell to deadlifting 200kg - the trainers here know how to unlock your potential."
              },
              {
                name: "Success Story #3",
                achievement: "Won regional competition",
                quote: "The competition preparation at Asgard Strength is world-class. They helped me become a champion."
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-sm">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-gray-300 text-center font-medium mb-4">{member.achievement}</p>
                <p className="text-gray-400 text-center text-sm italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Join our community of champions and start your journey to strength today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/membership"
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              JOIN OUR FAMILY
            </a>
            <button
              onClick={handleVisitGym}
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <MapPin className="mr-2 h-5 w-5" />
              VISIT US TODAY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;