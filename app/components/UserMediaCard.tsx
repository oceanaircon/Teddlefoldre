import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 border rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>User Media</span>
        <Link href={"/"} className="text-xs hover:text-green-400">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-talharesitoglu-29482658.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-rosie-c-94104461-18946616.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-rahimegul-29632029.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-nati-87264186-24425300.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-matreding-18111149.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-leefinvrede-29543321.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-efrem-efre-2786187-29629773.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-dilara-988605972-28767857.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/pexels-annija-u-492300719-15985570.jpg"
            alt="usermedia"
            fill
            className="object-cover rounded-md"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
