import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import prisma from "../lib/client";

const UserMediaCard = async ({ user }: { user: User }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

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
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div className="relative w-1/4 h-24" key={post.id}>
                <Image
                  src={post.img!}
                  alt="usermedia"
                  fill
                  className="object-cover rounded-md"
                ></Image>
              </div>
            ))
          : "No image available"}
      </div>
    </div>
  );
};

export default UserMediaCard;
