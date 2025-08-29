import Courses from "@/components/courses/Courses";

export default function CoursesPage() {
  //
  type TCourseData = {
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

  }
  const data : TCourseData[]= [
    {
      id: 1,
      slug: "web-development",
      image: 'https://i.ytimg.com/vi/nTTmACuMoZ0/hqdefault.jpg',
      title: "Full-Stack Web Development",
      description:
        "Learn to build modern websites and web apps using HTML, CSS, JavaScript, React, and Node.js.",
      mentor: "John Doe",
      rating: 4.8,
      totalEnrollment: 1200,
      courseDuration: "6 months",
      price: 299,
    },
    {
      id: 2,
      slug: "app-development",
      image: 'https://i.ytimg.com/vi/EplH-amHTtE/hqdefault.jpg',
      title: "Mobile App Development",
      description:
        "Master Android and iOS development with React Native and Flutter.",
      mentor: "Sarah Khan",
      rating: 4.6,
      totalEnrollment: 950,
      courseDuration: "5 months",
      price: 349,
    },
    {
      id: 3,
      slug: "software-development",
      image: 'https://i.ytimg.com/vi/Ubg3PenEdNw/hqdefault.jpg',
      title: "Software Development Fundamentals",
      description:
        "Understand core programming concepts, data structures, and algorithms for software engineering.",
      mentor: "David Smith",
      rating: 4.7,
      totalEnrollment: 800,
      courseDuration: "4 months",
      price: 199,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-start p-5">
      <h1 className="text-black text-2xl font-semibold my-4 ">All Courses</h1>
      <p className="text-gray-500 text-md font-md">Discover and enroll in courses that match your interests</p>
      <div>
        <span>search</span>
      </div>
      <div className="w-full ">
        <Courses data={data} />
      </div>
    </div>
  );
}
