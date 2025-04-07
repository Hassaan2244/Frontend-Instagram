import { useState, useEffect } from 'react';
import API from '../apis/services';

const useLikes = (postId) => {
  const [likesCount, setLikesCount] = useState(0);
  const [error, setError] = useState(null);

  const fetchLikes = async () => {
    try {
      const response = await API.get(`post/like/${postId}/`);
      if (response.data.success) {
        setLikesCount(response.data.likes_list.length);
      }
    } catch (err) {
      setError(err);
    }
  };

  const toggleLikes = async () => {
    try {
      const response = await API.post(`post/like/${postId}/`);
      if (response.data.success) {
        fetchLikes();
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchLikes();
    }
  }, [postId]);

  return { likesCount, error, toggleLikes };
};

export default useLikes;
