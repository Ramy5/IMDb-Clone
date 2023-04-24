import React from "react";

/* eslint-disable @next/next/no-img-element */
const loading = () => {
  return (
    <div className="flex justify-center mt-20">
      <img className="w-20 h-20" src="/spinner.svg" alt="Loading..." />
    </div>
  );
};

export default loading;
