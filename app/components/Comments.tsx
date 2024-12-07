import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="/pexels-ellie-burgin-1661546-29549363.jpg"
          alt=""
          width={32}
          height={32}
          className="flex-1 w-8 h-8 rounded-full"
        ></Image>
        <div className="flex items-center justify-between bg-slate-500 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="rounded-lg flex-1 bg-slate-500"
          />
          <Image
            src="/happy-face.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          ></Image>{" "}
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="/pexels-quang-nguyen-vinh-222549-27559206.jpg"
            alt="avatar"
            width={40}
            height={40}
            className="flex-1 w-10 h-10 rounded-full"
          ></Image>
          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">Shaun Murphy</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              perspiciatis laudantium totam voluptates suscipit, vel saepe nisi
              laboriosam quam ipsam porro ipsa quis dicta eius accusamus? Magnam
              saepe officiis fugit.
            </p>
            <div className="flex items-center gap-8 text-xs mt-2">
              <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-xl">
                <Image
                  src="/favorite.png"
                  alt="like"
                  width={16}
                  height={16}
                  className="cursor-pointer w-4 h-4"
                ></Image>
                <span>|</span>
                <span>124 Likes</span>
              </div>
              <div className="hover:text-green-400 cursor-pointer">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt="more"
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Comments;
