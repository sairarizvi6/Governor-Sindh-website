"use client";

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi"; // Menu icon for mobile view
import { RiCloseLargeFill } from "react-icons/ri"; // Close icon for mobile view
import { IoIosArrowDown } from "react-icons/io"; // Down arrow icon for dropdown menu
import Link from "next/link"; 
import Image from "next/image"; 
import { Button } from "@/components/ui/button";  

const Navbar = () => {
  // State for handling mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  
  // State for handling dropdown visibility (for Courses)
  const [dropdownOpen, setDropdownOpen] = useState(false);

 
  return (
    <div className="sticky top-0 z-30 w-full bg-[#004B87] backdrop-blur-md">
      {/* Navbar container */}
      <nav className="flex items-center justify-between w-full p-4 lg:px-8 lg:py-5">
        <div className="flex items-center justify-between w-full">
          <div className="m-auto flex h-16 w-[95%] items-center gap-4 justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
            {/* Logo Section */}
            <Image
              src="/favicon.ico" // Logo image source
              alt="logo"
              width={50}
              height={50}
              className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
              priority // Ensures logo is loaded with high priority
            />
            <h1 className="hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl:text-2xl">
              Tuition Free Education Program on Latest Technologies
            </h1>
            <h1 className="text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
              Tuition Free Program
            </h1>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex gap-8 text-white">
              {/* Links for navigation */}
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
              <Link href="/apply" className="hover:text-gray-200">
                Apply
              </Link>
              <Link href="/jobs" className="hover:text-gray-200">
                Jobs
              </Link>
              <Link href="/result" className="hover:text-gray-200">
                Result
              </Link>

              {/* Dropdown for Courses */}
              <div
                id="CourseButton"
                className="relative cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
              >
                <div className="flex items-center hover:text-gray-200">
                  Courses <IoIosArrowDown className="ml-1 mt-2" />
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-zinc-50 shadow-xl shadow-gray-500 py-4 pt-2 sm:h-auto text-zinc-800 w-fit h-fit text-left text-nowrap">
                    {/* Dropdown Content */}
                    <div className="pt-0 space-x-4 px-4">
                      <h2 className="text-xl font-semibold mb-2">
                        Core Courses
                      </h2>
                      <ul className="space-y-2">
                        {/* List of Core Courses */}
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Programming Fundamentals
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Web2 Using NextJS
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Earn as You Learn
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <hr className="my-4 mx-4 border-gray-300" />
                    <div className="pt-0 space-x-4 px-4">
                      <div className="-space-x-4">
                        <h2 className="text-xl font-semibold mb-2 -mt-2">
                          Advanced Courses
                        </h2>
                      </div>
                      <ul className="space-y-2">
                        {/* List of Advanced Courses */}
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Web 3 and Metaverse
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Cloud-Native Computing
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Artificial Intelligence (AI) and Deep Learning
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Ambient Computing and IoT
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Genomics and Bioinformatics
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-blue-800">
                            Network Programmability and Automation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <Button
              className="text-white text-3xl lg:hidden"
              onClick={() => setIsOpen(!isOpen)} // Toggle the mobile menu visibility
            >
              {isOpen ? <RiCloseLargeFill /> : <HiMenuAlt3 />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 z-40 h-screen w-full bg-[#004B87] lg:hidden">
          <div className="flex flex-col items-start p-6 space-y-4 text-white">
            {/* Close Button for Mobile Menu */}
            <Button
              className="self-end text-xl mb-6 "
              onClick={() => setIsOpen(false)} // Close the mobile menu
            >
              <RiCloseLargeFill />
            </Button>
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)} // Close menu after clicking
              className="py-2 w-full border-b border-gray-400 hover:bg-blue-800"
            >
              Home
            </Link>
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="py-2 w-full border-b border-gray-400 hover:bg-blue-800"
            >
              Apply
            </Link>
            <Link
              href="/jobs"
              onClick={() => setIsOpen(false)}
              className="py-2 w-full border-b border-gray-400 hover:bg-blue-800"
            >
              Jobs
            </Link>
            <Link
              href="/result"
              onClick={() => setIsOpen(false)}
              className="py-2 w-full border-b border-gray-400 hover:bg-blue-800"
            >
              Result
            </Link>

            {/* Mobile Dropdown for Courses */}
            <div className="w-full">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
                className="py-2 w-full cursor-pointer border-b border-gray-400 hover:bg-blue-800"
              >
                Courses <IoIosArrowDown className="ml-1 justify-self-end" />
              </div>
              {dropdownOpen && (
                <div className="">
                  {/* Mobile Dropdown Content */}
                  <div className="mb-4 overflow-y-auto rounded-xl bg-[#7cbdeb] h-[250px]">
                    <h2 className="mt-3 px-2 text-center text-lg font-bold text-white">
                      Core Courses
                    </h2>
                    <ul className="space-y-2">
                      {/* Mobile List of Core Courses */}
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Programming Fundamentals
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Web2 Using NextJS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Earn as You Learn
                        </Link>
                      </li>
                    </ul>
                    <hr className="my-6 mb-4 border-gray-300" />
                    <h2 className="text-xl font-semibold justify-self-center mb-2">
                      Advanced Courses
                    </h2>
                    <ul className="space-y-2">
                      {/* Mobile List of Advanced Courses */}
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Web 3 and Metaverse
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Cloud-Native Computing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Artificial Intelligence (AI) and Deep Learning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Ambient Computing and IoT
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Genomics and Bioinformatics
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex border-b hover:text-blue-800 border-[#3695d8] py-3 mx-2 text-sm text-white sm:text-base"
                        >
                          Network Programmability and Automation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;