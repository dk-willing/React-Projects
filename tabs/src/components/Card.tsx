import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem] rounded-lg  shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="card-content p-7">
        <h3 className="uppercase mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-3">{description}</p>
        <a
          href={link}
          className="px-4 py-2 bg-white text-black shadow font-semibold transition hover:bg-gray-600 hover:text-white duration-200 rounded-lg"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
