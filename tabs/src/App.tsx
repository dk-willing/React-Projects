import React from "react";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <SideBar />
      <Profile />
    </div>
  );
};

export default App;
