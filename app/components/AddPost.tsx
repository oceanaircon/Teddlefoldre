import React from "react";
import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 border bg-slate-800 rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="/pexels-lauma-augstkalne-322733111-28681534.jpg"
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      ></Image>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            placeholder="Do you post something?"
            className="bg-slate-300 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/happy-face.png"
            alt="emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          ></Image>
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <button className="hover:text-green-400">Add Image</button>
          <button className="hover:text-green-400">Video</button>
          <button className="hover:text-green-400">Poll</button>
          <button className="hover:text-green-400">Event</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
