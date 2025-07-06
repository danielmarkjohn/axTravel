import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LocationMarkerIcon, CalendarIcon, ClockIcon, ArrowRightIcon, ClipboardIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const TravelBooking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"distance" | "hourly" | "flatRate">("distance");
  const [pickupDate, setPickupDate] = useState<Date | null>(new Date());
  const [pickupTime, setPickupTime] = useState<Date | null>(new Date());
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [duration, setDuration] = useState<number>(1);
  const [route, setRoute] = useState("");
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  
  const navigate = useNavigate();

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!pickupLocation.trim()) {
      errors.pickupLocation = "Pickup location is required";
    }
    
    if (activeTab === "distance" && !dropoffLocation.trim()) {
      errors.dropoffLocation = "Dropoff location is required";
    }
    
    if (activeTab === "flatRate" && !route) {
      errors.route = "Please select a route";
    }
    
    if (!pickupDate) {
      errors.pickupDate = "Travel date is required";
    }
    
    if (!pickupTime) {
      errors.pickupTime = "Pickup time is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create booking data object based on active tab
    const bookingData = {
      bookingType: activeTab,
      pickupDate,
      pickupTime,
      pickupLocation,
      ...(activeTab === "distance" && { dropoffLocation }),
      ...(activeTab === "hourly" && { duration }),
      ...(activeTab === "flatRate" && { route }),
    };

    // Log the booking data to console
    console.log("Booking Data:", bookingData);
    
    // Navigate to contact page with booking data
    // navigate('/contact', {
    //   state: {
    //     from: 'booking',
    //     bookingData
    //   }
    // });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="flex items-center mb-2">
          <h2 className="text-white/90 text-md items-center">Corporate to Wedding Travel!</h2>
        </div>
        <div className="flex items-center mb-2">
          <h2 className="text-white/90 text-xl items-center">From Local Trip to Outstation! Book your Vehicle now!</h2>
        </div>
      </div>

      {/* Booking Tabs */}
      <div className="bg-gray-50 px-8 pt-6">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium text-base rounded-t-lg transition-all ${activeTab === "distance"
                ? "border-2 border-b-0 border-gray-200 bg-white text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            onClick={() => setActiveTab("distance")}
          >
            <div className="flex items-center">
              <LocationMarkerIcon className="h-5 w-5 mr-2" />
              Point to Point
            </div>
          </button>
          <button
            className={`px-6 py-3 font-medium text-base rounded-t-lg transition-all ${activeTab === "hourly"
                ? "border-2 border-b-0 border-gray-200 bg-white text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            onClick={() => setActiveTab("hourly")}
          >
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              Hourly Rental
            </div>
          </button>
          <button
            className={`px-6 py-3 font-medium text-base rounded-t-lg transition-all ${activeTab === "flatRate"
                ? "border-2 border-b-0 border-gray-200 bg-white text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            onClick={() => setActiveTab("flatRate")}
          >
            <div className="flex items-center">
              <ClipboardIcon className="h-5 w-5 mr-2" />
              Fixed Routes
            </div>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pickup Location - Common to all tabs */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className={`block w-full pl-10 pr-3 py-3 border ${formErrors.pickupLocation ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter pickup location"
              />
            </div>
            {formErrors.pickupLocation && (
              <p className="mt-1 text-sm text-red-600">{formErrors.pickupLocation}</p>
            )}
          </div>

          {/* Conditional second field based on active tab */}
          {activeTab === "distance" && (
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dropoff Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="text"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border ${formErrors.dropoffLocation ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Enter destination"
                />
              </div>
              {formErrors.dropoffLocation && (
                <p className="mt-1 text-sm text-red-600">{formErrors.dropoffLocation}</p>
              )}
            </div>
          )}

          {activeTab === "hourly" && (
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rental Duration
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ClockIcon className="h-5 w-5 text-blue-500" />
                </div>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 24].map((hours) => (
                    <option key={hours} value={hours}>
                      {hours} {hours === 1 ? 'hour' : 'hours'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {activeTab === "flatRate" && (
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Popular Routes
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ClipboardIcon className="h-5 w-5 text-blue-500" />
                </div>
                <select
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border ${formErrors.route ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Select a popular route</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="mysore">Bangalore to Mysore</option>
                  <option value="coorg">Bangalore to Coorg</option>
                  <option value="ooty">Bangalore to Ooty</option>
                  <option value="chennai">Bangalore to Chennai</option>
                </select>
              </div>
              {formErrors.route && (
                <p className="mt-1 text-sm text-red-600">{formErrors.route}</p>
              )}
            </div>
          )}

          {/* Pickup Date - Common to all tabs */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Travel Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-blue-500" />
              </div>
              <DatePicker
                selected={pickupDate}
                onChange={(date) => setPickupDate(date)}
                className={`block w-full pl-10 pr-3 py-3 border ${formErrors.pickupDate ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                minDate={new Date()}
              />
            </div>
            {formErrors.pickupDate && (
              <p className="mt-1 text-sm text-red-600">{formErrors.pickupDate}</p>
            )}
          </div>

          {/* Pickup Time - Common to all tabs */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ClockIcon className="h-5 w-5 text-blue-500" />
              </div>
              <DatePicker
                selected={pickupTime}
                onChange={(time) => setPickupTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className={`block w-full pl-10 pr-3 py-3 border ${formErrors.pickupTime ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
            </div>
            {formErrors.pickupTime && (
              <p className="mt-1 text-sm text-red-600">{formErrors.pickupTime}</p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-all"
          >
            Book Your Ride
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default TravelBooking;
