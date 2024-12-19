import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="h-24 flex items-center justify-between gap-4">
      {/* LEFT */}
      <div className="lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-2xl">
          Teddlefoldre
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden sm:flex w-[50%] sm:pl-4 items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6">
          <Link
            href={`/profile/${user?.username}`}
            className="flex items-center gap-2 hover:text-green-400"
          >
            <Image
              src="/posts.png"
              alt="posts"
              width={14}
              height={14}
              className="w-3 h-3"
            />
            <span>Posts</span>
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
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <Image
              src="/stories.png"
              alt="profile"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Profile</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex items-center justify-end gap-4">
        <ClerkLoaded>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
          <SignedOut>
            <Link href={"/sign-in"}>Sign in</Link>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu username={user?.username} />
      </div>
    </div>
  );
};

export default Navbar;
