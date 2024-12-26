"use client";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`
            ${isOpen ? "block top-[5rem]" : "-top-[100%]"} sm:hidden
            absolute  right-[1rem] w-[15rem] bg-white
        border-[1px] border-black rounded-lg shadow-xl flex flex-col items-center px-3 py-6
        `}
      >
        <ul className="flex flex-col items-center gap-2 w-full justify-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Exam</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>

        <div className="flex  items-center gap-3 mt-5">
          <Button className="bg-white text-black border border-black px-6 hover:bg-black hover:text-white">
            Login
          </Button>
          <Button className="bg-black text-white border border-black px-6 hover:bg-white hover:text-black">
            SignUp
          </Button>
        </div>
      </div>
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <AlignJustify /> : <X />}
      </button>
    </>
  );
};
export default MobileMenu;
