import React from 'react';
import { Dumbbell, Target, Users, Trophy, Clock, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Comprehensive strength training programs designed to help you achieve your fitness goals
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="h-12 w-12" />,
                title: "Powerlifting",
                description: "Master the big three: squat, bench press, and deadlift with expert coaching and progressive programming.",
                features: [
                  "Competition preparation",
                  "Technique refinement",
                  "Progressive overload programs",
                  "One-on-one coaching"
                ]
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: "Strength Building",
                description: "Comprehensive strength training programs for all fitness levels, from beginners to advanced athletes.",
                features: [
                  "Customized workout plans",
                  "Progressive strength training",
                  "Functional movement patterns",
                  "Injury prevention focus"
                ]
              },
              {
                icon: <Trophy className="h-12 w-12" />,
                title: "Bodybuilding",
                description: "Sculpt your physique with targeted muscle building programs and expert nutrition guidance.",
                features: [
                  "Muscle hypertrophy training",
                  "Posing and presentation",
                  "Competition prep",
                  "Nutrition coaching"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="bg-black text-white p-4 rounded-lg mb-4 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Personal Training",
                description: "One-on-one coaching tailored to your specific goals and needs"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Flexible Scheduling",
                description: "Training sessions that fit your busy lifestyle and schedule"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Goal Setting",
                description: "Structured approach to achieving your fitness milestones"
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Competition Prep",
                description: "Specialized training for powerlifting and bodybuilding competitions"
              }
            ].map((service, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-black text-white p-3 rounded-lg mb-4 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Training Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive fitness evaluation and goal setting session"
              },
              {
                step: "02",
                title: "Program Design",
                description: "Customized training plan based on your goals and abilities"
              },
              {
                step: "03",
                title: "Training",
                description: "Guided workouts with proper form and progressive overload"
              },
              {
                step: "04",
                title: "Progress Tracking",
                description: "Regular assessments and program adjustments for optimal results"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Strength Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Join us today and discover what your body is truly capable of achieving
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/membership"
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              JOIN NOW
            </a>
            <a
              href="tel:+918606377013"
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              CALL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;