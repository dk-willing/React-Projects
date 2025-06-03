import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  function handleBannerUpdate(e: any) {
    const file = e.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  }

  function handleProfileChange(e: any) {
    const file = e.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  }

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Backround image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-700 text-white hover:bg-gray-600 rounded-full p-2">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            name="banner-upload"
            id="banner-upload"
            accept="image/jpeg"
            onChange={handleBannerUpdate}
            className="hidden"
          />
        </button>
      </div>

      <div className="flex mx-4 items-center mt-4">
        <div>
          <img
            src={profileUrl}
            alt="Profile Picture"
            className="w-40 h-40 object-cover border-2 border-gray-500 rounded-full"
          />

          <button className="relative -top-6 left-8 z-100 rounded-full p-2 bg-gray-700 text-white hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={16} />
            </label>

            <input
              type="file"
              name="profile-upload"
              id="profile-upload"
              accept="image/jpeg"
              onChange={handleProfileChange}
              className="hidden"
            />
          </button>
        </div>

        {/* Channel Description */}
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Willing Codes</h1>
          <p>1M Views</p>
          <p className="mt-4">
            This is a short description of what views can expect. It gives an
            overview of what the video is about
          </p>

          <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded-sm cursor-pointer hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
