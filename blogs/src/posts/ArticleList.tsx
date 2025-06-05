import React from "react";
import type { Blog } from "../types/BlogType";
import { useBlogs } from "../appContext/BlogContext";
import ArticleCard from "./ArticleCard";

interface ArticleListProp {
  onEdit: (blog: Blog) => void;
}

function ArticleList({ onEdit }: ArticleListProp) {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
}

export default ArticleList;
