// Define type for a single category object
export type TCourseCategory = {
  category: string;
  subCategory: string[];
};

export const courseCategories: TCourseCategory[] = [
  {
    category: "Web & Software Development",
    subCategory: [
      "Web Development (Frontend, Backend, Full Stack)",
      "Mobile App Development",
      "Game Development",
      "Software Engineering",
      "DevOps & Cloud",
      "CMS & Website Builders (WordPress, Shopify, etc.)"
    ]
  },
  {
    category: "Programming & Computer Science",
    subCategory: [
      "Python, Java, C/C++, C#",
      "JavaScript / TypeScript",
      "Data Structures & Algorithms",
      "Machine Learning & AI",
      "Databases (SQL, NoSQL)",
      "Cybersecurity & Ethical Hacking"
    ]
  },
  {
    category: "Data & Analytics",
    subCategory: [
      "Data Science",
      "Big Data & Hadoop",
      "Data Visualization",
      "Business Intelligence (Power BI, Tableau)",
      "Statistics & Probability"
    ]
  },
  {
    category: "Design & Creative",
    subCategory: [
      "Graphic Design",
      "UI/UX Design",
      "Video Editing & Animation",
      "Photography & Photoshop",
      "3D Modeling & CAD"
    ]
  },
  {
    category: "Business & Management",
    subCategory: [
      "Digital Marketing",
      "Entrepreneurship & Startups",
      "Project Management (Agile, Scrum, PMP)",
      "Finance & Accounting",
      "Leadership & Management"
    ]
  },
  {
    category: "Personal Development",
    subCategory: [
      "Productivity & Time Management",
      "Communication Skills",
      "Career Development",
      "Mindfulness & Wellness",
      "Public Speaking"
    ]
  },
  {
    category: "Science & Engineering",
    subCategory: [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Physics & Mathematics",
      "Chemistry & Biology"
    ]
  },
  {
    category: "AI & Emerging Technologies",
    subCategory: [
      "Artificial Intelligence",
      "Machine Learning",
      "Blockchain & Cryptocurrency",
      "Internet of Things (IoT)",
      "Quantum Computing"
    ]
  },
  {
    category: "Language & Communication",
    subCategory: [
      "English / Foreign Languages",
      "Writing & Storytelling",
      "Communication Skills",
      "Technical Writing"
    ]
  },
  {
    category: "Other / Miscellaneous",
    subCategory: [
      "Test Prep & Certification Courses",
      "Cooking & Culinary Arts",
      "Music & Instruments",
      "Sports & Fitness",
      "Lifestyle & Hobbies"
    ]
  }
];

export default courseCategories;
