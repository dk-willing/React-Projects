const trendList = [
  {
    title: "Mastering React in 2025",
    author: "Jane Doe",
  },
  {
    title: "Top 10 AI Tools for Developers",
    author: "John Smith",
  },
  {
    title: "How Tailwind CSS Changed Frontend Design",
    author: "Emily Johnson",
  },
  {
    title: "Building Scalable Web Apps with Next.js",
    author: "Michael Chen",
  },
  {
    title: "Why TypeScript Is Taking Over JavaScript",
    author: "Priya Patel",
  },
];

const TrendList = () => {
  return (
    <div className="bg-white shadow rounded-lg mt-8 p-4">
      <h3 className="font-semibold text-lg mb-4">Today's Top Trends</h3>

      <div className="space-y-4">
        {trendList.map((trend, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-medium">{trend.title}</span>
            <span className="text-sm text-gray-500">By {trend.author}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TrendList;
