import React from "react";
import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 rounded-lg overflow-scroll text-sm scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="/pexels-carolina-basi-2450719-28221511.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          ></Image>
          <span className="font-medium">Alfred</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="/pexels-ellie-burgin-1661546-29549363.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          ></Image>
          <span className="font-medium">Pangasius</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="/pexels-leefinvrede-27015910.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          ></Image>
          <span className="font-medium">Murphy</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="/pexels-lany-19923814.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          ></Image>
          <span className="font-medium">Lorem</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="/pexels-clement-proust-363898785-29284804.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          ></Image>
          <span className="font-medium">Ipsum</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
