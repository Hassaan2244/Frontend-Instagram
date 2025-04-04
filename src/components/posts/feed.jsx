import Post from "./post";

const posts = [
  "https://random.imagecdn.app/500/700", // Random images (replace with real ones)
  "https://random.imagecdn.app/500/701",
  "https://random.imagecdn.app/500/702",
];

const Feed = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      {posts.map((image, index) => (
        <Post key={index} image={image} />
      ))}
    </div>
  );
};

export default Feed;
