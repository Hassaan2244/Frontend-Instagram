import { FaHeart, FaComment } from "react-icons/fa";

const Post = ({ image, title, description }) => {
  return (
    <div className="bg-zinc-900 text-white border border-zinc-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01] mb-8">
      {/* Post Image */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover sm:h-80 md:h-96"
        />
      ) : (
        <div className="w-full h-72 sm:h-80 md:h-96 bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
          No Image Available
        </div>
      )}

      {/* Post Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2 tracking-tight">{title}</h2>

        {/* Description */}
        <p className="text-zinc-400 mb-4 leading-relaxed">{description}</p>

        {/* Actions */}
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition">
            <FaHeart size={20} />
            <span className="text-sm">Like</span>
          </button>
          <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
            <FaComment size={20} />
            <span className="text-sm">Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
