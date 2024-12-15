import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="text-white lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-2xl">
          Teddlefoldre
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] md:pl-4 items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6  text-white">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <Image
              src="/home.png"
              alt="Home"
              width={14}
              height={14}
              className="w-3 h-3"
            />
            <span>Home</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
        </div>
        <div className="hidden xl:flex ml-20 bg-slate-800 px-2 items-center outline-none rounded-lg">
          <input
            type="text"
            placeholder="search..."
            className="w-40 bg-slate-800"
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end text-white">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          ></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer hover:border-2 rounded-full">
              <Image
                src="/people.png"
                alt="people"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="cursor-pointer hover:border-2 rounded-full">
              <Image
                src="/messages.png"
                alt="messages"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="cursor-pointer hover:border-2 rounded-full">
              <Image
                src="/notifications.png"
                alt="notifications"
                width={20}
                height={20}
              ></Image>
            </div>
            <UserButton></UserButton>
          </SignedIn>
          <SignedOut>
            <Link href={"/sign-in"}>Sign in</Link>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
