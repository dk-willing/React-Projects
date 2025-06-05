import React, { useState } from "react";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./recomendation/PeopleToFollow";
import TrendList from "./posts/TrendList";
import TopicList from "./posts/TopicList";
import { BlogProvider } from "./appContext/BlogContext";
import { IoAddCircle } from "react-icons/io5";
import type { Blog } from "./types/BlogType";
import Modal from "./modal-component/Modal";
import BlogForm from "./modal-component/BlogForm";
import ArticleList from "./posts/ArticleList";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  function openModalForNewBlog() {
    setIsModalOpen(true);
    setEditingBlog(null);
  }

  function openModalForEdit(blog: Blog) {
    setIsModalOpen(true);
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
                className="flex justify-center items-center bg-black text-white rounded px-4 py-2 cursor-pointer"
              >
                Add New Blog <IoAddCircle className="ml-[.5rem]" />
              </button>

              {/* Article List */}
              <ArticleList onEdit={openModalForEdit} />

              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setIsModalOpen(false)}
                  />
                </Modal>
              )}
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
