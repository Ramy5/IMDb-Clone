import React from "react";
import PagesLink from "./PageLinks";
import Link from "next/link";
import { AiFillHome, BsInfoCircleFill } from "react-icons/all";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 max-w-6xl m-auto">
      <div className="flex">
        <PagesLink url="/" title="home" Icon={AiFillHome} />
        <PagesLink url="/about" title="about" Icon={BsInfoCircleFill} />
      </div>

      <div>
        <Link href="/">
          <h1>
            <span className="text-2xl bg-cyan-500 px-2 py-1 rounded-lg text-white font-bold mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
