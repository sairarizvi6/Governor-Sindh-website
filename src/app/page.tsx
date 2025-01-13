"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define interfaces for type safety
interface SlideItem {
  slides: string[];
  title: string;
  description: string;
}

interface ImageSliderProps {
  images: string[];
  title: string;
  description: string;
}

// Slide image arrays with added metadata
const SlideData: SlideItem[] = [
  {
    slides: ["/Slides/Slide-1.jpg", "/Slides/Slide-2.jpg"],
    title: "Advanced Cloud Technologies",
    description: "Cutting-edge learning experiences",
  },
  {
    slides: ["/Slides/Slide-3.jpg", "/Slides/Slide-4.jpg"],
    title: "Generative AI Insights",
    description: "Transforming innovation landscapes",
  },
  {
    slides: ["/Slides/Slide-6.jpg", "/Slides/Slide-7.jpg"],
    title: "Future of Development",
    description: "Empowering next-generation engineers",
  },
  {
    slides: ["/Slides/Slide-8.jpg", "/Slides/Slide-9.jpg"],
    title: "Solopreneur Strategies",
    description: "Mastering independent tech entrepreneurship",
  },
];

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 duration-300 ease-in-out">
      <div
        ref={sliderRef}
        className="relative w-full h-[300px] overflow-hidden"
      >
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          onClick={prevSlide}
          className="bg-white/50 rounded-full p-2 hover:bg-white/70 transition"
        >
          ←
        </Button>
        <Button
          onClick={nextSlide}
          className="bg-white/50 rounded-full p-2 hover:bg-white/70 transition"
        >
          →
        </Button>
      </div>

      {/* Slide Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
        <h3 className="text-xl font-bold truncate">{title}</h3>
        <p className="text-sm opacity-80 truncate">{description}</p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header with Advanced Background */}
      <div
        className="relative w-full bg-cover bg-blend-darken bg-center px-4 pt-12 md:pt-16"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/Main-Images/bg_house.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content Section */}
            <div className="pt-4 space-y-6 text-white">
              <div className="animate-fade-in-down">
                <h2 className="text-4xl md:text-5xl font-bold text-[#00A3E0] tracking-tight">
                  Governor Sindh
                </h2>
                <h3 className="text-2xl md:text-3xl text-[#00A3E0] tracking-tight">
                  Kamran Khan Tessori
                </h3>
              </div>

              <div className="space-y-2 animate-fade-in-left">
                <h4 className="text-2xl md:text-3xl font-semibold text-white">
                  Certified Cloud
                </h4>
                <h4 className="text-2xl md:text-3xl font-semibold text-white">
                  Applied Generative AI
                </h4>
                <h4 className="text-2xl md:text-3xl font-semibold text-white">
                  Engineer (GenEng)
                </h4>
              </div>

              <div className="space-y-4 animate-fade-in-right">
                <p className="text-xl md:text-2xl text-white font-medium">
                  Earn up to $5,000 / month
                </p>
                <p className="text-lg text-white">
                  Now admissions are open in Hyderabad
                </p>

                <Button className="w-full md:w-auto bg-[#00A3E0] text-white py-6 px-6 rounded-lg text-lg font-bold hover:bg-[#0084C0] transition-colors shadow-md hover:shadow-lg">
                  APPLY NOW
                </Button>
              </div>

              <div className="text-center md:text-left md:pb-3 mt-6 animate-fade-in-up">
                <div className="text-4xl md:text-5xl font-bold text-[#00A3E0]">
                  562,143
                </div>
                <div className="text-white">Accepted Applications</div>
              </div>
            </div>

            {/* Governor Image */}
            <div className="flex md:justify-self-end  animate-fade-in md:pt-16 md:object-right-bottom">
              <Image
                src="/Main-Images/Kamran-Tessori.png"
                alt="Governor Sindh Portrait"
                width={800}
                height={800}
                priority
                className="w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-[#004B87] mb-6 leading-tight">
            Certified Cloud Applied Generative AI Engineer (GenEng) and
            Solopreneur Developing Billion-Dollar Valued Developers
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            The pace of technological change is accelerating. Big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, and massive
            distribution networks. Solopreneurs trained in this program will win
            by automating work, directly connecting with customers, and
            developing innovative vertical metaverses.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
        {["Card-1.jpg", "Card-2.jpg", "Card-3.jpg"].map((card, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <Image
              src={`/Cards/${card}`}
              alt={`Testimonial ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image Slider Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#004B87] mb-12 leading-tight">
            Explore Our Journey and Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SlideData.map((slideSet, index) => (
              <ImageSlider
                key={index}
                images={slideSet.slides}
                title={slideSet.title}
                description={slideSet.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Core Courses Section */}
      <div className="container mx-auto py-12 px-4 md:px-6 sm:mx-2">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
          Core Courses Sequence
        </h1>

        <div className="grid mx-4 grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "/Core courses/Core-course-1.jpg", title: "Programming Fundamentals" },
            { img: "/Core courses/Core-course-2.jpg", title: "Web2 Using NextJS" },
            { img: "/Core courses/Core-course-3.jpg", title: "Earn as You Learn" }
          ].map((course, index) => (
            <div 
              key={index} 
              className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 bg-gray-100 rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={course.img}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">{course.title}</h2>
              </div>
            </div>
          ))}
        </div>
        
        {/* Advanced Courses Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-16 mb-8">
          Advanced Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 sm:mx-2 gap-8">
          {[
            { img: "/Advanced courses/Advance-Course-1.jpg", title: "Artificial Intelligence" },
            { img: "/Advanced courses/Advance-Course-2.jpg", title: "Web 3 and Metaverse" },
            { img: "/Advanced courses/Advance-Course-3.jpg", title: "Cloud-Native Computing" },
            { img: "/Advanced courses/Advance-Course-4.jpg", title: "Ambient Computing and IoT" },
            { img: "/Advanced courses/Advance-Course-5.jpg", title: "Genomics and Bioinformatics" },
            { img: "/Advanced courses/Advance-Course-6.jpg", title: "Network Programmability and Automation" }
          ].map((course, index) => (
            <div 
              key={index} 
              className={`transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 bg-gray-100 rounded-xl shadow-md overflow-hidden ${
                index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Image
                src={course.img}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">{course.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;