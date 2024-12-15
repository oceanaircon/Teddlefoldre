"use client";

import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "../lib/actions";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="p-4 border bg-slate-800 rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      ></Image>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form
          action={(formData) => addPost(formData, img?.secure_url || null)}
          className="flex gap-4"
        >
          <textarea
            placeholder="Do you post something?"
            className="bg-slate-600 rounded-lg flex-1 p-2"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <Image
            src="/happy-face.png"
            alt="emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          ></Image>
          <AddPostButton></AddPostButton>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer hover:text-green-400"
                  onClick={() => open()}
                >
                  <Image src="/addimage.png" alt="" width={20} height={20} />
                  Add Image
                </div>
              );
            }}
          </CldUploadWidget>
          <button className="hover:text-green-400">Video</button>
          <button className="hover:text-green-400">Poll</button>
          <button className="hover:text-green-400">Event</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
