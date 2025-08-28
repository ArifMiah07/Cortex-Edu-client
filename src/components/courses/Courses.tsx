"use client";

import Link from "next/link";

//
type TCourseData = {
  id: number;
  slug: string;
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
      <div className="border border-red-500 p-5">
        {data.map((d, i) => (
          <div className="" key={i}>
            <h1>{d.slug}</h1>
            <p>{d.price}</p>
            <Link href={`/courses/${d.slug}`}>
              <button>View Course</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
