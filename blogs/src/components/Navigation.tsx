import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navigation() {
  return (
    <nav className="border-2 border-gray-200 p-4 flex items-center justify-between text-black">
      <div className="flex items-center ml-[5rem] gap-2 border-2 px-4 py-2 rounded-full max-w-md">
        <FaSearch />

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none"
        />
      </div>

      <section className="flex items-center mr-[5rem]">
        <FaUserCircle className="text-3xl mr-2" />
      </section>
    </nav>
  );
}

export default Navigation;
