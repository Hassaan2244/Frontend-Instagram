import { FaHeart, FaComment } from "react-icons/fa";

const Post = ({ image }) => {
  return (
    <div className="bg-black text-white border border-gray-800 rounded-md mb-6 p-4">
      {/* Post Image */}
      <img src={image} alt="Post" className="w-full rounded-md" />

      {/* Actions: Like & Comment */}
      <div className="flex space-x-4 mt-3">
        <button className="text-red-500 hover:text-red-600">
          <FaHeart size={24} />
        </button>
        <button className="text-gray-400 hover:text-gray-300">
          <FaComment size={24} />
        </button>
      </div>
    </div>
  );
};

export default Post;
