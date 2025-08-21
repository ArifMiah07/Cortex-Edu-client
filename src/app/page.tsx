import LandingPage from "@/components/landing/LandingPage";
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
        <h3>this is footer section</h3>
      </footer>
    </>
  );
}
