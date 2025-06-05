import React, { useEffect, useState } from "react";
import { useBlogs } from "../appContext/BlogContext";
import type { Blog } from "../types/BlogType";

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

function BlogForm({ existingBlog, onClose }: BlogFormProps) {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(
    existingBlog?.time || new Date().toLocaleString()
  );

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    if (image === "") {
      blog.image = "https://placehold.co/400x300";
    }

    if (title === "" || description === "") {
      alert("Kindly add a story to the blog");
      return;
    }

    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }

    onClose();
  };

  function cancelEdit() {
    onClose();
  }

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-4 text-gray-900">
        {existingBlog ? "Editing Blog" : "Add New Blog"}
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Add Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full block bg-transparent border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          placeholder="Add Blog Content"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full block bg-transparent border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black h-full"
        />

        <input
          type="text"
          placeholder="Enter Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full block bg-transparent border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <section className="flex justify-end mt-6 space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-black "
        >
          {existingBlog ? "Update Blog" : "Add New Blog"}
        </button>

        <button
          onClick={cancelEdit}
          className="bg-gray-200 text-black px-6 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
        >
          Cancel
        </button>
      </section>
    </div>
  );
}

export default BlogForm;
