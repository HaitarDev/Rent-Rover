"use client";
import { Search } from "lucide-react";
function SearchBy() {
  return (
    <div
      className="rounded-full p-2 flex border font-medium text-sm
    bg-white hover:shadow-sm items-center"
    >
      <div className="border-r p-1 ">Anywhere</div>
      <div className="border-r p-1 hidden sm:block">Any Week</div>
      <button className="p-1 flex items-center gap-1 ">
        <p className="text-primary "> Add Guests </p>{" "}
        <div className=" p-1 bg-primary rounded-full">
          <Search color="white" width={20} height={20} />
        </div>
      </button>
    </div>
  );
}
export default SearchBy;
