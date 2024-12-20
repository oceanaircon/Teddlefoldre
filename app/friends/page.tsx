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
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <span>
            {friend.name} + " " + {friend.surname}
          </span>
          <br />
          <span>{friend.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Friends;
