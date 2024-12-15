"use client";

import { updateProfile } from "../lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useActionState, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import UpdateButton from "@/app/components/UpdateButton";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };

  return (
    <div className="">
      <span
        className="text-xs cursor-pointer hover:text-green-400"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50 ">
          <form
            action={(formData) =>
              formAction({ formData, cover: cover?.secure_url || "" })
            }
            className="p-12 bg-slate-700 rounded-lg flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
          >
            {/* TITLE */}
            <h1 className="font-bold text-xl">Update Profile</h1>
            <div className="mt-4 text-sm">
              At the top-right corner, click on the User icon to change the
              avatar or the username.
            </div>
            {/* COVER PIC UPLOAD */}
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => setCover(result.info)}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-4 my-4"
                    onClick={() => open()}
                  >
                    <label className="text-base">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={user.cover || "/noCover.png"}
                        alt="cover"
                        width={192}
                        height={128}
                        className="w-48 h-32 rounded-md object-cover"
                      />
                      <span className="underline ml-4">Change</span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            {/* WRAPPER */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder={user.name || "John"}
                  className="p-1 rounded-md text-sm"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label>Surname</label>
                <input
                  type="text"
                  placeholder={user.surname || "Doe"}
                  className="p-1 rounded-md text-sm"
                  name="surname"
                />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label>Description</label>
                <input
                  type="text"
                  placeholder={user.description || "Life is beautiful..."}
                  className="p-1 rounded-md text-sm"
                  name="description"
                />
              </div>
              {/* INPUT */}
              <div className="flex flex-col gap-4">
                <label>City</label>
                <input
                  type="text"
                  placeholder={user.city || "New York"}
                  className="p-1 rounded-md text-sm"
                  name="city"
                />
              </div>
              {/* INPUT */}

              <div className="flex flex-col gap-4">
                <label>School</label>
                <input
                  type="text"
                  placeholder={user.school || "MIT"}
                  className="p-1 rounded-md text-sm"
                  name="school"
                />
              </div>
              {/* INPUT */}

              <div className="flex flex-col gap-4">
                <label>Work</label>
                <input
                  type="text"
                  placeholder={user.work || "Apple Inc."}
                  className="p-1 rounded-md text-sm"
                  name="work"
                />
              </div>
              {/* INPUT */}

              <div className="flex flex-col gap-4">
                <label>Website</label>
                <input
                  type="text"
                  placeholder={user.website || "nokia.com"}
                  className="p-1 rounded-md text-sm"
                  name="website"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between mt-8">
              <UpdateButton />
              <button
                className="p-2 bg-red-500 rounded-md"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            {state.success && (
              <span className="text-green-500">Profile has been updated!</span>
            )}
            {state.error && (
              <span className="text-red-500">Something went wrong!</span>
            )}
            <div
              className="absolute text-3xl right-3 top-1 cursor-pointer"
              onClick={handleClose}
            >
              ×
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
