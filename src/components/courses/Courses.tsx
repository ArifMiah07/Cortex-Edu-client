"use client";

import Image from "next/image";
import Link from "next/link";

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
  return (
    <div>
      <h1>this is courses page</h1>
      <div className="border border-red-500 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((d, i) => (
          <div className="border border-green-500 p-5 " key={i}>
            {/* image */}
            <div className="w-full">
              <Image
                src={d.image}
                width={300}
                height={300}
                alt="course image"
              />
            </div>
            {/* heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-black text-lg font-bold mt-4">{d.title}</h1>
              <p className="text-gray-600 text-sm  " >{d.description}</p>
              <p className="text-gray-700 font-medium text-sm">by {d.mentor}</p>
            </div>
            {/* other info */}
            <div>
            <p>{d.price}</p>
            </div>
            {/* action btn */}
            <button>
              <Link href={`/courses/${d.slug}`}>View Course</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
