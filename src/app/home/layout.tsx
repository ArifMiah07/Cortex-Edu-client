import FooterSection from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen" >{children}</main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
