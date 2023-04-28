"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const pathName = usePathname();

  const [pageNumber, setPageNumber] = useState(1);

  const pageForwardHandler = () => {
    if (pageNumber === totalPages) return;
    setPageNumber((prevPage) => ++prevPage);
  };

  const pageBackHandler = () => {
    if (pageNumber === 1) return;
    setPageNumber((prevPage) => --prevPage);
  };

  useEffect(() => {
    setPageNumber(1);
  }, [currentPage]);

  useEffect(() => {
    if (pathName === "/") {
      router.push(`/?page=${currentPage}&pageNumber=${pageNumber}`);
    } else {
      router.push(`${pathName}/?pageNumber=${pageNumber}`);
    }
  }, [pageNumber, router, currentPage, pathName]);

  return (
    <div className="flex justify-center items-center py-12 self-baseline">
      {pageNumber > 1 && (
        <MdKeyboardArrowLeft
          onClick={pageBackHandler}
          className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center cursor-pointer transition duration-150 hover:bg-cyan-700"
        />
      )}
      <span className="mx-5 mb-2 p-1 border-b-4 border-cyan-500 text-3xl font-semibold select-none text-cyan-500">
        {pageNumber}
      </span>
      {pageNumber < totalPages && (
        <MdKeyboardArrowRight
          onClick={pageForwardHandler}
          className="w-10 h-10  rounded-lg bg-cyan-500 text-white flex items-center justify-center cursor-pointer transition duration-150 hover:bg-cyan-700"
        />
      )}
    </div>
  );
};

export default Pagination;
