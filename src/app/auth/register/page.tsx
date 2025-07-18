// "use client";

import Register from "@/components/auth/register";

// import type React from "react";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { BookOpen, Eye, EyeOff } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

export default async function RegisterPage() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  // const { toast } = useToast();


  // const response = ''

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   if (formData.password !== formData.confirmPassword) {
  //     toast("Registration failed", { description: "Passwords do not match" });
  //     setIsLoading(false);
  //     return;
  //   }

  //   // Mock registration
  //   toast("Title here", { description: "More info here" });
  //   setTimeout(() => {
  //     toast("Registration successful", {
  //       description: "Your account has been created successfully!",
  //     });
  //     router.push("/auth/login");
  //     setIsLoading(false);
  //   }, 1000);
  // };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <Register />
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    //   <Card className="w-full max-w-md">
    //     <CardHeader className="text-center">
    //       <div className="flex justify-center mb-4">
    //         <BookOpen className="h-10 w-10 text-blue-600" />
    //       </div>
    //       <CardTitle className="text-2xl">Create Account</CardTitle>
    //       <CardDescription>Join our learning community today</CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         <div className="space-y-2">
    //           <Label htmlFor="name">Full Name</Label>
    //           <Input
    //             id="name"
    //             name="name"
    //             type="text"
    //             placeholder="Enter your full name"
    //             value={formData.name}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             name="email"
    //             type="email"
    //             placeholder="Enter your email"
    //             value={formData.email}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="password">Password</Label>
    //           <div className="relative">
    //             <Input
    //               id="password"
    //               name="password"
    //               type={showPassword ? "text" : "password"}
    //               placeholder="Create a password"
    //               value={formData.password}
    //               onChange={handleInputChange}
    //               required
    //             />
    //             <Button
    //               type="button"
    //               variant="ghost"
    //               size="sm"
    //               className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
    //               onClick={() => setShowPassword(!showPassword)}>
    //               {showPassword ? (
    //                 <EyeOff className="h-4 w-4" />
    //               ) : (
    //                 <Eye className="h-4 w-4" />
    //               )}
    //             </Button>
    //           </div>
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="confirmPassword">Confirm Password</Label>
    //           <Input
    //             id="confirmPassword"
    //             name="confirmPassword"
    //             type="password"
    //             placeholder="Confirm your password"
    //             value={formData.confirmPassword}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </div>
    //         <Button type="submit" className="w-full" disabled={isLoading}>
    //           {isLoading ? "Creating account..." : "Create Account"}
    //         </Button>
    //       </form>

    //       <div className="mt-6 text-center text-sm">
    //         <p className="text-gray-600">
    //           Already have an account?{" "}
    //           <Link
    //             href="/auth/login"
    //             className="text-blue-600 hover:underline">
    //             Sign in
    //           </Link>
    //         </p>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}
