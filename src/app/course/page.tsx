"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Star, Clock, Users, BookOpen } from "lucide-react"

// Mock data
const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React including components, props, and state management.",
    price: 99.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    instructor: "John Doe",
    rating: 4.8,
    students: 1234,
    duration: "8 hours",
    level: "Beginner",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Node.js Backend Development",
    description: "Build scalable backend applications with Node.js and Express.",
    price: 149.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Smith",
    rating: 4.9,
    students: 856,
    duration: "12 hours",
    level: "Intermediate",
    category: "Backend",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Master the fundamentals of user interface and user experience design.",
    price: 79.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    instructor: "Mike Johnson",
    rating: 4.7,
    students: 642,
    duration: "6 hours",
    level: "Beginner",
    category: "Design",
  },
  {
    id: 4,
    title: "Python for Beginners",
    description: "Start your programming journey with Python programming language.",
    price: 89.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    instructor: "Sarah Wilson",
    rating: 4.6,
    students: 1567,
    duration: "10 hours",
    level: "Beginner",
    category: "Programming",
  },
  {
    id: 5,
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts and modern ES6+ features.",
    price: 129.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    instructor: "David Brown",
    rating: 4.9,
    students: 923,
    duration: "15 hours",
    level: "Advanced",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Create mobile applications using React Native and Flutter.",
    price: 179.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    instructor: "Lisa Chen",
    rating: 4.8,
    students: 734,
    duration: "20 hours",
    level: "Intermediate",
    category: "Mobile Development",
  },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCourses, setFilteredCourses] = useState(courses)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(term.toLowerCase()) ||
        course.description.toLowerCase().includes(term.toLowerCase()) ||
        course.category.toLowerCase().includes(term.toLowerCase()),
    )
    setFilteredCourses(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">LMS</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/admin">
                <Button variant="ghost">Admin</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Courses</h1>
          <p className="text-gray-600">Discover and enroll in courses that match your interests</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-blue-600">{course.category}</Badge>
                <Badge
                  className={`absolute top-2 right-2 ${
                    course.level === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : course.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {course.level}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                <div className="text-sm text-gray-600">by {course.instructor}</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                  <Link href={`/course/${course.id}`}>
                    <Button>View Course</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchTerm("")
                setFilteredCourses(courses)
              }}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
