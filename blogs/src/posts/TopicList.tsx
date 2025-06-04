const blogTopics = [
  "Web Development",
  "JavaScript",
  "React.js",
  "Frontend Tips",
  "CSS & Design",
  "Dev Tools",
  "AI & Machine Learning",
  "Career in Tech",
  "Open Source",
  "Tech News",
];

function TopicList() {
  return (
    <div className="p-4 mt-8 bg-white rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Popular Topic</h3>

      <div className="flex flex-wrap gap-2">
        {blogTopics.map((topic, index) => (
          <span
            className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full hover:bg-gray-300 cursor-pointer transition"
            key={index}
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TopicList;
