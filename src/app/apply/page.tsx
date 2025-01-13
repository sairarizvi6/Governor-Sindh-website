import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button"; 
import Link from "next/link";

// Component for the Apply page
const Apply = () => {
  // Array of steps for social media platforms
  const steps = [
    { id: 1, label: 'Facebook', icon: <FaFacebookF className="w-6 h-6" /> },
    { id: 2, label: 'Youtube', icon: <FaYoutube className="w-6 h-6" /> },
    { id: 3, label: 'Twitter', icon: <FaTwitter className="w-6 h-6" /> },
    { id: 4, label: 'Instagram', icon: <FaInstagram className="w-6 h-6" /> },
    { id: 5, label: 'Apply', icon: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main card container */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        {/* Heading and Description */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
            Before continuing to the application, please subscribe on these social media platforms.
          </h1>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-4 mb-8">
          <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-blue-600 bg-blue-700">
            <FaFacebookF className="w-6 h-6" />
          </Link>
          <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-red-600 bg-red-500">
            <FaYoutube className="w-6 h-6" />
          </Link>
          <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-blue-400 bg-blue-300">
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-pink-600 bg-pink-500">
            <FaInstagram className="w-6 h-6" />
          </Link>
        </div>

        {/* Continue button */}
        <div className="justify-self-center items-center">
        <Button className="bg-blue-500 hover:bg-blue-600  text-white font-semibold py-3 px-8 rounded-md text-lg mb-6 w-full md:w-auto">
          CONTINUE
        </Button>
        </div>

        {/* Link for already applied users */}
        <div className="text-gray-600 text-center">
          Already applied? 
          <a href="#" className="text-blue-500 hover:text-blue-600 ml-1">
            Get Admit Card
          </a>
        </div>

        {/* Steps section */}
        <div className="flex flex-wrap justify-center gap-4 border-t pt-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center gap-2 text-gray-600"
            >
              {/* Step indicator */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${step.id === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}
              `}>
                {step.id}
              </div>
              {/* Step label (hidden on smaller screens) */}
              <span className="hidden md:inline">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apply;