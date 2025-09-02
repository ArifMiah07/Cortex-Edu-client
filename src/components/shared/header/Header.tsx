"use client";

import Link from "next/link";
import Navbar from "../navbar/Navbar";
import courseCategories from "@/lib/courseCategory";
import { useRef, useState } from "react";

export default function Header() {
  // add all functionalities here
  /**
   * Header Section
   *
   */

  // subcategory by mouse hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // handle mouse enter
  const handleMouseEnter = (index: number) => {
    // if before time ends
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredIndex(index);
    setIsHovered(true);
  };

  // handle mouse leave
  const handleMouseLeave = () => {
    // wait 1 sec before close sub menu
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setIsHovered(false);
    }, 100);
  };

  // create nav links
  const subNavbarLinks = (
    <>
      {courseCategories
        ?.slice(0, courseCategories.length - 4)
        .map((category, index: number) => (
          <li
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
            className="relative flex-shrink-0 z-1 ">
            <Link
              href={`/courses/${category.category
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-")}`}>
              <span
                className={`${
                  hoveredIndex === index && isHovered
                    ? "bg-green-400 px-5 py-2"
                    : ""
                } text-black text-sm  px-3 py-0 `}>
                {category.category}
              </span>
            </Link>
            {/* showing dropdown link menu for subcategory */}
            {hoveredIndex === index && (
              /*
               * ==================================================================
               * TODO: fix that Bug --> currently using slice method to show less category
               * ==================================================================
               */
              /** fixed or absolute using one them them has specific bug -->
               * position absolute not works (hide that sub menu under ul or li) and using
               * position fixed works for 1st appears items but not items that need scroll to view
               */
              <div className="fixed mt-2 bg-white border rounded shadow-md z-10">
                {category.subCategory.map((subCat, subIndex) => (
                  <div
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                    key={subIndex}>
                    <Link
                      href={`/courses/${category.category
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${subCat
                        .toLowerCase()
                        .trim()
                        .split(" ")
                        .join("-")}`}>
                      <span>{subCat}</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
    </>
  );

  return (
    //
    /**
     *
     *
     */
    <div className="w-full flex flex-col">
      {/* super nav bar */}
      <section className="flex items-center justify-between">
        {/* start of the section */}
        <div>
          <h1>Take this offer now! 90% cash back offer!! once in a decades!</h1>
        </div>
        {/* end of the section */}
        <div className="mr-5">
          <span>X</span>
        </div>
      </section>
      {/* actual navigation */}
      <Navbar />
      {/* Sub-navbar */}
      <section className="w-full overflow-x-auto scrollbar-none border border-purple-500">
        <nav className="w-full">
          <ul className="flex gap-3">{subNavbarLinks}</ul>
        </nav>
      </section>
    </div>
  );
}
