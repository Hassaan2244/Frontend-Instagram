import { BASE_URL} from "../apis/services";
import { useState } from "react";
const useFollowUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toggleFollow = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/user/follow/${userId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to toggle follow status");
      }
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { toggleFollow, loading, error };
};
export default useFollowUser;