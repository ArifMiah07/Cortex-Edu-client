"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"

// Mock data
const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React including components, props, and state management.",
    price: 99.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    students: 45,
    modules: 8,
    status: "Published",
  },
  {
    id: 2,
    title: "Node.js Backend Development",
    description: "Build scalable backend applications with Node.js and Express.",
    price: 149.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    students: 32,
    modules: 12,
    status: "Published",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Master the fundamentals of user interface and user experience design.",
    price: 79.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    students: 28,
    modules: 6,
    status: "Draft",
  },
  {
    id: 4,
    title: "Python for Beginners",
    description: "Start your programming journey with Python programming language.",
    price: 89.99,
    thumbnail: "/placeholder.svg?height=200&width=300",
    students: 67,
    modules: 10,
    status: "Published",
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
        course.description.toLowerCase().includes(term.toLowerCase()),
    )
    setFilteredCourses(filtered)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600">Manage your course content and settings</p>
        </div>
        <Link href="/admin/courses/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Course
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <Badge
                className={`absolute top-2 right-2 ${
                  course.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {course.status}
              </Badge>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/courses/${course.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/courses/${course.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Course
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Course
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                <div className="text-sm text-gray-600">{course.students} students</div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{course.modules} modules</span>
                <Link href={`/admin/courses/${course.id}`}>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found matching your search.</p>
        </div>
      )}
    </div>
  )
}
