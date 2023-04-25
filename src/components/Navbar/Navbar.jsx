import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="bg-cyan-100 dark:bg-gray-500 text-center text-lg font-semibold flex flex-wrap justify-center p-2">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      <NavbarItem title="New" param="fetchNew" />
    </div>
  );
};

export default Navbar;
