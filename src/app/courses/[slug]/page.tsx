import { TCourseData } from "@/lib/coursesData";

export default async function CourseDetails({courseData}: {courseData: TCourseData}){
    const slug  = courseData.slug;
    // console.log(params);
    return(
        <div>
            this is {slug}
        </div>
    )
}