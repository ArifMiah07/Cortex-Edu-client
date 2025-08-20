import Navbar from "@/components/shared/navbar/Navbar";
import HeroSection from "../hero/HeroSection";

export default function Home(){
    return(
    <>
        <header>
            <Navbar></Navbar>
        </header>
        <main className="">
            <HeroSection />
        </main>
        <footer>
            <h3>this is footer section</h3>
        </footer>
    </>
    )
}