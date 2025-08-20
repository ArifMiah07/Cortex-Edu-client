"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // todo: func
  // implement all functionalities here
  /* ==============================
        /| add user friendly logical animation
        |/ double check for bugs
        /| no ai for writing code or suggestions
        |/ follow the proper documentations for tools and tech that would have use here
        /| make proper documentation in comment about the function
        |/ drink water, eat something, take breaks,
        /| keep hourly working records in hand notebooks or hand note page
        |/ just set and open ide and !start coding...look over or light review previously written codes, 
    ================================*/

  return (
    // actual section:
    /*--------------------------
            | This is Hero Section
            | This section will use in home page
            | This section must have to be modern, clean, polished, soft high contrast
        --------------------------*/
    <section className="relative w-full min-h-[80vh] bg-[url('/assets/images/hero-grid01.jpg')] bg-cover overflow-hidden">
      {/* floating decorative images */}
      <motion.div
        className="absolute top-10 right-10 z-10 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <Image
          src="/assets/images/earth-map-dotted.png"
          alt="Earth Map"
          //   width={300}
          //   height={300}
          fill={true}
          className="opacity-70"
          priority={true}
        />
      </motion.div>

      <motion.div className="absolute bottom-20 left-10 z-10 pointer-events-none">
        <Image
          src="/assets/images/planet.png"
          alt="Planet"
          width={180}
          height={180}
          className="opacity-80"
        />
      </motion.div>

      <motion.div className="absolute top-1/3 left-1/2 z-10 pointer-events-none">
        <Image
          src="/assets/images/satellite.png"
          alt="Satellite"
          width={100}
          height={100}
          className="opacity-75"
        />
      </motion.div>

      {/* content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-[70vh] p-3 lg:p-6 text-center">
        <h1 className="grad1 my-6 text-2xl lg:text-5xl 2xl:text-7xl font-bold">
          Cortex For Organized Learning
        </h1>
        <p className="mb-4 text-gray-600 max-w-2xl">
          Manage all your courses, assignments, and study resources in one
          place. Stay organized, access materials anytime, and make learning
          more efficient.
        </p>
        <Link href={"/home"}>
          <button className="w-[160px] h-[48px] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 hover:from-[#FF005E] hover:via-[#00FFC8] hover:to-[#2600FF] hover:text-white rounded-xl text-xl font-bold">
            Explore
          </button>
        </Link>
      </div>
    </section>
  );
}
