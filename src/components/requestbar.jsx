import React, { useEffect, useState } from "react";
import { getUsers } from "../hooks/getAllUsers"

const Suggestions = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="text-white p-4 w-80">
      {/* User Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold">zaha_rehman10</p>
            <p className="text-gray-400 text-sm">Zaha Rehman</p>
          </div>
        </div>
        <button className="text-blue-500 text-sm font-semibold">Switch</button>
      </div>

      {/* Suggestions */}
      <div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-400 text-sm font-semibold">Suggested for you</p>
          <button className="text-white text-sm font-semibold">See All</button>
        </div>
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              {/* Using a placeholder image; adjust if you later include profilePic in your API */}
              <img
                src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
                alt={user.username}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{user.username}</p>
                <p className="text-gray-400 text-xs">{user.bio}</p>
              </div>
            </div>
            <button className="text-blue-500 text-xs font-semibold">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
