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
  };

  const data: TCourseData[] = [
    {
      id: 1,
      slug: "web-development",
      image: "https://i.ytimg.com/vi/nTTmACuMoZ0/hqdefault.jpg",
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
      image: "https://i.ytimg.com/vi/EplH-amHTtE/hqdefault.jpg",
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
      image: "https://i.ytimg.com/vi/Ubg3PenEdNw/hqdefault.jpg",
      title: "Software Development Fundamentals",
      description:
        "Understand core programming concepts, data structures, and algorithms for software engineering.",
      mentor: "David Smith",
      rating: 4.7,
      totalEnrollment: 800,
      courseDuration: "4 months",
      price: 199,
    },
    {
      id: 4,
      slug: "data-science",
      image: "https://i.ytimg.com/vi/-ETQ97mXXF0/hqdefault.jpg",
      title: "Data Science & Machine Learning",
      description:
        "Analyze data, build predictive models, and master Python libraries like Pandas, NumPy, and Scikit-learn.",
      mentor: "Emily Johnson",
      rating: 4.9,
      totalEnrollment: 2100,
      courseDuration: "7 months",
      price: 399,
    },
    {
      id: 5,
      slug: "ui-ux-design",
      image: "https://i.ytimg.com/vi/ZnuwB35GYMY/hqdefault.jpg",
      title: "UI/UX Design Mastery",
      description:
        "Learn design principles, Figma, and prototyping to create user-friendly digital experiences.",
      mentor: "Michael Lee",
      rating: 4.5,
      totalEnrollment: 670,
      courseDuration: "3 months",
      price: 179,
    },
    {
      id: 6,
      slug: "cloud-computing",
      image: "https://i.ytimg.com/vi/M988_fsOSWo/hqdefault.jpg",
      title: "Cloud Computing with AWS & Azure",
      description:
        "Get hands-on with cloud services, deployment, and DevOps best practices.",
      mentor: "Sophia Patel",
      rating: 4.8,
      totalEnrollment: 1100,
      courseDuration: "6 months",
      price: 329,
    },
    {
      id: 7,
      slug: "cybersecurity",
      image: "https://i.ytimg.com/vi/inWWhr5tnEA/hqdefault.jpg",
      title: "Cybersecurity & Ethical Hacking",
      description:
        "Protect systems, perform penetration testing, and learn modern cybersecurity strategies.",
      mentor: "Ethan Brown",
      rating: 4.7,
      totalEnrollment: 890,
      courseDuration: "5 months",
      price: 299,
    },
    {
      id: 8,
      slug: "artificial-intelligence",
      image: "https://i.ytimg.com/vi/JMUxmLyrhSk/hqdefault.jpg",
      title: "Artificial Intelligence Essentials",
      description:
        "Understand AI concepts, neural networks, and real-world applications of deep learning.",
      mentor: "Olivia Green",
      rating: 4.9,
      totalEnrollment: 1500,
      courseDuration: "6 months",
      price: 449,
    },
    {
      id: 9,
      slug: "blockchain",
      image: "https://i.ytimg.com/vi/SSo_EIwHSd4/hqdefault.jpg",
      title: "Blockchain & Web3 Development",
      description:
        "Learn blockchain fundamentals, smart contracts, and build decentralized applications (dApps).",
      mentor: "Liam Davis",
      rating: 4.6,
      totalEnrollment: 730,
      courseDuration: "4 months",
      price: 259,
    },
    {
      id: 10,
      slug: "game-development",
      image: "https://i.ytimg.com/vi/9M4XKi25I2M/hqdefault.jpg",
      title: "Game Development with Unity & Unreal",
      description:
        "Build interactive 2D/3D games and simulations using Unity and Unreal Engine.",
      mentor: "Ava Wilson",
      rating: 4.7,
      totalEnrollment: 1020,
      courseDuration: "6 months",
      price: 379,
    },
    // === High-level fundamentals ===
    {
      id: 11,
      slug: "database-systems",
      image: "https://i.ytimg.com/vi/h0nxCDiD-zg/hqdefault.jpg",
      title: "Database Systems & SQL",
      description:
        "Learn relational database concepts, SQL queries, indexing, and transactions with MySQL and PostgreSQL.",
      mentor: "Henry Miller",
      rating: 4.8,
      totalEnrollment: 1600,
      courseDuration: "4 months",
      price: 229,
    },
    {
      id: 12,
      slug: "operating-systems",
      image: "https://i.ytimg.com/vi/vBURTt97EkA/hqdefault.jpg",
      title: "Operating Systems Fundamentals",
      description:
        "Understand processes, threads, scheduling, memory management, and OS-level resource handling.",
      mentor: "Sophia Clarke",
      rating: 4.7,
      totalEnrollment: 1200,
      courseDuration: "5 months",
      price: 249,
    },
    {
      id: 13,
      slug: "computer-networks",
      image: "https://i.ytimg.com/vi/qiQR5rTSshw/hqdefault.jpg",
      title: "Computer Networks & Protocols",
      description:
        "Learn TCP/IP, routing, DNS, HTTP/HTTPS, and how the internet works under the hood.",
      mentor: "Alex Turner",
      rating: 4.6,
      totalEnrollment: 1000,
      courseDuration: "4 months",
      price: 239,
    },
    {
      id: 14,
      slug: "software-engineering",
      image: "https://picsum.photos/seed/software-engineering/800/450",
      title: "Software Engineering Principles",
      description:
        "Master software lifecycle, agile methodologies, design patterns, and scalable architecture.",
      mentor: "Isabella Reed",
      rating: 4.8,
      totalEnrollment: 1400,
      courseDuration: "6 months",
      price: 269,
    },
    {
      id: 15,
      slug: "compiler-design",
      image: "https://picsum.photos/seed/compiler-design/800/450",
      title: "Compiler Design & Language Processing",
      description:
        "Understand lexical analysis, parsing, syntax trees, and building a basic compiler/interpreter.",
      mentor: "Daniel Evans",
      rating: 4.7,
      totalEnrollment: 680,
      courseDuration: "5 months",
      price: 299,
    },

    // === System-level (rare & advanced) ===
    {
      id: 16,
      slug: "distributed-systems",
      image: "https://i.ytimg.com/vi/Y6Ev8GIlbxc/hqdefault.jpg",
      title: "Distributed Systems & Scalability",
      description:
        "Dive into consensus algorithms, replication, fault tolerance, and large-scale system design.",
      mentor: "Natalie Brooks",
      rating: 4.9,
      totalEnrollment: 480,
      courseDuration: "6 months",
      price: 499,
    },
    {
      id: 17,
      slug: "computer-architecture",
      image: "https://i.ytimg.com/vi/l8XOZJkozfI/hqdefault.jpg",
      title: "Computer Architecture & Assembly",
      description:
        "Learn CPU design, instruction sets, assembly language, pipelining, and performance optimization.",
      mentor: "Richard Wilson",
      rating: 4.8,
      totalEnrollment: 530,
      courseDuration: "6 months",
      price: 399,
    },
    {
      id: 18,
      slug: "embedded-systems",
      image: "https://picsum.photos/seed/embedded-systems/800/450",
      title: "Embedded Systems & IoT Programming",
      description:
        "Work with microcontrollers, sensors, and low-level hardware to build efficient embedded applications.",
      mentor: "Laura Adams",
      rating: 4.7,
      totalEnrollment: 420,
      courseDuration: "5 months",
      price: 379,
    },
    {
      id: 19,
      slug: "parallel-computing",
      image: "https://picsum.photos/seed/parallel-computing/800/450",
      title: "Parallel Computing & High Performance",
      description:
        "Explore multi-core processing, GPU acceleration, and concurrency with CUDA and OpenMP.",
      mentor: "Matthew Carter",
      rating: 4.8,
      totalEnrollment: 310,
      courseDuration: "6 months",
      price: 459,
    },
    {
      id: 20,
      slug: "operating-system-kernel",
      image: "https://picsum.photos/seed/os-kernel/800/450",
      title: "Operating System Kernel Development",
      description:
        "Learn low-level OS development, system calls, memory management, and writing a simple kernel.",
      mentor: "Grace Mitchell",
      rating: 4.9,
      totalEnrollment: 210,
      courseDuration: "8 months",
      price: 599,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-start p-5">
      <h1 className="text-black text-2xl font-semibold my-4 ">All Courses</h1>
      <p className="text-gray-500 text-md font-md">
        Discover and enroll in courses that match your interests
      </p>
      <div>
        <span>search</span>
      </div>
      <div className="w-full ">
        <Courses data={data} />
      </div>
    </div>
  );
}
