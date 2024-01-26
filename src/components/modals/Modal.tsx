"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Login from "./Login";
import Signup from "./Signup";

function Modal() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const isOpen = searchParams.get("modal");
  const pathName = usePathname();

  if (isOpen !== "login" && isOpen !== "signup") return null;

  return (
    <div className="fixed top-0 right-0 w-screen h-screen flex items-center justify-center z-40 ">
      <div className="bg-white z-[60] rounded-xl shadow-md w-5/6 sm:w-1/2 lg:w-1/4 ">
        {isOpen === "login" ? <Login /> : <Signup />}
      </div>
      {/* overlay */}
      <div
        onClick={() => router.push(pathName)}
        className="fixed top-0 right-0 w-screen h-screen bg-neutral-800/20 backdrop-blur-[1px] "
      ></div>
    </div>
  );
}
export default Modal;
