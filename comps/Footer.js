import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Elite<span className="text-blue-600">Academy</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer text-gray-500 hover:text-pink-600" />
              <FaTwitter className="text-2xl cursor-pointer text-gray-500 hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer text-gray-500 hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Home</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Home
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Courses</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mobile App Development
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Web Development
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              UI/UX Design
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              AI /Machine Learning
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Data Science
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Devops
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              FAQ's
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className="text-sm text-gray-800 font-semibold">
          © 2022 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            EliteAcademy{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;