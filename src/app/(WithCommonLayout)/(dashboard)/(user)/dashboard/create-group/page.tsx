/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";
import React, { useState } from "react";

const CreateGroup: React.FC = () => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState<string[]>([""]);
  const [message, setMessage] = useState("");

  const handleAddMember = () => {
    setMembers([...members, ""]);
  };

  const handleRemoveMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleMemberChange = (index: number, value: string) => {
    const updatedMembers = [...members];
    updatedMembers[index] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupName.trim() || !description.trim()) {
      setMessage("Please fill out all required fields.");
      return;
    }

    console.log({
      groupName,
      description,
      members: members.filter((member) => member.trim() !== ""),
    });

    setMessage("Group created successfully!");
    // Clear the form
    setGroupName("");
    setDescription("");
    setMembers([""]);
  };

  return (
    <div className=" mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Group</h2>

      {message && (
        <div
          className={`mb-4 p-2 text-sm ${
            message.includes("success")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Group Name */}
        <div className="mb-4">
          <label htmlFor="groupName" className="block font-medium mb-1">
            Group Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter group name"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter group description"
          />
        </div>

        {/* Members */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Members</label>
          {members.map((member, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder={`Member ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveMember(index)}
                className="ml-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMember}
            className="px-3 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Add Member
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
          >
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
