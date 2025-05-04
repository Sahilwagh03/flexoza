import React, { useState } from 'react';
import { Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg mb-4">
        Enter your name/email below to get instant access:
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Full Name..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
          />
        </div>
        
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
          />
        </div>
        
        <div className="mb-6 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
            <span className="text-gray-500 mr-1">🇮🇳</span>
            <span className="text-gray-500">•</span>
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 pl-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md font-medium transition-all duration-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Get Instant Access Now
        </button>
        
        <p className="text-xs text-center mt-2 text-gray-500">
          *your data will not be shared*
        </p>
      </form>
    </div>
  );
};

export default LeadForm;