"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function CreateCoursePage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: null as File | null,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, thumbnail: file });
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeThumbnail = () => {
    setFormData({ ...formData, thumbnail: null });
    setThumbnailPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      toast("Course created successfully", {
        description: "Your course has been created and is ready for content.",
      });
      router.push("/admin/courses");
      setIsLoading(false);
    }, 1000);
  };

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
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Create New Course
          </h1>
          <p className="text-gray-600">
            Add a new course to your learning platform
          </p>
        </div>
      </div>

      {/* Form */}
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Course Information</CardTitle>
          <CardDescription>
            Fill in the basic information about your course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Thumbnail Upload */}
            <div className="space-y-2">
              <Label>Course Thumbnail</Label>
              {thumbnailPreview ? (
                <div className="relative">
                  <img
                    src={thumbnailPreview || "/placeholder.svg"}
                    alt="Thumbnail preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={removeThumbnail}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <Label htmlFor="thumbnail" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                          Upload thumbnail image
                        </span>
                        <span className="mt-1 block text-sm text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </span>
                      </Label>
                      <Input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Course Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Course Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter course title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Course Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Course Description *</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe what students will learn in this course"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Course Price */}
            <div className="space-y-2">
              <Label htmlFor="price">Course Price ($) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Course"}
              </Button>
              <Link href="/admin/courses">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
