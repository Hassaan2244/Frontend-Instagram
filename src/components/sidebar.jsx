import { useState } from "react";
import { FaHome, FaPlusSquare, FaUser } from "react-icons/fa";
import CreatePostModal from "./Modals/createFeedModal";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen w-70 border-r border-gray-900 ml-3 bg-black text-white flex flex-col  py-5">
      <h1 className="text-3xl font-bold mb-10">Instagram</h1>

      <div className="flex flex-col mt-3 space-y-8 text-lg">
        <button className="flex flex-row items-center hover:text-gray-400">
          <FaHome size={35} />
          <span className="text-sm ml-4 mt-1">Home</span>
        </button>

        {/* Open Modal on Click */}
        <button onClick={() => setIsModalOpen(true)} className="flex flex-row items-center hover:text-gray-400">
          <FaPlusSquare size={35} />
          <span className="text-sm ml-4 mt-1">Create</span>
        </button>

        <button className="flex flex-row items-center hover:text-gray-400">
          <FaUser size={35} />
          <span className="text-sm ml-4 mt-1">Profile</span>
        </button>
      </div>

      {/* Render Modal */}
      <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Sidebar;
