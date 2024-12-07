import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-4 text-sm flex flex-col border rounded-lg gap-6 mb-6">
      <div className="h-20 relative">
        <Image
          src="/pexels-clement-proust-363898785-29649754.jpg"
          alt="cover_pic"
          fill
          className="rounded-md"
        ></Image>
        <Image
          src="/pexels-matreding-18111149.jpg"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-slate-700 z-10"
        ></Image>
      </div>
      <div className="h-20 flex flex-col items-center gap-2 my-3">
        <span className="font-semibold text-lg">John Higgins</span>
        <div className="flex items-center gap-1">
          <div className="flex">
            <Image src="/star.png" alt="star" width={12} height={12}></Image>
            <Image src="/star.png" alt="star" width={12} height={12}></Image>
            <Image src="/star.png" alt="star" width={12} height={12}></Image>
          </div>
          <span className="text-xs text-slate-100">482376 Followers</span>
        </div>
        <button className="bg-green-400 rounded-md px-2 py-1 mt-1">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
