import { useState, useEffect } from 'react';
import API from '../apis/services';

const useComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await API.get(`/post/comments/${postId}/`);
      if (response.data.success) {
        setComments(response.data.comments);
      }
    } catch (err) {
      setError(err);
    }
  };

  const addComment = async (commentText) => {
    try {
      const response = await API.post(`/post/comment/${postId}/`, {
        comment_text: commentText,
      });
      if (response.data.success) {
        fetchComments();
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return { comments, error, addComment };
};

export default useComments;
