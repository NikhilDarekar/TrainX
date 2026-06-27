import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <img src={logo} alt="Train-X Logo" className="w-28 mb-5" />

            <p className="text-gray-600 leading-7">
              Train-X helps you stay consistent with your fitness journey.
              Track workouts, monitor progress, and achieve your goals with
              ease.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl text-gray-500">
              <a href="#" className="hover:text-orange-500 transition">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                <FaLinkedin />
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Trainers
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Resources</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Terms & Conditions
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                FAQ
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Support
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Get in Touch</h3>

            <ul className="space-y-4 text-gray-600">

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                +91 74984 51860
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                support@trainx.com
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                Mumbai, Maharashtra, India
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>© 2025 Train-X. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Made with <span className="text-red-500">❤</span> for fitness enthusiasts.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;