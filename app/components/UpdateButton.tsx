"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="p-2 bg-green-400 rounded-md disabled:bg-opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update"}
    </button>
  );
};

export default UpdateButton;
