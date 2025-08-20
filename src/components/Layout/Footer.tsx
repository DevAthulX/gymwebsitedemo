import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ASGARD STRENGTH</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building strength, character, and community. Join us in your journey to become the strongest version of yourself.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/theasgardstrength" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 cursor-pointer transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/asgardstrength/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 cursor-pointer transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-white transition-colors duration-200">Membership</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Powerlifting</li>
              <li className="text-gray-300">Strength Building</li>
              <li className="text-gray-300">Bodybuilding</li>
              <li className="text-gray-300">Personal Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Near SBI Bank, Balaramapuram, Pallichal, Kerala 695501</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-300" />
                <a href="tel:+918606377013" className="text-gray-300 hover:text-white transition-colors duration-200">+91 86063 77013</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-300" />
                <a href="tel:8921537509" className="text-gray-300 hover:text-white transition-colors duration-200">8921537509</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Asgard Strength. All rights reserved. | Built with dedication and strength.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;