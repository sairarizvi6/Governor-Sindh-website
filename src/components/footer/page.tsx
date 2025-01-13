import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-4 bg-gray-200 text-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Core Courses Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Core Courses</h2>
          <ul className="space-y-2">
            {[
              { href: "/programming-fundamentals", label: "Programming Fundamentals" },
              { href: "/web2-nextjs", label: "Web2 Using NextJS" },
              { href: "/earn-learn", label: "Earn as You Learn" },
            ].map((course, index) => (
              <li key={index}>
                <Link href={course.href} className="text-black hover:text-blue-500">
                  {course.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Advanced Courses Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Advanced Courses</h2>
          <ul className="space-y-2">
            {[
              { href: "/web3-metaverse", label: "Web 3 and Metaverse" },
              { href: "/cloud-native", label: "Cloud-Native Computing" },
              { href: "/ai-deep-learning", label: "Artificial Intelligence (AI) and Deep Learning" },
              { href: "/ambient-computing", label: "Ambient Computing and IoT" },
              { href: "/genomics", label: "Genomics and Bioinformatics" },
              { href: "/network", label: "Network Programmability and Automation" },
            ].map((course, index) => (
              <li key={index}>
                <Link href={course.href} className="text-black hover:text-blue-500">
                  {course.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          <div className="flex space-x-4 mb-4">
            {[
              { href: "#", icon: <FaFacebookF className="w-6 h-6" />, bg: "bg-blue-700" },
              { href: "#", icon: <FaYoutube className="w-6 h-6" />, bg: "bg-[#FF0000]" },
              { href: "#", icon: <FaTwitter className="w-6 h-6" />, bg: "bg-blue-400" },
              { href: "#", icon: <FaInstagram className="w-6 h-6" />, bg: "bg-gradient-to-bl from-violet-400 via-orange-600 to-yellow-500" },
              { href: "#", icon: <AiOutlineTikTok className="w-6 h-6" />, bg: "bg-black" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${social.bg}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Contact Email */}
          <Link 
            href="mailto:education@governorsindh.com" 
            className="flex items-center text-blue-900 hover:underline"
          >
            <Mail className="w-5 h-5 mr-2" />
            education@governorsindh.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;