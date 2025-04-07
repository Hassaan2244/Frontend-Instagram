import Sidebar from "../components/sidebar";
import Suggestions from "../components/requestbar";
import Feed from "../components/posts/feed";
const Main = () => {
  return (
    <div className="flex  bg-black text-white">
      <div className="flex justify-center">
        <div className="p-5">
          <Sidebar />
        </div>
      </div>

      <div className="flex-1 flex justify-center p-4">
        <Feed />
      </div>

      <div className="flex justify-center">
        <div className="p-5">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Main;
