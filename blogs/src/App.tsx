import React, { useState } from "react";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./recomendation/PeopleToFollow";
import TrendList from "./posts/TrendList";
import TopicList from "./posts/TopicList";
import { BlogProvider } from "./appContext/BlogContext";
import { IoAddCircle } from "react-icons/io5";
import { Blog } from "./types/BlogType";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  // Temporal Variable

  const blog = {
    id: 2,
    title: "This must be deleted",
    description: "This would be deleted",
    image: "https://something.com",
    time: "3:00am",
  };

  function openModalForNewBlog() {
    setIsModalOpen(true);
    setEditingBlog(null);
  }

  function openModalForEdit() {
    setIsModalOpen(false);
    setEditingBlog(blog);
  }

  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          {/* Main Area */}

          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="flex justify-center items-center bg-black text-white rounded px-4 py-2 "
              >
                Add New Blog <IoAddCircle className="ml-[.5rem]" />
              </button>

              {/* Article List */}

              {/* {isModalOpen && <Modal></Modal>} */}
            </div>
          </section>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendList />
            <TopicList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
