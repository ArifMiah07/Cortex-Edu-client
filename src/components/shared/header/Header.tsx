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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  

  // handle mouse enter
  const handleMouseEnter = (index:number)=> {
    // if before time ends
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredIndex(index);
  }

  // handle mouse leave
  const handleMouseLeave = ()=> {
      // wait 1 sec before close sub menu
      timeoutRef.current = setTimeout(() => {
        setHoveredIndex(null);
      }, (1000));
  }

  // create nav links
  const subNavbarLinks = (
    <>
      {courseCategories?.map((category, index: number) => (
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
            <span className=" text-black text-sm whitespace-nowrap px-3 py-0 block">
              {category.category}
            </span>
          </Link>
          {/* showing dropdown link menu for subcategory */}
          {hoveredIndex === index && (
            <div className=" fixed mt-2 bg-white border rounded shadow-md z-10">
              {category.subCategory.map((subCat, subIndex) => (
                <div
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                  key={subIndex}>
                  {subCat}
                  {/* <p>
                  </p> */}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </>
  );

  courseCategories.map((category, index) => {
    console.log(index, category, category.category, category.subCategory);
    category.subCategory.forEach((sc, i) => {
      console.log(i, sc);
    });
  });
  console.log(courseCategories.length);

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
