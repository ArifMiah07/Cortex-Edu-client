"use client";

import Features from "./features/Features";
import HeroSection from "./hero/HeroSection";
import Navbar from "../shared/navbar/Navbar";

export default function LandingPage() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="">
        <HeroSection />
        <Features />
      </main>
      <footer>
        <h3>this is footer section</h3>
      </footer>
    </>
  );
}
