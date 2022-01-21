import React from "react";
import { useTheme } from "next-themes";
const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between text-white px-6 py-4 h-16  max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <button
        className="px-6 py-2 bg-teal-900 text-white rounded-md font-semibold uppercase "
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </header>
  );
};

export default Header;
