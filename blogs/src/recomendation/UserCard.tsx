import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserProps {
  index: number;
  person: {
    name: string;
    following: boolean;
  };
}

const UserCard = ({ index, person }: UserProps) => {
  return (
    <div className="flex justify-between items-center">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>

      <button
        className={`cursor-pointer ${
          person.following
            ? "bg-gray-100 "
            : "bg-blue-600 text-white hover:bg-blue-500"
        } px-4 py-1 rounded-sm transition`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
