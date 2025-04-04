import { useState } from "react";
import { createPost } from "../../api/postService";

const CreatePostModal = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !imageFile) {
      setError("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      await createPost(title, description, imageFile);
      alert("Post created successfully!");
      onClose();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-zinc-900 text-white w-full max-w-md rounded-2xl p-6 shadow-lg animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create New Post</h2>

        {/* Image Preview */}
        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-full h-60 object-cover rounded-xl mb-4 border border-zinc-800"
          />
        )}

        <div className="space-y-3">
          <input
            type="file"
            onChange={handleImageChange}
            className="file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none bg-zinc-800 text-sm rounded-md w-full text-zinc-300"
          />

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-zinc-800 p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full bg-zinc-800 p-3 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-md text-white transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
