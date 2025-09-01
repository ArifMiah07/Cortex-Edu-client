// Define type for a single category tuple
export type TCourseCategory = [string, string[]];

/**
 * [['0', []], ['0', []],...]
 * [] --> ['0', []], ['0', []] --> '0', [] --> [] --> ''
 * 
 * 
 */

export const courseCategories : TCourseCategory[] = [
  ["Web & Software Development", [
    "Web Development (Frontend, Backend, Full Stack)",
    "Mobile App Development",
    "Game Development",
    "Software Engineering",
    "DevOps & Cloud",
    "CMS & Website Builders (WordPress, Shopify, etc.)"
  ]],
  ["Programming & Computer Science", [
    "Python, Java, C/C++, C#",
    "JavaScript / TypeScript",
    "Data Structures & Algorithms",
    "Machine Learning & AI",
    "Databases (SQL, NoSQL)",
    "Cybersecurity & Ethical Hacking"
  ]],
  ["Data & Analytics", [
    "Data Science",
    "Big Data & Hadoop",
    "Data Visualization",
    "Business Intelligence (Power BI, Tableau)",
    "Statistics & Probability"
  ]],
  ["Design & Creative", [
    "Graphic Design",
    "UI/UX Design",
    "Video Editing & Animation",
    "Photography & Photoshop",
    "3D Modeling & CAD"
  ]],
  ["Business & Management", [
    "Digital Marketing",
    "Entrepreneurship & Startups",
    "Project Management (Agile, Scrum, PMP)",
    "Finance & Accounting",
    "Leadership & Management"
  ]],
  ["Personal Development", [
    "Productivity & Time Management",
    "Communication Skills",
    "Career Development",
    "Mindfulness & Wellness",
    "Public Speaking"
  ]],
  ["Science & Engineering", [
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Physics & Mathematics",
    "Chemistry & Biology"
  ]],
  ["AI & Emerging Technologies", [
    "Artificial Intelligence",
    "Machine Learning",
    "Blockchain & Cryptocurrency",
    "Internet of Things (IoT)",
    "Quantum Computing"
  ]],
  ["Language & Communication", [
    "English / Foreign Languages",
    "Writing & Storytelling",
    "Communication Skills",
    "Technical Writing"
  ]],
  ["Other / Miscellaneous", [
    "Test Prep & Certification Courses",
    "Cooking & Culinary Arts",
    "Music & Instruments",
    "Sports & Fitness",
    "Lifestyle & Hobbies"
  ]]
];

export default courseCategories;
