"use client";

import Image from "next/image";
import { useOptimistic, useState } from "react";
import { switchLike } from "../lib/actions";

const PostInteraction = ({
  postId,
  likes,
  commentNumber,
  userId,
}: {
  postId: number;
  likes: string[];
  commentNumber: number;
  userId: string;
}) => {
  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-xl">
            <form action={likeAction}>
              <button>
                <Image
                  src={
                    optimisticLike.isLiked ? "/thumbs-up.png" : "/favorite.png"
                  }
                  alt="like"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                ></Image>
              </button>
            </form>
            <span className="">|</span>
            <span className="">
              {optimisticLike.likeCount}
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment"
              width={24}
              height={24}
              className="cursor-pointer pl-1"
            ></Image>
            <span className="">|</span>
            <span className="">
              {commentNumber}
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="items-end">
          <div className="flex items-center gap-2 bg-slate-500 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share"
              width={24}
              height={24}
              className="cursor-pointer"
            ></Image>
            <span className="">|</span>
            <span className="">
              <span className="hidden md:inline">Share</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInteraction;
