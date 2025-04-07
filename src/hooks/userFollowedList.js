// src/hooks/useFollowedUsers.js
import { BASE_URL } from "../apis/services";
import { useState, useEffect } from "react";

const useFollowedUsers = (userId) => {
  const [followedUsers, setFollowedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;
    const fetchFollowedUsers = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("userToken");
        const response = await fetch(`${BASE_URL}/user/follow/${userId}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch followed users");
        }
        const data = await response.json();
        setFollowedUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowedUsers();
  }, [userId]);

  return { followedUsers, loading, error };
};

export default useFollowedUsers;
