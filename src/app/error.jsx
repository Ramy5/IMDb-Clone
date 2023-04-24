"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <div className="m-auto mt-8 text-xl w-60 text-center">
      <h2>{error.message || "Something went wrong!"}</h2>
      <button
        className="text-white mt-4 bg-slate-800 rounded-md py-2 px-4 border-none hover:bg-cyan-500 transition-all duration-500 font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
