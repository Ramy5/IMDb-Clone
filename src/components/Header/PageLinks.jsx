import Link from "next/link";
import React from "react";

const PageLinks = ({ url, title, Icon }) => {
  return (
    <Link href={url} className="flex mr-8 hover:text-cyan-500">
      <Icon className="sm:hidden text-2xl" />
      <span className="uppercase hidden sm:inline font-semibold">{title}</span>
    </Link>
  );
};

export default PageLinks;
