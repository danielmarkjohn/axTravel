// src/components/Pricing/PricingCard.tsx
import React from 'react';

interface PricingCardProps {
  service: {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    longDescription?: string;
    technologies?: string[];
    tiers?: {
      standard: string[];
      business: string[];
      pro: string[];
    };
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ service }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-center mb-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
          {service.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      {service.tiers && (
        <>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Tiers</h4>
          <div className="mb-4">
            <h5 className="text-md font-semibold text-gray-900 mb-1">Standard</h5>
            <ul className="list-disc list-inside">
              {service.tiers.standard.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-md font-semibold text-gray-900 mb-1">Business</h5>
            <ul className="list-disc list-inside">
              {service.tiers.business.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-md font-semibold text-gray-900 mb-1">Pro</h5>
            <ul className="list-disc list-inside">
              {service.tiers.pro.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PricingCard;