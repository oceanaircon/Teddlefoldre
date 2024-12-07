import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/pexels-axp-photography-500641970-16563675.jpg"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          ></Image>
          <span className="font-medium">Ronnie O'Sullivan</span>
        </div>
        <Image src="/more.png" alt="" width={24} height={24}></Image>
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="/pexels-clement-proust-363898785-29284804.jpg"
            alt="post image"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni maxime
          nesciunt optio repudiandae laborum obcaecati excepturi consequuntur
          aspernatur? Quas obcaecati cumque dolorum quibusdam repellendus unde
          suscipit perferendis nobis a impedit?
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-xl">
            <Image
              src="/favorite.png"
              alt="like"
              width={24}
              height={24}
              className="cursor-pointer"
            ></Image>
            <span className="">|</span>
            <span className="">
              224 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment"
              width={24}
              height={24}
              className="cursor-pointer pl-1"
            ></Image>
            <span className="">|</span>
            <span className="">
              224 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="items-end">
          <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share"
              width={24}
              height={24}
              className="cursor-pointer"
            ></Image>
            <span className="">|</span>
            <span className="">
              224 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments></Comments>
    </div>
  );
};

export default Post;
