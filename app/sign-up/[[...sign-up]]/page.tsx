import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-64 flex items-center justify-center">
      <SignUp />;
    </div>
  );
}
