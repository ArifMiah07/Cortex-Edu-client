"use client";


import Navbar from "../shared/navbar/Navbar";
import Features from "./features/Features";
import HeroSection from "./hero/HeroSection";

export default function LandingPage() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Features />
    </>
  );
}
