import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";

const Homepage = () => {
  return (
    <div className="text-white flex gap-6 pt-6">
      <div className="sm:block w-[17%]">
        <LeftMenu type="home"></LeftMenu>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-6">
          <AddPost></AddPost>
          <Feed></Feed>
        </div>
      </div>
      <div className="hidden sm:block w-[20%]">
        <RightMenu></RightMenu>
      </div>
    </div>
  );
};

export default Homepage;
