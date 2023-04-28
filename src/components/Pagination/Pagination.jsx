"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ totalPages }) => {
  const router = useRouter();
  const fetchPage = useSearchParams();
  const pathName = usePathname();
  const currentPage = fetchPage.get("page");

  const [page, setPage] = useState(1);

  const pageForwardHandler = () => {
    if (page === totalPages) return;
    setPage((prevPage) => ++prevPage);
  };

  const pageBackHandler = () => {
    if (page === 1) return;
    setPage((prevPage) => --prevPage);
  };

  useEffect(() => {
    setPage(1);
  }, [currentPage]);

  useEffect(() => {
    if (pathName === "/") {
      router.push(`/?page=${currentPage}&pageNumber=${page}`);
    } else {
      router.push(`${pathName}/?pageNumber=${page}`);
    }
  }, [page, router, currentPage, pathName]);

  return (
    <div className="flex justify-center items-center py-12">
      {page > 1 && (
        <MdKeyboardArrowLeft
          onClick={pageBackHandler}
          className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center cursor-pointer transition duration-150 hover:bg-cyan-700"
        />
      )}
      <span className="mx-6 text-3xl font-semibold select-none text-cyan-500">
        {page}
      </span>
      {page < totalPages && (
        <MdKeyboardArrowRight
          onClick={pageForwardHandler}
          className="w-8 h-8  rounded-full bg-cyan-500 text-white flex items-center justify-center cursor-pointer transition duration-150 hover:bg-cyan-700"
        />
      )}
    </div>
  );
};

export default Pagination;
