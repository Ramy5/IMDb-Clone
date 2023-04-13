"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 transition-colors delay-150 bg-white text-gray-700 min-h-screen selection:bg-cyan-500 selection:text-white">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
