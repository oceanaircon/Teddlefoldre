import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 border rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>Friend Requests</span>
        <Link href={"/"} className="text-xs hover:text-green-400">
          See all
        </Link>
      </div>
      {/* USERS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <Image
            src="/pexels-pabloramon-20189714.jpg"
            alt="user_avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          ></Image>
          <span className="font-semibold">Michael Holt</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
          <Image
            src="/reject.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <Image
            src="/pexels-joanie-xie-1306424600-29606693.jpg"
            alt="user_avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          ></Image>
          <span className="font-semibold">Judd Trump</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
          <Image
            src="/reject.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <Image
            src="/pexels-sarai-carrasco-582280545-20453588.jpg"
            alt="user_avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          ></Image>
          <span className="font-semibold">Mark Allen</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
          <Image
            src="/reject.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
