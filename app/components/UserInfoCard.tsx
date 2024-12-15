import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import prisma from "../lib/client";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingRequestSent = false;

  const { userId: currentUserId } = await auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);

    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followReqRes
      ? (isFollowingRequestSent = true)
      : (isFollowingRequestSent = false);
  }

  return (
    <div className="p-4 border rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>User Information</span>
        {currentUserId === user.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link href={"/"} className="text-xs hover:text-green-400">
            See all
          </Link>
        )}
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        {user.city && (
          <div className="flex items-center gap-2">
            <Image
              src="/google-maps.png"
              alt="map"
              width={16}
              height={16}
            ></Image>
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <Image
              src="/graduated.png"
              alt="map"
              width={16}
              height={16}
            ></Image>
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2">
            <Image src="/tools.png" alt="map" width={16} height={16}></Image>
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
        {user.website && (
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="link" width={16} height={16}></Image>
            <Link href={user.website} className="font-medium text-slate-400">
              {user.website}
            </Link>
          </div>
        )}
        <div className="flex gap-1 items-center">
          <Image src="/calendar.png" alt="link" width={16} height={16}></Image>
          <span>Joined at {formattedDate}</span>
        </div>
        {currentUserId && currentUserId !== user.id && (
          <UserInfoCardInteraction
            userId={user.id}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingRequestSent={isFollowingRequestSent}
          ></UserInfoCardInteraction>
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
