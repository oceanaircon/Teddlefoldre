import Image from "next/image";
import React from "react";
import prisma from "../lib/client";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const ProfileCard = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  console.log(user);

  if (!userId) return null;

  return (
    <div className="p-4 text-sm flex flex-col border rounded-lg gap-6 mb-6">
      <div className="h-20 relative">
        <Image
          src={user?.cover || "/noCover.png"}
          alt="cover_pic"
          fill
          className="rounded-md"
        ></Image>
        <Image
          src={user?.avatar || "/noAvatar.png"}
          alt="avatar"
          fill
          className="rounded-md"
        ></Image>
      </div>
      <div className="h-20 flex flex-col items-center gap-2 my-3">
        <span className="font-semibold text-lg">
          {user?.name && user?.surname
            ? user?.name + " " + user?.surname
            : user?.username}
        </span>
        <div className="flex items-center gap-1">
          <div className="flex">
            <Image src="/star.png" alt="star" width={12} height={12}></Image>
            <Image src="/star.png" alt="star" width={12} height={12}></Image>
            <Image src="/star.png" alt="star" width={12} height={12}></Image>
          </div>
          <span className="text-xs text-slate-100">
            {user?._count.followers} Followers
          </span>
        </div>
        <Link href={`/profile/${user?.id}`}>
          <button className="bg-green-400 rounded-md px-2 py-1 mt-1">
            My Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
