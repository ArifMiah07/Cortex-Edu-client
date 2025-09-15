"use client";

export default function Home() {
  return (
    // This is Home Component
    /**
     * this is home component will use in Home Page | home routes
     * User will redirect here after login
     * or user can visit this page if features allow the user
     * home page will show all the course grid and also the complete course overview for each
     * home will show user's running courses with progress
     * and also home page will show all the courses user purchased
     * home page will also show top courses from each category
     * home will also show explore new courses
     * home will shows related courses
     *
     *
     *
     *
     */
    <section className="w-full min-h-screen">
      {/* hero section in home page */}
      {/* welcome section */}
      <section className="w-full flex flex-row gap-5 p-5">
        {/* profile */}
        <div className="w-10 h-10 rounded-full">
          <div className="w-full h-full flex flex-col items-center justify-center text-lg font-bold bg-black text-white rounded-full p-2">DA</div>
        </div>
        {/* text heading */}
        <div className="flex flex-col items-start  ">
          <p className="text-2xl font-bold ">Welcome back, {"David"}</p>
          <p>Full Stack Web Developer</p>
        </div>
      </section>
      {/* swiper / carousel section */}
      <section className="flex flex-row gap-5 items-center justify-center w-full min-h-[55vh] bg-teal-100 border border-amber-200 p-12">
        <div className=" w-[450px] flex flex-col bg-white p-6 border border-gray-300 drop-shadow-lg ">
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-3xl font-semibold ">
              Master tomorrow&apos;s skills today
            </h1>
            <p>
              Power up your AI, career, and life skills with the most
              up-to-date, expert-led learning.
            </p>
          </div>
          <div className="flex gap-5 mt-4 ">
            <button className="text-white font-semibold hover:bg-purple-500 border border-purple-500 bg-purple-700 rounded-sm px-5 py-3  ">
              Try it free
            </button>
            <button className="text-purple-700 font-semibold hover:bg-purple-100 border border-purple-500  rounded-sm px-5 py-3  ">
              Learn AI
            </button>
          </div>
        </div>
        <div className="w-[500px] bg-red-500 h-[400px]"></div>
        <div></div>
        <div className="w-full h-full   "></div>
      </section>
    </section>
  );
}
