"use client";

import Link from "next/link";
import Navbar from "../navbar/Navbar";
import courseCategories from "@/lib/courseCategory";

export default function Header() {
  const subNavbarLinks = (
    <>
      {courseCategories?.map((category, index: number) => (
        <li key={index} className="flex-shrink-0">
          <Link href={`/${category[0].toString().toLowerCase().replace(/\s+/g, "-")}`}>
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
