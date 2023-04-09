"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

const PageMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const lightThemeHandler = () => setTheme("light");
  const darkThemeHandler = () => setTheme("dark");

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="text-xl">
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer hover:text-cyan-500"
          onClick={lightThemeHandler}
        />
      ) : (
        <BsFillMoonFill
          className="cursor-pointer hover:text-cyan-500"
          onClick={darkThemeHandler}
        />
      )}
    </div>
  );
};

export default PageMode;
