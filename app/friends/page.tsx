import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "../lib/client";
import Image from "next/image";
import Link from "next/link";

const friendss = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  let friends = [] as any[];

  const following = await prisma.follower.findMany({
    where: {
      followerId: userId,
    },
    select: {
      followingId: true,
    },
  });

  const followingIds = following.map((f) => f.followingId);

  friends = await prisma.user.findMany({
    where: {
      id: {
        in: followingIds,
      },
    },
  });

  return (
    <div>
      {friends.map((friend) => (
        <div
          className="flex flex-col gap-4 border rounded-lg bg-slate-800"
          key={friend.id}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">
              {friend.name && friend.surname
                ? friend.name + " " + friend.surname
                : friend.friendsname}
            </span>
            <span className="text-sm">@{friend.friendsname}</span>
          </div>
          {friend.description && <p>{friend.description}</p>}
          {friend.city && (
            <div className="flex items-center gap-2">
              <Image
                src="/google-maps.png"
                alt="map"
                width={16}
                height={16}
              ></Image>
              <span>
                Living in <b>{friend.city}</b>
              </span>
            </div>
          )}
          {friend.school && (
            <div className="flex items-center gap-2">
              <Image
                src="/graduated.png"
                alt="map"
                width={16}
                height={16}
              ></Image>
              <span>
                Went to <b>{friend.school}</b>
              </span>
            </div>
          )}
          {friend.work && (
            <div className="flex items-center gap-2">
              <Image src="/tools.png" alt="map" width={16} height={16}></Image>
              <span>
                Works at <b>{friend.work}</b>
              </span>
            </div>
          )}
          {friend.website && (
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="link" width={16} height={16}></Image>
              <Link
                href={friend.website}
                className="font-medium text-slate-400"
              >
                {friend.website}
              </Link>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <Image
              src="/calendar.png"
              alt="link"
              width={16}
              height={16}
            ></Image>
            <span>Joined at {friend.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default friendss;
