import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 border rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>User Information</span>
        <Link href={"/"} className="text-xs hover:text-green-400">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">Mark Williams</span>
          <span className="text-sm">@mwilliams</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          explicabo nisi corporis voluptatum fugit itaque consequatur.
        </p>
        <div className="flex items-center gap-2">
          <Image
            src="/google-maps.png"
            alt="map"
            width={16}
            height={16}
          ></Image>
          <span>
            Living in <b>Miskolc</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/graduated.png" alt="map" width={16} height={16}></Image>
          <span>
            Went to <b>Harvard University</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/tools.png" alt="map" width={16} height={16}></Image>
          <span>
            Works at <b>Google</b>
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <Image src="/link.png" alt="link" width={16} height={16}></Image>
          <Link href="http://google.com" className="font-medium text-slate-400">
            google.com
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <Image src="/calendar.png" alt="link" width={16} height={16}></Image>
          <span>Joined at 01/01/2021</span>
        </div>
        <button className="bg-slate-800 text-sm rounded-md p-2">Follow</button>
        <span className="text-red-500 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
