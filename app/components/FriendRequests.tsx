import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import prisma from "../lib/client";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests.length === 0) return null;

  return (
    <div className="p-4 border rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span>Friend Requests</span>
        <Link href={"/"} className="text-xs hover:text-green-400">
          See all
        </Link>
      </div>
      {/* USERS */}
      <FriendRequestList requests={requests}></FriendRequestList>
    </div>
  );
};

export default FriendRequests;
