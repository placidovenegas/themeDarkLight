// /components/switchtheme/index.js

import {
  IconSun as PiSunDimFill,
  IconMoon as BiSolidMoon,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div
      onClick={changeTheme}
      className="relative w-14 h-8 rounded-full p-1 cursor-pointer bg-[#ccc]"
    >
      <button
        className={`flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform ${
          theme === "light" ? "translate-x-0" : "translate-x-6"
        } transition-transform duration-500 ease-in-out`}
      >
        {theme === "light" ? (
          <PiSunDimFill size={16} />
        ) : (
          <BiSolidMoon size={16} />
        )}
      </button>
    </div>
  );
}

export default SwitchTheme;
