import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 border rounded-lg text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span>Sponsored Ads</span>
        <Image src={"/more.png"} alt="more" width={12} height={12}></Image>
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "48"
          }`}
        >
          <Image
            src="/pexels-monstera-28160702.jpg"
            alt="adpic"
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"/pexels-chente8888-21998245.jpg"}
            alt="siraly"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          ></Image>
          <span className="text-slate-300 font-medium">Figs On The Tree</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod a alias iure, magnam dolorem."
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod a alias iure, magnam laboriosam atque dolorem soluta assumenda aliquam optio architecto, rem placeat vel reprehenderit esse deserunt veritatis cupiditate."}
        </p>
        <button className="bg-slate-800 rounded-md">Learn More</button>
      </div>
    </div>
  );
};

export default Ad;
