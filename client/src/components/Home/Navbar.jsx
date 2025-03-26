import React from "react";
import { FaUser } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="nav-wrapper bg-red-300 h-16 flex items-center px-6">
      {/* Logo Section */}
      <div className="logo w-1/3">
        <img src="#" alt="Logo"/>
      </div>

      {/* Navigation Links */}
      <div className="nav-links w-1/3 flex justify-center">
        <ul className="flex gap-6 items-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Report Issue</a></li>
          <li><a href="#">Map</a></li>
          <li><a href="#">Emergency Help</a></li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="icons w-1/3 flex justify-end">
        <FaUser className="text-xl cursor-pointer -ml-20" />
        {/* <FaUser className="text-xl cursor-pointer -ml-20 text-red-300" /> */}

      </div>
    </div>
  );
};
