"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ArrowLeft,
  Search,
  PlayCircle,
  FileText,
  CheckCircle,
  Lock,
  ChevronDown,
  Download,
  Menu,
  X,
} from "lucide-react"

// Mock data
const courseData = {
  id: 1,
  title: "React Fundamentals",
  progress: 35,
  modules: [
    {
      id: 1,
      title: "Introduction to React",
      isCompleted: true,
      lectures: [
        {
          id: 1,
          title: "What is React?",
          duration: "10:30",
          isCompleted: true,
          isUnlocked: true,
          videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
          pdfs: [
            { name: "React Introduction.pdf", url: "#" },
            { name: "Setup Guide.pdf", url: "#" },
          ],
        },
        {
          id: 2,
          title: "Setting up React Environment",
          duration: "15:45",
          isCompleted: true,
          isUnlocked: true,
          videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
          pdfs: [{ name: "Environment Setup.pdf", url: "#" }],
        },
        {
          id: 3,
          title: "Your First React App",
          duration: "12:20",
          isCompleted: false,
          isUnlocked: true,
          videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
          pdfs: [
            { name: "First App Guide.pdf", url: "#" },
            { name: "Code Examples.pdf", url: "#" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Components and JSX",
      isCompleted: false,
      lectures: [
        {
          id: 4,
          title: "Understanding Components",
          duration: "18:30",
          isCompleted: false,
          isUnlocked: false,
          videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
          pdfs: [{ name: "Components Guide.pdf", url: "#" }],
        },
        {
          id: 5,
          title: "JSX Syntax",
          duration: "14:15",
          isCompleted: false,
          isUnlocked: false,
          videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
          pdfs: [{ name: "JSX Reference.pdf", url: "#" }],
        },
      ],
    },
    {
      id: 3,
      title: "State and Props",
      isCompleted: false,
      lectures: [
        {
          id: 6,
          title: "Managing State",
          duration: "20:45",
          isCompleted: false,
          isUnlocked: false,
          videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
          pdfs: [{ name: "State Management.pdf", url: "#" }],
        },
        {
          id: 7,
          title: "Working with Props",
          duration: "16:30",
          isCompleted: false,
          isUnlocked: false,
          videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
          pdfs: [{ name: "Props Guide.pdf", url: "#" }],
        },
      ],
    },
  ],
}

export default function LearnPage({ params }: { params: { id: string } }) {
  const [selectedLecture, setSelectedLecture] = useState(courseData.modules[0].lectures[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [lectureCompleted, setLectureCompleted] = useState(selectedLecture.isCompleted)

  const allLectures = courseData.modules.flatMap((module) => module.lectures)
  const completedLectures = allLectures.filter((lecture) => lecture.isCompleted).length
  const totalLectures = allLectures.length

  const filteredModules = courseData.modules
    .map((module) => ({
      ...module,
      lectures: module.lectures.filter((lecture) => lecture.title.toLowerCase().includes(searchTerm.toLowerCase())),
    }))
    .filter((module) => module.lectures.length > 0)

  const handleLectureSelect = (lecture: any) => {
    if (lecture.isUnlocked) {
      setSelectedLecture(lecture)
      setLectureCompleted(lecture.isCompleted)
      setSidebarOpen(false)
    }
  }
console.log(params);
  const handleMarkComplete = () => {
    setLectureCompleted(true)
    // In a real app, this would update the backend

    // Unlock next lecture
    const currentIndex = allLectures.findIndex((l) => l.id === selectedLecture.id)
    if (currentIndex < allLectures.length - 1) {
      allLectures[currentIndex + 1].isUnlocked = true
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-80 flex-col bg-white">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <h2 className="text-lg font-semibold">Course Content</h2>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <CourseSidebar
              courseData={courseData}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filteredModules={filteredModules}
              selectedLecture={selectedLecture}
              handleLectureSelect={handleLectureSelect}
              completedLectures={completedLectures}
              totalLectures={totalLectures}
            />
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:border-r lg:bg-white">
        <div className="flex h-16 items-center px-4 border-b">
          <h2 className="text-lg font-semibold">Course Content</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <CourseSidebar
            courseData={courseData}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filteredModules={filteredModules}
            selectedLecture={selectedLecture}
            handleLectureSelect={handleLectureSelect}
            completedLectures={completedLectures}
            totalLectures={totalLectures}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <Link href={`/courses/${courseData.id}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Course
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-semibold">{courseData.title}</h1>
                <p className="text-sm text-gray-600">{selectedLecture.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {completedLectures}/{totalLectures} completed
              </span>
              <Progress value={(completedLectures / totalLectures) * 100} className="w-24" />
            </div>
          </div>
        </header>

        {/* Video Player */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Video */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={selectedLecture.videoUrl}
                title={selectedLecture.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            {/* Lecture Info */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedLecture.title}</h2>
                <p className="text-gray-600">Duration: {selectedLecture.duration}</p>
              </div>
              <div className="flex items-center space-x-2">
                {lectureCompleted ? (
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Completed
                  </Badge>
                ) : (
                  <Button onClick={handleMarkComplete}>Mark as Complete</Button>
                )}
              </div>
            </div>

            {/* PDF Resources */}
            {selectedLecture.pdfs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Lecture Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedLecture.pdfs.map((pdf, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 text-red-600 mr-2" />
                          <span className="text-sm font-medium">{pdf.name}</span>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={pdf.url} download>
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CourseSidebar({
  courseData,
  searchTerm,
  setSearchTerm,
  filteredModules,
  selectedLecture,
  handleLectureSelect,
  completedLectures,
  totalLectures,
}: any) {
  return (
    <div className="space-y-4">
      {/* Progress */}
      <Card>
        <CardContent className="p-4">
          <div className="text-center mb-3">
            <div className="text-2xl font-bold text-blue-600">
              {Math.round((completedLectures / totalLectures) * 100)}%
            </div>
            <p className="text-sm text-gray-600">Course Progress</p>
          </div>
          <Progress value={(completedLectures / totalLectures) * 100} className="mb-2" />
          <p className="text-xs text-gray-600 text-center">
            {completedLectures} of {totalLectures} lectures completed
          </p>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search lessons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Modules */}
      <div className="space-y-2">
        {filteredModules.map((module, moduleIndex) => (
          <Collapsible key={module.id} defaultOpen={moduleIndex === 0}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left bg-gray-100 rounded-lg hover:bg-gray-200">
              <div>
                <h3 className="font-medium text-sm">{module.title}</h3>
                <p className="text-xs text-gray-600">
                  {module.lectures.filter((l: any) => l.isCompleted).length}/{module.lectures.length} completed
                </p>
              </div>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 mt-2">
              {module.lectures.map((lecture: any) => (
                <button
                  key={lecture.id}
                  onClick={() => handleLectureSelect(lecture)}
                  disabled={!lecture.isUnlocked}
                  className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                    selectedLecture.id === lecture.id
                      ? "bg-blue-100 text-blue-900 border border-blue-200"
                      : lecture.isUnlocked
                        ? "hover:bg-gray-50"
                        : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {lecture.isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : lecture.isUnlocked ? (
                        <PlayCircle className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Lock className="h-4 w-4 text-gray-400" />
                      )}
                      <span className="font-medium">{lecture.title}</span>
                    </div>
                    <span className="text-xs text-gray-500">{lecture.duration}</span>
                  </div>
                  {lecture.pdfs.length > 0 && (
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <FileText className="h-3 w-3 mr-1" />
                      {lecture.pdfs.length} resource{lecture.pdfs.length > 1 ? "s" : ""}
                    </div>
                  )}
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}
