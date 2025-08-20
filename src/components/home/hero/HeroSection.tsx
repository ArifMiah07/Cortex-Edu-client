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
    <section className="w-full min-h-[80vh] border border-purple-400">
      {/* Heading */}
      <div className="w-full h-[70vh] flex flex-col p-3 lg:p-6 items-center justify-center border border-rose-500">
        <h1 className=" text-2xl lg:text-5xl 2xl:text-7xl font-bold">Cortex For Organized Learning</h1>
        <p className="mt-2  text-gray-600">
          Manage all your courses, assignments, and study resources in one
          place. Stay organized, access materials anytime, and make learning
          more efficient.
        </p>
      </div>
    </section>
  );
}
