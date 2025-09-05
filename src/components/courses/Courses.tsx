"use client";

import CourseCard from "./coueseCard/CoureseCard";



//
export type TCourseData = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  mentor: string;
  rating: number;
  totalEnrollment: number;
  courseDuration: string;
  price: number;
};

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
      <div className="flex flex-row w-full gap-3 rounded-lg border border-yellow-500 px-3 py-2">
        {/* any instruction or information*/}
        <h1>this is courses page</h1>
        {/* dynamic layout */}
        <div className="flex gap-4">
          <span>grid</span>
          <span>list</span>
        </div>
      </div>
      {/* all courses card container*/}
      <CourseCard data={data} />
    </div>
  );
}
