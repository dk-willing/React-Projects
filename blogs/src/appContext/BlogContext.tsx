import React, { createContext, useContext, useState } from "react";
import type { Blog } from "../types/BlogType";

interface BlogType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  function addBlog(blog: Blog) {
    setBlogs([...blogs, blog]);
  }

  function updateBlog(updateBlog: Blog) {
    setBlogs(
      blogs.map((blog) => (blog.id === updateBlog.id ? updateBlog : blog))
    );
  }

  function deleteBlog(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Blog?"
    );
    if (confirmed) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  }

  // Anytime you want to provide a context, use the Context you created
  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("Context must be used in a BlogProvider");
  }

  return context;
};
