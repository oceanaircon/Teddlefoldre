import React from "react";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Feed from "@/app/components/Feed";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="text-white flex gap-6 pt-6">
      <div className="hidden xl:block w-[17%]">
        <LeftMenu type="profile"></LeftMenu>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="/pexels-jan-van-der-wolf-11680885-29652098.jpg"
                alt=""
                fill
                className="object-cover rounded-lg"
              ></Image>
              <Image
                src="/pexels-seyma-d-152665775-29663708.jpg"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-slate-700 object-cover"
              ></Image>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Mark Selby</h1>
            <div className="flex items-center justify-center gap-12 mb-4 bg-slate-800 rounded-lg p-2">
              <div className="flex flex-col items-center">
                <span className="font-medium">24</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">112.4K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">567</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed></Feed>
        </div>
      </div>
      <div className="hidden lg:block w-[33%]">
        <RightMenu userId="test"></RightMenu>
      </div>
    </div>
  );
};

export default ProfilePage;
