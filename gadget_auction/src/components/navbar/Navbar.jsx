import React from 'react';
import logo from '../../assets/logo.png';
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
      <div className="relative bg-white shadow-sm px-6">
        <div className="max-w-6xl mx-auto flex items-center h-16">
          {/* Left: logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo_image" className="w-12 h-12" />
          </div>

          {/* Center: navigation (perfectly centered) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex gap-8 items-center">
              <button className="text-gray-800 hover:text-yellow-500 font-medium">Home</button>
              <button className="text-gray-800 hover:text-yellow-500 font-medium">Auctions</button>
              <button className="text-gray-800 hover:text-yellow-500 font-medium">Categories</button>
              <button className="text-gray-800 hover:text-yellow-500 font-medium">How to work</button>
            </div>
          </div>

          {/* Right: notifications + avatar */}
          <div className="ml-auto flex items-center gap-5">
            <IoIosNotificationsOutline size={30} />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;