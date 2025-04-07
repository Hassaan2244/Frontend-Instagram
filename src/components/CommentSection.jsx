import React, { useState } from 'react';
import useComments from '../hooks/useComments';
import userProfile from "../hooks/userProfile";

const CommentSection = ({ postId }) => {
  const { comments, error, addComment } = useComments(postId);
  const [commentText, setCommentText] = useState('');
  const { profile, loading} = userProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    await addComment(commentText.trim());
    setCommentText('');
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {error && (
        <p className="text-red-500 text-sm">Error: {error.message}</p>
      )}
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="border-b pb-2 mb-2">
            <p className="text-sm">
              <strong>{comment.author_name || "Unknown User"}</strong>: {comment.comment_text}
            </p>
          </div>
        ))
      ) : (
        <p className="text-sm">No comments yet.</p>
      )}
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="border p-1 text-sm w-full"
        />
      </form>
    </div>
  );
};

export default CommentSection;
