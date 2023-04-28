"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const inputRef = useRef(null);

  const inputChangeHandler = (e) => setSearch(e.target.value);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
    inputRef.current.blur();
  };

  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center"
      onSubmit={formSubmitHandler}
    >
      <input
        onChange={inputChangeHandler}
        ref={inputRef}
        value={search}
        type="text"
        name="Search"
        placeholder="Search Keywords"
        className="w-full p-6 bg-transparent focus:outline-none placeholder:text-lg"
      />
      <button type="submit" className="mr-4 text-2xl font-bold text-gray-400">
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBox;
