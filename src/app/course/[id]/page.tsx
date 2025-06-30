"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, BookOpen, PlayCircle, FileText, Award, ArrowLeft, Heart, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data
const courseData = {
  id: 1,
  title: "React Fundamentals",
  description:
    "Learn the basics of React including components, props, and state management. This comprehensive course will take you from beginner to confident React developer.",
  longDescription: `This course is designed for beginners who want to learn React from scratch. You'll start with the basics of React and gradually build up to more advanced concepts. By the end of this course, you'll be able to build your own React applications with confidence.

What you'll learn:
• Understanding React components and JSX
• Managing state and props
• Handling events and user interactions
• Working with React hooks
• Building reusable components
• Best practices and common patterns`,
  price: 99.99,
  thumbnail: "/placeholder.svg?height=400&width=600",
  instructor: {
    name: "John Doe",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Senior Frontend Developer with 8+ years of experience in React and JavaScript.",
    rating: 4.9,
    students: 15000,
    courses: 12,
  },
  rating: 4.8,
  students: 1234,
  duration: "8 hours",
  level: "Beginner",
  category: "Web Development",
  lastUpdated: "2024-01-15",
  language: "English",
  modules: [
    {
      id: 1,
      title: "Introduction to React",
      lectures: 4,
      duration: "45 min",
    },
    {
      id: 2,
      title: "Components and JSX",
      lectures: 6,
      duration: "1h 20min",
    },
    {
      id: 3,
      title: "State and Props",
      lectures: 5,
      duration: "1h 10min",
    },
    {
      id: 4,
      title: "Event Handling",
      lectures: 4,
      duration: "50min",
    },
    {
      id: 5,
      title: "React Hooks",
      lectures: 7,
      duration: "1h 45min",
    },
    {
      id: 6,
      title: "Building a Project",
      lectures: 8,
      duration: "2h 30min",
    },
  ],
  reviews: [
    {
      id: 1,
      user: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment: "Excellent course! Very well explained and easy to follow.",
      date: "2024-01-10",
    },
    {
      id: 2,
      user: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      comment: "Great content, but could use more practical examples.",
      date: "2024-01-08",
    },
    {
      id: 3,
      user: "Carol Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment: "Perfect for beginners. Highly recommended!",
      date: "2024-01-05",
    },
  ],
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
    console.log(params);
 const [isEnrolled, setIsEnrolled] = useState(false);
  const { toast } = useToast();

  const handleEnroll = () => {
    setIsEnrolled(true);
    toast("Enrollment successful!", {
      description: "You have been enrolled in the course. Start learning now!",
    });
  };

  const handleWishlist = () => {
    toast("Added to wishlist", {
      description: "Course has been added to your wishlist.",
    });
  };

  const totalLectures = courseData.modules.reduce((sum, module) => sum + module.lectures, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/courses" className="flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">LMS</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleWishlist}>
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-blue-600">{courseData.category}</Badge>
                <Badge variant="outline">{courseData.level}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{courseData.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{courseData.description}</p>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {courseData.rating} ({courseData.students.toLocaleString()} students)
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {courseData.duration}
                </div>
                <div className="flex items-center">
                  <PlayCircle className="h-4 w-4 mr-1" />
                  {totalLectures} lectures
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={courseData.thumbnail || "/placeholder.svg"}
                alt={courseData.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-line">{courseData.longDescription}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Level</p>
                        <p className="font-medium">{courseData.level}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-medium">{courseData.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Language</p>
                        <p className="font-medium">{courseData.language}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Last Updated</p>
                        <p className="font-medium">{courseData.lastUpdated}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <CardDescription>
                      {courseData.modules.length} modules • {totalLectures} lectures • {courseData.duration} total
                      length
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courseData.modules.map((module, index) => (
                        <div key={module.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold">
                                Module {index + 1}: {module.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {module.lectures} lectures • {module.duration}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <PlayCircle className="h-4 w-4 text-blue-600" />
                              <FileText className="h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Meet Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={courseData.instructor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {courseData.instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{courseData.instructor.name}</h3>
                        <p className="text-gray-600 mb-4">{courseData.instructor.bio}</p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{courseData.instructor.rating}</div>
                            <div className="text-sm text-gray-600">Rating</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">
                              {courseData.instructor.students.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Students</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{courseData.instructor.courses}</div>
                            <div className="text-sm text-gray-600">Courses</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                    <CardDescription>
                      {courseData.rating} average rating • {courseData.students.toLocaleString()} reviews
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {courseData.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-start space-x-3">
                            <Avatar>
                              <AvatarImage src={review.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {review.user
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-medium">{review.user}</h4>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">${courseData.price}</div>
                  <p className="text-gray-600">One-time payment</p>
                </div>

                {isEnrolled ? (
                  <div className="space-y-3">
                    <Link href={`/courses/${courseData.id}/learn`}>
                      <Button className="w-full" size="lg">
                        Continue Learning
                      </Button>
                    </Link>
                    <div className="flex items-center justify-center text-green-600">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm">Enrolled</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={handleEnroll}>
                      Enroll Now
                    </Button>
                    <p className="text-xs text-gray-500 text-center">30-day money-back guarantee</p>
                  </div>
                )}

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students enrolled</span>
                    <span className="font-medium">{courseData.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{courseData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Lectures</span>
                    <span className="font-medium">{totalLectures}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium">{courseData.level}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Related Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Advanced React Patterns", price: 129.99, rating: 4.7 },
                    { title: "React Native Mobile Apps", price: 149.99, rating: 4.8 },
                    { title: "Next.js Full Stack", price: 179.99, rating: 4.9 },
                  ].map((course, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" />
                            <span className="text-xs text-gray-600">{course.rating}</span>
                          </div>
                          <span className="text-sm font-bold text-blue-600">${course.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
