"use client";
import { TCourseData } from "@/types";
import { Clock4, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ data }: { data: TCourseData[] }) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {/* courses card */}
      {data.map((d, i) => (
        <div
          className=" w-full flex flex-col justify-between course-card-custom-border p-5 "
          key={i}>
          {/* image */}
          <div className="w-full flex items-center justify-center">
            <Image src={d.image} width={300} height={300} alt="course image" />
          </div>
          {/* content */}
          {/* heading */}
          <div className="flex flex-col ">
            <h1 className="text-black text-lg font-bold mt-2">{d.title}</h1>
            <p className="text-gray-600 text-sm mt-2 ">{d.description}</p>
            <p className="text-gray-700 font-medium text-bold">by {d.mentor}</p>
          </div>
          {/* other info */}
          <div className="flex flex-row gap-2 justify-between mt-2">
            <span className="flex flex-row justify-center items-center gap-[2px] text-md">
              <Star size={16} />
              {d.rating}
            </span>
            <span className="flex flex-row justify-center items-center gap-[2px] text-md">
              <Users size={16} />
              {d.totalEnrollment}
            </span>
            <span className="flex flex-row justify-center items-center gap-[2px] text-md">
              <Clock4 size={16} />
              {d.courseDuration}
            </span>
          </div>
          {/* action btn */}
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-between mt-2 ">
            <p className="text-xl text-green-500 font-bold">
              <span className="text-green-500 font-normal text-sm">$</span>
              <span className="text-green-500 font-bold text-lg">
                {d.price}
              </span>
            </p>
            <button className="px-3 py-1 hover:bg-green-500 buy-course-custom-border text-black ">
              <Link href={`/courses/${d.slug}`}>Details</Link>
            </button>
            <button className="px-3 py-1 buy-course-custom-border text-black ">
              <Link href={`/courses/${d.slug}/payment`}>Buy</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
