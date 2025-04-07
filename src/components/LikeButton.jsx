import React, { useState } from 'react';
import useLikes from '../hooks/useLike';

const LikeButton = ({ postId }) => {
  const { likesCount, error, toggleLikes } = useLikes(postId);
  const [liked, setLiked] = useState(false);

  const handleToggleLike = async () => {
    await toggleLikes();
    setLiked(!liked);
  };

  return (
    <div className="mt-2 flex items-center space-x-2">
      <button onClick={handleToggleLike} className="focus:outline-none">
        <span className={`text-2xl ${liked ? "text-red-500" : "text-gray-500"}`}>
          &#10084;
        </span>
      </button>
      {error && <p className="text-red-500 text-sm">Error updating like</p>}
      <p className="text-sm">{likesCount} likes</p>
    </div>
  );
};

export default LikeButton;
