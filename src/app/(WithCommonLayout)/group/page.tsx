import React from "react";

const AllGroups = () => {
  // Fake Data
  const fakeGroups = [
    {
      groupName: "Nature Lovers",
      description:
        "A group for people who love exploring nature and sharing their experiences.",
      members: ["Alice", "Bob", "Charlie"],
    },
    {
      groupName: "Tech Enthusiasts",
      description:
        "Discuss the latest in tech, gadgets, and software development.",
      members: ["David", "Eve", "Frank"],
    },
    {
      groupName: "Book Club",
      description: "Share and discuss your favorite books with fellow readers.",
      members: ["Grace", "Heidi", "Ivan"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Groups</h2>
      <div className="space-y-4">
        {fakeGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg font-bold">
                {group.groupName[0].toUpperCase()}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {group.groupName}
                </h3>
                <p className="text-sm text-gray-600">{group.description}</p>
                <div className="flex items-center mt-2 space-x-2 text-gray-500 text-sm">
                  <span className="font-medium">
                    {group.members.length} Members
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all">
                Join Group
              </button>
              <button className="text-blue-500 hover:underline text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
