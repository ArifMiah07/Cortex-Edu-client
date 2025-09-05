"use client";

import { TCourseData } from "@/types";
import CourseCard from "./coursesCard/CoursesCard";

export default function Courses({ data }: { data: TCourseData[] }) {
  // add functionalities here

  return (
    // this is course component
    /**
     * this page shows all the courses
     * this page has all type of filters
     *
     *
     *
     */
    <div className="flex flex-col gap-1 p-1">
      <div className="w-full flex flex-row gap-3 rounded-lg bg-green-200 border border-yellow-500 px-1 py-1">
        {/* any instruction or information*/}
        {/* <h1>this is courses page</h1> */}
        {/* dynamic layout */}
        <div className="w-full flex items-center justify-evenly gap-4 bg-green-200">
          <span className="text-black bg-white border border-red-300 px-4 rounded-sm " >grid</span>
          <span className="text-black bg-white border border-red-300 px-4 rounded-sm " >list</span>
          <span className="text-black bg-white border border-red-300 px-4 rounded-sm " >paginate</span>
          <span className="text-black bg-white border border-red-300 px-4 rounded-sm " >infinite scroll</span>
          <span className="text-black bg-white border border-red-300 px-4 rounded-sm " >courses per page</span>
          <span className="text-black bg-white border border-red-300 px-4 rounded-sm " >sort</span>
        </div>
      </div>
      <div className="w-full">
        {/* all courses card container*/}
        <CourseCard data={data} />
      </div>
      <div className="w-full my-12 flex flex-col lg:flex-row items-center justify-between ">
        <div className=" w-full flex flex-row items-center justify-center gap-3">
          <button className={`bg-green-600 px-5 py-2 text-white text-md rounded-sm`}>Previous</button>
          <div className="flex gap-2">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <button className="bg-green-500 px-5 py-2 text-white text-md rounded-sm" key={index}>{index+1}</button>
              ))}
          </div>
          <button className={`bg-green-600 px-5 py-2 text-white text-md rounded-sm`}>Next</button>
        </div>
      </div>
    </div>
  );
}
