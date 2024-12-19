import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileCard from "./ProfileCard";
import Ad from "./Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col">
      {type === "home" && <ProfileCard />}
      <div
        className="p-4 text-sm flex flex-col gap-2 border rounded-lg mb-6"
      >
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:text-green-400"
        >
          <Image
            src="/events.png"
            alt="posts_icon"
            width={20}
            height={20}
          ></Image>
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-slate-800 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:text-green-400"
        >
          <Image
            src="/albums.png"
            alt="posts_icon"
            width={20}
            height={20}
          ></Image>
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-slate-800 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:text-green-400"
        >
          <Image
            src="/videos.png"
            alt="posts_icon"
            width={20}
            height={20}
          ></Image>
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-slate-800 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:text-green-400"
        >
          <Image
            src="/news.png"
            alt="posts_icon"
            width={20}
            height={20}
          ></Image>
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-slate-800 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:text-green-400"
        >
          <Image
            src="/courses.png"
            alt="posts_icon"
            width={20}
            height={20}
          ></Image>
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-slate-800 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:text-green-400"
        >
          <Image
            src="/lists.png"
            alt="lists_icon"
            width={20}
            height={20}
          ></Image>
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-slate-800 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:text-green-400"
        >
          <Image
            src="/asset.png"
            alt="settings_icon"
            width={20}
            height={20}
          ></Image>
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
