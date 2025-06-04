import React from "react";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./recomendation/PeopleToFollow";
import TrendList from "./posts/TrendList";
import TopicList from "./posts/TopicList";

const App = () => {
  return (
    <div>
      <Navigation />

      <div className="flex justify-center">
        {/* Main Area */}

        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendList />
          <TopicList />
        </div>
      </div>
    </div>
  );
};

export default App;
