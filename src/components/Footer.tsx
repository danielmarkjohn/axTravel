import { navigation } from '@config/routes';
import { COMPANY_METADATA } from 'data/company';
import { CONTACT_INFO } from 'data/contact';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">AxSphere</h3>
            <p className="mt-4 text-gray-300">
              {COMPANY_METADATA.tagLine}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            {navigation.map((service) => (
              <ul className="mt-2 ">
                <li>
                  <Link to={service.href} className="text-gray-300 hover:text-white">{service.name}</Link>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-300">Email: {CONTACT_INFO.email}</li>
              <li className="text-gray-300">Phone: {CONTACT_INFO.phone}</li>
              <li>
                <a
                  href="https://instagram.com/axsphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Instagram: {CONTACT_INFO.handle}
                </a>
              </li>
              <li>
                <a
                  href="https://X.com/axsphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  X: {CONTACT_INFO.handle}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/axsphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  GitHub: {CONTACT_INFO.handle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <ul className="mt-4 space-y-2">
            <li className="text-gray-300">{CONTACT_INFO.primaryAddress}</li>
              <li className="text-gray-300">{CONTACT_INFO.city} {CONTACT_INFO.pincode}</li>
              <li className="text-gray-300">{CONTACT_INFO.state}</li>
              <li className="text-gray-300">{CONTACT_INFO.country}</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AxSphere. All rights reserved. 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
