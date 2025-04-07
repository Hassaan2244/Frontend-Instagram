import { FaHeart, FaComment } from "react-icons/fa";
import LikeButton from "../LikeButton";
import CommentSection from "../CommentSection";

const Post = ({ id, image, title, description }) => {
  console.log("Rendering post with id:", id); // Debug log

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
        <h2 className="text-2xl font-semibold mb-2 tracking-tight">{title}</h2>
        <p className="text-zinc-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex gap-6">
          {/* Like Section */}
          <div className="flex items-center gap-2">
            <LikeButton postId={id} />
          </div>
          {/* Comment Section */}
          <div className="flex items-center gap-2">
            <CommentSection postId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
