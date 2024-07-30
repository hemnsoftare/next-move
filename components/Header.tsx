import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3 max-w-6xl mx-auto ">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex items-center gap-2">
        <span className="text-3xl font-bold py-1 px-2 rounded-lg bg-amber-500">
          IMdb
        </span>
        <span className="text-xl hidden sm:inline">clone</span>
      </Link>
    </div>
  );
};

export default Header;
