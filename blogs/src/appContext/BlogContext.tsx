import React, { createContext, useState, useContext } from "react";
import type { Blog } from "../types/BlogType";

interface BlogType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContextProps = createContext<BlogType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  function addBlog(blog: Blog) {
    setBlogs([...blogs, blog]);
  }

  function updateBlog(update: Blog) {
    setBlogs(blogs.map((blog) => (blog.id === update.id ? update : blog)));
  }

  function deleteBlog(id: number) {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  return (
    <BlogContextProps.Provider
      value={{ blogs, addBlog, deleteBlog, updateBlog }}
    >
      {children}
    </BlogContextProps.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContextProps);

  if (!context) {
    throw new Error("Context must be used within a BlogProvider");
  }

  return context;
};
