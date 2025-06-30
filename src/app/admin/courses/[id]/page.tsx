"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  PlayCircle,
  FileText,
  Users,
  DollarSign,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data
const courseData = {
  id: 1,
  title: "React Fundamentals",
  description:
    "Learn the basics of React including components, props, and state management.",
  price: 99.99,
  thumbnail: "/placeholder.svg?height=200&width=300",
  students: 45,
  status: "Published",
  modules: [
    {
      id: 1,
      title: "Introduction to React",
      moduleNumber: 1,
      lectures: [
        {
          id: 1,
          title: "What is React?",
          videoUrl: "https://youtube.com/watch?v=example1",
          pdfCount: 2,
        },
        {
          id: 2,
          title: "Setting up React",
          videoUrl: "https://youtube.com/watch?v=example2",
          pdfCount: 1,
        },
      ],
    },
    {
      id: 2,
      title: "Components and Props",
      moduleNumber: 2,
      lectures: [
        {
          id: 3,
          title: "Creating Components",
          videoUrl: "https://youtube.com/watch?v=example3",
          pdfCount: 3,
        },
        {
          id: 4,
          title: "Using Props",
          videoUrl: "https://youtube.com/watch?v=example4",
          pdfCount: 2,
        },
      ],
    },
  ],
};

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [isModuleDialogOpen, setIsModuleDialogOpen] = useState(false);
  const [isLectureDialogOpen, setIsLectureDialogOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [moduleForm, setModuleForm] = useState({ title: "" });
  const [lectureForm, setLectureForm] = useState({
    title: "",
    videoUrl: "",
    moduleId: 0,
  });
  const { toast } = useToast();
  console.log(params,selectedModule);

  const handleCreateModule = () => {
    toast("Module created", {
      description: "New module has been added to the course.",
    });
    setIsModuleDialogOpen(false);
    setModuleForm({ title: "" });
  };

  const handleCreateLecture = () => {
    toast("Lecture created", {
      description: "New lecture has been added to the module.",
    });
    setIsLectureDialogOpen(false);
    setLectureForm({ title: "", videoUrl: "", moduleId: 0 });
  };

  const allLectures = courseData.modules.flatMap((module) =>
    module.lectures.map((lecture) => ({
      ...lecture,
      moduleName: module.title,
      moduleNumber: module.moduleNumber,
    }))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/courses">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">
            {courseData.title}
          </h1>
          <p className="text-gray-600">Manage course modules and lectures</p>
        </div>
        <Badge
          className={
            courseData.status === "Published"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }>
          {courseData.status}
        </Badge>
      </div>

      {/* Course Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseData.students}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Price</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${courseData.price}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Modules</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {courseData.modules.length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lectures</CardTitle>
            <PlayCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allLectures.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Modules Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Course Modules</CardTitle>
              <CardDescription>
                Organize your course content into modules
              </CardDescription>
            </div>
            <Dialog
              open={isModuleDialogOpen}
              onOpenChange={setIsModuleDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Module
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Module</DialogTitle>
                  <DialogDescription>
                    Add a new module to organize your course content
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="moduleTitle">Module Title</Label>
                    <Input
                      id="moduleTitle"
                      placeholder="Enter module title"
                      value={moduleForm.title}
                      onChange={(e) => setModuleForm({ title: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsModuleDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateModule}>Create Module</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courseData.modules.map((module) => (
              <div key={module.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">
                      Module {module.moduleNumber}: {module.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {module.lectures.length} lectures
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Dialog
                      open={isLectureDialogOpen}
                      onOpenChange={setIsLectureDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedModule(module.id);
                            setLectureForm({
                              ...lectureForm,
                              moduleId: module.id,
                            });
                          }}>
                          <Plus className="mr-1 h-3 w-3" />
                          Add Lecture
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Lecture</DialogTitle>
                          <DialogDescription>
                            Add a new lecture to {module.title}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="lectureTitle">Lecture Title</Label>
                            <Input
                              id="lectureTitle"
                              placeholder="Enter lecture title"
                              value={lectureForm.title}
                              onChange={(e) =>
                                setLectureForm({
                                  ...lectureForm,
                                  title: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="videoUrl">Video URL</Label>
                            <Input
                              id="videoUrl"
                              placeholder="YouTube video URL"
                              value={lectureForm.videoUrl}
                              onChange={(e) =>
                                setLectureForm({
                                  ...lectureForm,
                                  videoUrl: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              onClick={() => setIsLectureDialogOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleCreateLecture}>
                              Add Lecture
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Module
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Module
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="space-y-2">
                  {module.lectures.map((lecture) => (
                    <div
                      key={lecture.id}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">{lecture.title}</span>
                        <Badge variant="secondary" className="text-xs">
                          {lecture.pdfCount} PDFs
                        </Badge>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-3 w-3" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-3 w-3" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Lectures Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Lectures</CardTitle>
          <CardDescription>
            Complete list of all lectures in this course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Lecture Title</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Video</TableHead>
                <TableHead>PDFs</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allLectures.map((lecture) => (
                <TableRow key={lecture.id}>
                  <TableCell className="font-medium">{lecture.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      Module {lecture.moduleNumber}: {lecture.moduleName}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <a
                      href={lecture.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm">
                      View Video
                    </a>
                  </TableCell>
                  <TableCell>{lecture.pdfCount} files</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
