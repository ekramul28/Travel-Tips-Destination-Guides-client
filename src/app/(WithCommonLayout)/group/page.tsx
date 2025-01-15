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
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fakeGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
          >
            <div className="flex items-start p-4">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-600 text-lg font-bold">
                {group.groupName[0].toUpperCase()}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold text-gray-800">
                  {group.groupName}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {group.description}
                </p>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-medium">
                    {group.members.length} Members
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="flex items-center justify-between p-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all">
                  Join Group
                </button>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
