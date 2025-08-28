import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMS - Learning Management System",
  description: "A comprehensive learning management system",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <header>{/* <Navbar></Navbar> */}</header>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
