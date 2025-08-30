"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // add functionalities
  /*--------------------------------
    | add scrolling functionality
    | show user profile if login?online
    | 
    ----------------------------------*/
  // user status
  const user = true;
  // menu bar content
  const activeUserNavLinkName = [
    "Home",
    "Courses",
    "Library",
    "Dashboard",
    "Profile",
    "Login",
  ];
  const viewerNavLinkName = ["Home", "Courses", "Library", "Register"];
  // reuseable nav links
  const navLinks = (
    <>
      {user
        ? activeUserNavLinkName.map((userLinks, indx) => (
            <li key={indx}>
              <Link href={`/${userLinks.trim().toLowerCase()}`}>
                <span>{userLinks}</span>
              </Link>
            </li>
          ))
        : viewerNavLinkName.map((userLinks, indx) => (
            <li key={indx}>
              <Link href={`/${userLinks.trim().toLowerCase()}`}>
                <span>{userLinks}</span>
              </Link>
            </li>
          ))}
    </>
  );

  return (
    // This is Navbar
    /*---------------------------------
    | this navbar will used in header section as a shared component
    | navbar would have 3 main section -- logo, menu, extra link
    | make navbar responsive for all device
    | use  a nice logo, make polished ui/ux, 
    | menu content --> Home, Courses, Library, Dashboard, Profile, Register/Login/Logout, Portfolio
    | add logical animation and dynamic navbar based on user scroll
    ----------------------------------*/
    <nav className="w-full h-full flex flex-row items-center justify-between gap-3 px-5 py-2 border border-red-400  ">
      {/* logo */}
      <Link href={"/"}>
        <div className="flex flex-row items-center justify-center gap-2 ">
          <Image
            className={""}
            src={"/logo-icon.png"}
            alt="cortex logo image"
            width={24}
            height={24}
          />
          <span>
            <h1 className="text-lg text-black dark:text-white font-bold">
              Cortex
            </h1>
          </span>
        </div>
      </Link>
      {/* search */}
      <div className="border border-gray-500 rounded-full px-3 relative flex grow items-center justify-center ">
        <input
          type="text"
          placeholder="Search For anything"
          className="relative grow text black  w-full  bg-white outline-none rounded-full px-5 py-3  "
        />
        <div className="flex items-center justify-center">
          <button className="cursor-pointer">
            {" "}
            <Search />
          </button>
        </div>
      </div>
      {/* menu */}
      <div className="flex flex-row gap-4 items-center justify-between ">
        <ul className="flex flex-row items-center justify-between gap-4 ">
          {navLinks}
        </ul>
      </div>
      {/* extra */}
      <div className="flex flex-row items-center justify-between gap-4">
        {/* basic */}
        <div className="flex gap-3 items-center justify-between">
          <span>wishlist</span>
          <span>cart</span>
          <span>profile</span>
        </div>
        <Link href={"/portfolio"}>Portfolio</Link>
      </div>
    </nav>
  );
}
