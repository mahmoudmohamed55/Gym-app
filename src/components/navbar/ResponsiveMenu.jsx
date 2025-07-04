import React from "react";
import { FaUserCircle } from "react-icons/fa";
import avatar from "../../assets/avatar.png";

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Navlinks } from "./Links";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-slate-200 dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <img src={avatar} alt="" className="h-12 w-12 rounded-full" />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.id} >
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <Link to="https://github.com/mahmoudmohamed55" target="_blank">Mahmoud Mohamed</Link>
        </h1>
      </div>
      <BiArrowBack
        onClick={() => setShowMenu(false)}
        className="absolute top-1/2 -right-3.5 text-5xl text-white   cursor-pointer bg-slate-600 dark:bg-gray-500 p-3 rounded-full"
      />
    </div>

  );
};

export default ResponsiveMenu;
