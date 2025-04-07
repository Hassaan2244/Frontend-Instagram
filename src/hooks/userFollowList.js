import { useState, useEffect } from "react";


const useUserFollowData = () => {
  const [followData, setFollowData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFollowData = async () => {
      const userId = localStorage.getItem("user_id");
      const token = localStorage.getItem("token");
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://127.0.0.1:3001/user/follow/${userId}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch follow data");
        const data = await response.json();
        setFollowData(data); // Store the follow data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFollowData();
  }, []);
  return { followData, loading, error };
};
export default useUserFollowData;