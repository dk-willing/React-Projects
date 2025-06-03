import React from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  return (
    <aside className="sidebar fixed top-0 left-0 h-screen bg-[#1a1c1e] text-white w-20">
      <ul className="flex flex-col justify-between items-center h-full p-4">
        <div className="top">
          <li className="mb-4">
            <div className="flex items-center">
              <FaHome className="mr-2 mb-3" size={18} />
            </div>
          </li>

          <li className="mb-4">
            <div className="flex items-center">
              <FaUser className="mr-2 mb-3" size={18} />
            </div>
          </li>

          <li className="mb-4">
            <div className="flex items-center">
              <FaSearch className="mr-2 mb-3" size={18} />
            </div>
          </li>
        </div>

        <div className="bottom">
          <li>
            <IoMdSettings size={18} />
            <FaUser className="mt-4" size={18} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default SideBar;
