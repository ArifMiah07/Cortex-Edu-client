// "use client";

import Login from "@/components/auth/login";

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

export default async function LoginPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  // const { toast } = useToast();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   // Mock authentication
  //   setTimeout(() => {
  //     if (email === "admin@lms.com" && password === "admin123") {
  //       toast("Login successful", { description: "Welcome back, Admin!" });
  //       router.push("/admin");
  //     } else if (email === "user@lms.com" && password === "user123") {
  //       toast("Login successful", { description: "Welcome back!" });
  //       router.push("/courses");
  //     } else {
  //       toast("Login failed", { description: "Invalid email or password" });
  //     }
  //     setIsLoading(false);
  //   }, 1000);
  // };

  return (
    <Login />
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    //   <Card className="w-full max-w-md">
    //     <CardHeader className="text-center">
    //       <div className="flex justify-center mb-4">
    //         <BookOpen className="h-10 w-10 text-blue-600" />
    //       </div>
    //       <CardTitle className="text-2xl">Welcome Back</CardTitle>
    //       <CardDescription>
    //         Sign in to your account to continue learning
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         <div className="space-y-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="Enter your email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="password">Password</Label>
    //           <div className="relative">
    //             <Input
    //               id="password"
    //               type={showPassword ? "text" : "password"}
    //               placeholder="Enter your password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
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
    //         <Button type="submit" className="w-full" disabled={isLoading}>
    //           {isLoading ? "Signing in..." : "Sign In"}
    //         </Button>
    //       </form>

    //       <div className="mt-6 text-center text-sm">
    //         <p className="text-gray-600">
    //           {"Don't have an account? "}
    //           <Link
    //             href="/auth/register"
    //             className="text-blue-600 hover:underline">
    //             Sign up
    //           </Link>
    //         </p>
    //       </div>

    //       <div className="mt-6 p-4 bg-gray-50 rounded-lg">
    //         <p className="text-sm font-medium text-gray-700 mb-2">
    //           Test Credentials:
    //         </p>
    //         <div className="text-xs text-gray-600 space-y-1">
    //           <p>
    //             <strong>Admin:</strong> admin@lms.com / admin123
    //           </p>
    //           <p>
    //             <strong>User:</strong> user@lms.com / user123
    //           </p>
    //         </div>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}
