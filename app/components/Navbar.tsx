import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="h-24 flex items-center justify-between gap-4">
      {/* LEFT */}
      <div>
        <Link href={"/"} className="font-bold text-2xl">
          Teddlefoldre
        </Link>
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
