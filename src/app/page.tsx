import LandingPage from "@/components/landing/LandingPage";
import FooterSection from "@/components/shared/footer/Footer";

export default function RootPage() {

  return (
    <>
      <main>
        <LandingPage />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
