"use client"
import React, { useState } from 'react'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 

const Result = () => {
  // Initialize state for form data, with default values for 'registrationNumber' and 'cnicNumber'
  const [formData, setFormData] = useState({
    registrationNumber: '',
    cnicNumber: ''
  });

  // Handle form submission. Prevents the default form submission behavior and logs the form data.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Log form data to the console (for debugging purposes)
    console.log('Form submitted:', formData);
    // You can replace the console.log with an actual API call or form processing logic
  };

  // Handle change in form is. This updates the formData state dynamically based on Input field name and value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Form container with background, padding, and max width */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        {/* Title of the form */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-12">
          Grand Entrance Exam Result
        </h1>

        {/* Form starts here */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Registration Number Input field */}
          <div className="space-y-2">
            <Label 
              htmlFor="registrationNumber" 
              className="block text-gray-700 text-lg font-medium"
            >
              Registration Number <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              placeholder="Registration Number"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition-all"
              required
            />
          </div>

          {/* CNIC or B-Form Input field */}
          <div className="space-y-2">
            <Label 
              htmlFor="cnicNumber" 
              className="block text-gray-700 text-lg font-medium"
            >
              CNIC or B-Form Number <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="cnicNumber"
              name="cnicNumber"
              value={formData.cnicNumber}
              onChange={handleChange}
              placeholder="CNIC or B-Form Number"
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition-all"
              required
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="bg-blue-800 text-white font-bold py-3 px-12 rounded
                       hover:bg-blue-900 transition-colors duration-200 uppercase"
            >
              Get Result
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Result;