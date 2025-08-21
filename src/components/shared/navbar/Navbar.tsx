'use client'

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
    <nav className="w-full h-full flex flex-row items-center justify-between gap-3 p-6 border border-red-400  ">
      {/* logo */}
      <Link href={"/"}>
        <div className="flex flex-row items-center justify-center gap-2 ">
          <Image
            className={""}
            src={"/assets/images/cortex-dlogo.png"}
            alt="cortex logo image"
            width={50}
            height={50}
          />
          <span>
            <h1 className="text-lg text-black dark:text-white font-bold">
              Cortex
            </h1>
          </span>
        </div>
      </Link>
      {/* menu */}
      <div className="flex flex-row gap-4 items-center justify-between ">
        <ul className="flex flex-row items-center justify-between gap-4 ">
          {navLinks}
        </ul>
      </div>
      {/* extra */}
      <div className="flex flex-row items-center justify-between gap-4">
        <Link href={"/portfolio"}>Portfolio</Link>
      </div>
    </nav>
  );
}
