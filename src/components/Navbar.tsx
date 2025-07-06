// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { navigation } from "@config/routes";

const Navbar: React.FC = () => {
  const location = useLocation();

  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const isActivePath = (path: string): boolean => {
    if (path === "/" && location.pathname !== "/") {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex justify-between h-16">
              <div className="flex items-center justify-between flex-1">
                {/* Logo */}
                <div className="flex items-center">
                  <Link
                    to="/"
                    className="flex items-center space-x-2"
                    aria-label="AxSphere Home"
                  >
                    <span className="text-xl font-bold text-primary sm:text-2xl">
                      JJTravels
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                        isActivePath(item.href)
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-900 hover:border-primary hover:text-primary"
                      }`}
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 pl-3 pr-4 text-base font-medium border-l-4 transition-colors duration-200 ${
                    isActivePath(item.href)
                      ? "border-primary text-primary bg-primary-50"
                      : "border-transparent text-gray-900 hover:bg-gray-50 hover:border-primary hover:text-primary"
                  }`}
                  aria-label={`Navigate to ${item.name} (mobile)`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;