import LandingPage from "@/components/landing/LandingPage";
import FooterSection from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <LandingPage />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
