import UserCard from "./UserCard";

const people = [
  { name: "David Willing", following: false },
  { name: "Franklin Arthur", following: true },
  { name: "Justice Rice", following: false },
  { name: "Dennis Cudjoe", following: false },
];

function PeopleToFollow() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-4 text-lg">People To Follow</h3>

      <div className="space-y-4">
        {people.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default PeopleToFollow;
