import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 border rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>Birthdays</span>
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
          <button className="bg-green-400 px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-800 rounded-lg flex items-center gap-4">
        <Image src="/box.png" alt="gift" width={24} height={24}></Image>
        <Link href={"/"} className="flex flex-col gap-1 text-sm">
          <span className="text-slate-100 font-semibold">Upcoming Birthdays</span>
          <span className="text-slate-200">
            See other 16 upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
