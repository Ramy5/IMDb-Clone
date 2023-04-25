"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("page");

  const navigationItemActive =
    searchValue &&
    searchValue === param &&
    "underline-offset-8 decoration-cyan-600 decoration-4 underline";

  return (
    <>
      <Link
        className={`hover:text-cyan-500 dark:hover:text-cyan-500 mx-6 py-2 dark:text-white ${navigationItemActive}
          `}
        href={`/?page=${param}`}
      >
        {title}
      </Link>
    </>
  );
};

export default NavbarItem;
