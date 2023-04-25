"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ totalPages }) => {
  const router = useRouter();
  const fetchPage = useSearchParams();
  const currentPage = fetchPage.get("page");

  const [page, setPage] = useState(1);

  const pageForwardHandler = () => {
    if (page === totalPages) return;
    setPage((prevPage) => ++prevPage);
  };

  const pageBackHandler = () => {
    if (page < 1) return;
    setPage((prevPage) => --prevPage);
  };

  useEffect(() => {
    setPage(1);
  }, [currentPage]);

  useEffect(() => {
    router.push(`/?page=${currentPage || "fetchTrending"}&pageNumber=${page}`);
  }, [page, router, currentPage]);

  return (
    <div className="flex justify-center items-center py-12">
      <MdKeyboardArrowLeft
        onClick={pageBackHandler}
        className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center cursor-pointer transition duration-150 hover:bg-cyan-700"
      />
      <span className="mx-6 text-2xl font-semibold select-none text-cyan-500">
        {page}
      </span>
      <MdKeyboardArrowRight
        onClick={pageForwardHandler}
        className="w-8 h-8  rounded-full bg-cyan-500 text-white flex items-center justify-center cursor-pointer transition duration-150 hover:bg-cyan-700"
      />
    </div>
  );
};

export default Pagination;
