import React from "react";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Feed from "@/app/components/Feed";
import Image from "next/image";
import prisma from "@/app/lib/client";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

type Params = Promise<{ username: string }>;

const ProfilePage = async (props: { params: Params }) => {
  const params = await props.params;
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = await auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div className="text-white flex gap-6 pt-6">
      <div className="hidden lg:block w-[26%]">
        <LeftMenu type="profile"></LeftMenu>
      </div>
      <div className="w-full sm:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user.cover || "/noCover.png"}
                alt="cover"
                fill
                className="object-cover rounded-lg"
              ></Image>
              <Image
                src={user.avatar || "/noAvatar.png"}
                alt="avatar"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-slate-700 object-cover"
              ></Image>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {user.name && user.surname
                ? user.name + " " + user.surname
                : user.username}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4 bg-slate-800 rounded-lg p-2">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm"> Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm"> Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followings}</span>
                <span className="text-sm"> Following</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            {currentUserId !== user.id ? (
              <span>Invisible</span>
            ) : (
              <Feed username={user.username}></Feed>
            )}
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-[35%]">
        <RightMenu user={user}></RightMenu>
      </div>
    </div>
  );
};

export default ProfilePage;
