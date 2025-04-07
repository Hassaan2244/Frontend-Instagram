import React from "react";
import userProfile from "../hooks/userProfile";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

const Posts = () => {
  const { profile, loading, error } = userProfile();

  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      {profile && profile.posts && profile.posts.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {profile.posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 p-4 flex flex-col items-start"
            >
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{post.description}</p>
              <LikeButton postId={post.id} />
              <CommentSection postId={post.id} />
            </div>
          ))}
        </div>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
