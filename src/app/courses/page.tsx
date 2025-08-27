import Courses from "@/components/courses/Courses";

export default function CoursesPage() {
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
  const data : TCourseData[]= [
    {
      id: 1,
      slug: "web-development",
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
    <>
      <h1>All Courses</h1>
      <p>Discover and enroll in courses that match your interests</p>
      <div>
        <span>search</span>
      </div>
      <div>
        <Courses data={data} />
      </div>
    </>
  );
}
