'use client'

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

  }

export default function Courses({data}: {data: TCourseData[]}){
    return(
        <div>
        <h1>this is courses page</h1>
        <div>
            {data.map((d, i) => (
          <div key={i}>
            <h1>{d.slug}</h1>
            <p>{d.price}</p>
            <Link href={`/courses/${d.slug}`}>
              <button>View Course</button>
            </Link>
          </div>
        ))}
        </div>
        </div>
    )
}