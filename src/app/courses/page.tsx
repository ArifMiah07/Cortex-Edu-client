import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoursesPage(){
    //
    const data =[
        {id: 1, slug: "web development",},
        {id: 2, slug: "app development",},
        {id: 3, slug: "software development",},

    ]
    return(
        <>
        <h1>this is courses pages</h1>
        <div>
            {
                data.map((d, i)=> <div key={i}>
                    <h1>{d.slug}</h1>
                    <Link href={`/courses/${d.slug}`}>
                    <Button>View Course</Button>
                  </Link>
                </div> )
            }
        </div>
        </>

    )
}