import { navigation } from '@config/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, ClockIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT</h3>
            <p className="text-gray-300">
              JJ Travels was founded in 2006, is a premier luxury travel agency offering high-end corporate and event transportation.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Address</h4>
              <div className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-300">
                  #12&13, Classic Enclave, Chelekere, Hennur Cross, Bangalore – 560043
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-3">Phones</h4>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <p className="text-gray-300">
                  BOOK A RIDE: <a href="tel:+919845214513" className="hover:text-white">+91 9845214513</a> / 
                  <a href="tel:+916364514513" className="hover:text-white"> 6364514513</a>
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-3">Working Hours</h4>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <p className="text-gray-300">Mon-Sun: 09:00 - 7:00pm</p>
              </div>
            </div>
          </div>
          
          {/* Our Services Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">OUR SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Local Travel</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Outstation Travel</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Corporate Travel</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Wedding Events</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Airport Transfer</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">CONTACT US</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 flex items-start">
                <LocationMarkerIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                <span>#12&13, Classic Enclave, Chelekere, Hennur Cross, Bangalore – 560043</span>
              </li>
              <li className="text-gray-300 flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <a href="tel:+919845214513" className="hover:text-white">+91 9845214513</a>
              </li>
              <li className="text-gray-300 flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <a href="tel:+916364514513" className="hover:text-white">+91 6364514513</a>
              </li>
              <li className="text-gray-300 flex items-center">
                <MailIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <a href="mailto:bookings@jjtravels.org" className="hover:text-white">bookings@jjtravels.org</a>
              </li>
              <li className="text-gray-300 flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span>Mon-Sun: 09:00 - 7:00pm</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">LINKS</h4>
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-gray-300 hover:text-white">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} JJ Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
