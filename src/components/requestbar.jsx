import React, { useEffect, useState } from "react";
import { getUsers } from "../hooks/getAllUsers";
import useFollowUser from "../hooks/userFollowUser";
import useUserFollowData from "../hooks/userFollowList";

const Suggestions = () => {
  const [users, setUsers] = useState([]);
  const { toggleFollow, loading, error } = useFollowUser();
  const { followData, loading: followLoading, error: followError } = useUserFollowData(); 

  useEffect(() => {
    const fetchUsersWithFollowStatus = async () => {
      try {
        const allUsers = await getUsers();

        if (followData) {
          const followingIds = followData.following.map(f => f.follows_id);

          const updatedUsers = allUsers.map(user => ({
            ...user,
            isFollowing: followingIds.includes(user.id),
          }));

          setUsers(updatedUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (followData) {
      fetchUsersWithFollowStatus(); // Call once the follow data is available
    }
  }, [followData]);

  const handleFollowToggle = async (userId) => {
    const success = await toggleFollow(userId);
    if (success) {
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
        )
      );
    } else {
      console.error("Toggle failed:", error);
    }
  };

  return (
    <div className="text-white p-4 w-80">
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

      <div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-400 text-sm font-semibold">Suggested for you</p>
          <button className="text-white text-sm font-semibold">See All</button>
        </div>

        {followLoading ? (
          <p>Loading follow data...</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
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
              <button
                onClick={() => handleFollowToggle(user.id)}
                className={`text-xs font-semibold ${
                  user.isFollowing ? "text-gray-500" : "text-blue-500"
                }`}
                disabled={loading}
              >
                {user.isFollowing ? "Followed" : "Follow"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Suggestions;
