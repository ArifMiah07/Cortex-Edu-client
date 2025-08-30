"use client";

import Link from "next/link";
import Navbar from "../navbar/Navbar";
import courseCategories from "@/lib/courseCategory";

export default function Header() {
  const subNavbarLinks = (
    <>
      {courseCategories?.map((category, index: number) => (
        <li key={index} className="flex-shrink-0">
          <Link
            href={`/courses/${category[0]
              .toString()
              .toLowerCase()
              .replace(/\s+/g, "-")}`}>
            <span className="text-black text-sm whitespace-nowrap px-3 py-0 block">
              {category[0]}
            </span>
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="w-full flex flex-col">
      {/* super nav bar */}
      <section className="flex items-center justify-between">
        {/* start of the section */}
        <div>
          <h1>Take is offer now! 90% cash back offer!! once in a decades!</h1>
        </div>
        {/* end of the section */}
        <div className="mr-5">
          <span>X</span>
        </div>
      </section>
      {/* actual navigation */}
      <Navbar />
      {/* Sub-navbar */}
      <section className="w-full border border-purple-500">
        <nav className="w-full px-5 py-2">
          <ul className="flex gap-3 overflow-x-auto scrollbar-none">
            {subNavbarLinks}
          </ul>
        </nav>
      </section>
    </div>
  );
}
