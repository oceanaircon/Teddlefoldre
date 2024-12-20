import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "../lib/client";

const Friends = async () => {
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
    <div className="flex flex-row flex-wrap">
      {friends.map((friend) => (
        <div
          key={friend.id}
          className="flex flex-col items-center justify-center bg-slate-800 border-slate-300 rounded-md gap-4 p-4"
        >
          <span>{friend.name}</span>
          <span>{friend.surname}</span>
          <br />
          <span>{friend.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Friends;
