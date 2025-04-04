import { FaHome, FaPlusSquare, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-60 border-r border-gray-900 bg-black text-white flex flex-col items-center py-5">
      <h1 className="text-2xl font-bold mb-10">Instagram</h1>

      <div className="flex flex-col space-y-8 text-lg">
        <button className="flex flex-row items-center hover:text-gray-400">
          <FaHome size={35} />
          <span className="text-sm ml-4 mt-1">Home</span>
        </button>

        <button className="flex flex-row items-center hover:text-gray-400">
          <FaPlusSquare size={35} />
          <span className="text-sm ml-4 mt-1">Create</span>
        </button>

        <button className="flex flex-row items-center hover:text-gray-400">
          <FaUser size={35} />
          <span className="text-sm ml-4 mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
