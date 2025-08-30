import Navbar from "../navbar/Navbar";

export default function Header(){
    return(
        <div>
            <h1>this is header section</h1>
            <Navbar />
            {/*  */}
            <section>
                <nav>
                    this subnav
                </nav>
            </section>
        </div>
    )
}