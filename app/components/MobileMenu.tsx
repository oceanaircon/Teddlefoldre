"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MobileMenu = ({ username }: { username: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <div>
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
          <button
            type="button"
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
          >
            Feed
          </button>
          <button
            type="button"
            onClick={() => {
              router.push(`/profile/${username}`);
              setIsOpen(false);
            }}
          >
            My Posts
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/friends");
              setIsOpen(false);
            }}
          >
            Friends
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/birthdays");
              setIsOpen(false);
            }}
          >
            Birthdays
          </button>
          <button
            type="button"
            onClick={() => {
              router.push(`/settings/${username}`);
              setIsOpen(false);
            }}
          >
            Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
