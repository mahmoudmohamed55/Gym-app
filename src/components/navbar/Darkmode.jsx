import { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

function Darkmode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light"); 
    } else {
      element.classList.remove("dark");
      element.classList.add("light"); 
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <BiSolidMoon
          onClick={() => setTheme("dark")}
          className="text-2xl text-black cursor-pointer"
        />
      )}
    </>
  );
}

export default Darkmode;
