import React from 'react';

const FounderSection = () => {
  return (
    <div className="relative">
      <div className="bg-primary rounded-md p-6 relative overflow-hidden">
        <div className="flex flex-col items-center">
          {/* Circular image with white border */}
          <div className="rounded-full border-4 border-white overflow-hidden w-32 h-32 mb-4">
            <img
              src="/logo.webp"
              alt="Aditya Choudhary"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Welcome text */}
          <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-1">Welcome to</h3>
            <div className="bg-white text-primary px-4 py-1 rounded-md inline-block mb-2">
              <p className="font-bold uppercase">flexoza</p>
            </div>
            <h3 className="text-2xl font-bold">by Rugved</h3>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-lg font-medium">
          Rugved wagh, founder of flexoza
        </p>
      </div>
    </div>
  );
};

export default FounderSection;