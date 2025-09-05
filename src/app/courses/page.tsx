import Courses from "@/components/courses/Courses";
import { coursesData } from "@/lib/coursesData";

export default function CoursesPage() {
  const data = coursesData;

  return (
    <div className="w-full min-h-screen flex flex-col items-start p-5 z-1">
      {/* path history */}
      <div className="w-full flex flex-row items-start justify-start ">
        <div className="flex flex-row">
          <span className="bg-green-500 px-3 text-white ">Home</span>
          <span className="bg-green-500 clip-triangle"></span>
        </div>
        <div className="flex flex-row">
          <span className="bg-green-500 clip-triangle-reverse"></span>
          <span className="bg-green-500 px-3 text-white ">Courses</span>
          <span className="bg-green-500 clip-triangle"></span>
        </div>
      </div>
      {/* heading */}
      <div className="w-full flex flex-col my-4">
        <h1 className="text-black text-2xl font-semibold ">All Courses</h1>
        <p className="text-gray-500 text-md font-md">
          Discover and enroll in courses that match your interests
        </p>
      </div>
      <div className="w-full p-6 border rounded-lg  border-pink-600 ">
        filter
      </div>
      <div className="w-full flex flex-row ">
        <div className="w-[400px] h-[700px] mt-1 rounded-lg  border border-green-600 ">
          filter
        </div>
        <Courses data={data} />
      </div>
    </div>
  );
}
