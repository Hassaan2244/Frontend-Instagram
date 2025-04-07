import { useState, useEffect } from "react";
import { fetchPosts } from "../../hooks/getAllPostService";
import Post from "./post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postData = await fetchPosts();
        setPosts(postData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full max-w-lg mx-auto">
      {posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts available</p>
      ) : (
        posts.map((post) => (
          <Post 
            key={post.id} 
            image={post.image ? `http://127.0.0.1:8000${post.image}` : "https://via.placeholder.com/500"}
          />
        ))
      )}
    </div>
  );
};

export default Feed;
