import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-full flex flex-row items-center justify-between gap-3 p-3 border border-red-400   ">
      {/* logo */}
      <Link href={"/"}>
        <div className="flex flex-row items-center justify-center gap-2 p-2">
          <Image
            className={""}
            src={"/assets/images/cortex-dlogo.png"}
            alt="cortex logo image"
            width={50}
            height={50}
          />
          <span>
            <h1 className="text-lg text-black dark:text-white font-bold">
              Cortex
            </h1>
          </span>
        </div>
      </Link>
      {/* menu */}
      <div></div>
      {/* extra */}
      <div></div>
    </nav>
  );
}
