"use client";

import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = async () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = await currentUser();

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-white rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-white rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-white rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] text-white bg-black flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href={"/"}>Home</Link>
          <Link href={`/profile/${user?.username}`}>Posts</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={`/profile/${user?.username}`}>Profile</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
