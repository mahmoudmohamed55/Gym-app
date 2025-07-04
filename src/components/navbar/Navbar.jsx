import { BiPhoneCall } from "react-icons/bi";
import Darkmode from "./Darkmode";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Navlinks } from "./Links";

function Navbar() {
  let [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="navbar z-10 fixed bg-white dark:bg-black shadow-md ">
      <div className="container flex items-center justify-between">
        <div className="phone  sm:flex hidden items-center font-semibold text-gray-500 dark:text-gray-400">
          <BiPhoneCall className="text-2xl animate-pulse text-main mr-1 hover:scale-110 transition-all" />
          +91123456789
        </div>
        <div className="logo  ">
          <img
            src={logo}
            className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0 sm:mr-1"
            alt=""
          />
        </div>
        <div className="navlinks sm:flex hidden items-center justify-end gap-3 md:gap-5">
          {Navlinks.map((link) => (
            <a
              href={link.link}
              key={link.id}
              className="text-black font-bold text-[14px] md:text-lg dark:text-white hover:text-main "
            >
              {link.name}
            </a>
          ))}
          <Darkmode />
        </div>
        <div className="flex items-center gap-4 sm:hidden py-4">
          <Darkmode />
          {showMenu ? (
            <HiMenuAlt1
              className="text-2xl cursor-pointer transition-all"
              onClick={toggleMenu}
            />
          ) : (
            <HiMenuAlt3
              className="text-2xl cursor-pointer transition-all"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
       <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
export default Navbar;
