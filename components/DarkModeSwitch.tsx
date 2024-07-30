"use client";
import { useTheme } from "next-themes";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
//

const DarkModeSwitch = () => {
  const { setTheme, theme, systemTheme } = useTheme();
  console.log(theme);
  console.log(systemTheme);
  const current = theme == "system" ? systemTheme : theme;
  return (
    <div>
      {current === "dark" ? (
        <p
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-500"
        >
          <MdLightMode />
        </p>
      ) : (
        <p
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        >
          <MdDarkMode />
        </p>
      )}
    </div>
  );
};

export default DarkModeSwitch;
