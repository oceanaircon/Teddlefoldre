"use client";

import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileMenu = ({ user }: { user: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

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
          <button
            type="button"
            onClick={() => {
              router.push(`/profile/${user}`);
              revalidatePath(`/profile/${user}`);
            }}
          >
            Posts
          </button>
          <Link href={"/"}>Friends</Link>
          <Link href={`/profile/${user}`}>Profile</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
