import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa";
import type { Blog } from "../types/BlogType";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}

const ArticleCard = ({ article, onDelete, onEdit }: ArticleCardProps) => {
  return (
    <div className="flex my-4 ml-[2rem] transition ease-in-out bg-white rounded-sm shadow-lg p-4 w-[40rem] hover:shadow-md duration-300 cursor-pointer">
      <img
        src={article.image}
        alt={article.title}
        className="w-36 h-24 rounded-lg shadow-md object-cover"
      />

      <div className="ml-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-xl text-gray-700 mb-4">
          {article.title}
        </h3>

        <p className="flex-1 text-sm text-gray-600">{article.description}</p>

        <div className="flex items-center justify-between">
          <small className="text-gray-500 text-sm">{article.time}</small>

          <div className="flex space-x-3 items-center">
            <FaBookmark className="text-sm text-gray-400 cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out" />

            <FaEdit
              onClick={onEdit}
              className="text-sm text-blue-500 cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out"
            />

            <FaTrash
              onClick={onDelete}
              className="text-sm text-red-500 cursor-pointer hover:text-red-600 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
