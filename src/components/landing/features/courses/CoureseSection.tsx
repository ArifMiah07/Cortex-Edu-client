"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoursesSection() {
  // Add necessary functionalities here
  /**
   * split code if if functionalities grows fast
   * add proper comment for each functionality
   * and also test with backend data
   * document the testing and testing result, also mention about any bug or difficulties
   *
   */

  return (
    // this is courses section
    /**
     * this section will use in features section
     * and show three courses in our courses section
     * use smooth animation
     * keep clean design and follow user friendly interface
     * add call for action button
     * and add necessary functionalities
     * add web, app, and software development course
     * add courses details in a details page for each
     */
    <section className="w-full min-h-[80vh]  flex-col items-center justify-center p-6 ">
      <h1 className="text-5xl font-bold text-center tracking-wide my-12 ">
        Our Courses
      </h1>
      {/* content */}
      {/* web development course section */}
      <div className="flex flex-row items-center justify-between gap-5">
        {/* image */}
        <div className="w-full rounded-xl p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {/* // todo: use <Image Tag> */}
          <div className="w-full flex items-center justify-center">
            <Image
              width={600}
              height={500}
              className="rounded-lg"
              src="https://i.ytimg.com/vi/nTTmACuMoZ0/hqdefault.jpg"
              alt="course thumbnail"
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-2xl text-white font-bold my-5">
              Learn Complete Web Development
            </h1>
            <button className="py-2 px-5 drop-shadow-lg text-white rounded-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 ">
              <Link href={`/course/web-development`}>Let&apos;s Code</Link>
            </button>
          </div>
        </div>
        {/* description */}
        <div className="w-full flex flex-col items-start  ">
          <h1 className="text-2xl courseTitle my-4 ">
            Start Your Web Development <br /> Journey From Here
          </h1>
          <p className="text-gray-600 font-light">
            Start your web development journey from here and unlock the skills
            to build modern, responsive websites and applications. Learn the
            fundamentals step by step, gain hands-on experience, and create real
            projects that showcase your talent. Begin today and move closer to
            becoming a professional developer.
          </p>
          <div className="my-6 w-full flex flex-col lg:flex-row item-start gap-4 ">
            <button className="py-2 px-5 drop-shadow-lg text-white rounded-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 ">
              <Link href={`/course/web-development/course-details`}>
                Explore
              </Link>
            </button>
            <button className="py-2 px-5 drop-shadow-lg text-black rounded-lg customBorder ">
              <Link href={`/course/web-development/course-testimonials`}>
                Success
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* more course --- android development */}
      <div className="w-full my-24 flex flex-row-reverse items-center justify-between gap-5">
        {/* image */}
        <div className="w-full rounded-xl p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {/* // todo: use <Image Tag> */}
          <div className="w-full flex items-center justify-center">
            <Image
              width={600}
              height={500}
              className="rounded-lg"
              src="https://i.ytimg.com/vi/EplH-amHTtE/hqdefault.jpg"
              alt="course thumbnail"
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-2xl text-white font-bold my-5">
              Learn Complete App Development
            </h1>
            <button className="py-2 px-5 drop-shadow-lg text-white rounded-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 ">
              <Link href={`/course/app-development`}>Let&apos;s Code</Link>
            </button>
          </div>
        </div>
        {/* description */}
        <div className="w-full flex flex-col items-start  ">
          <h1 className="text-2xl courseTitle my-4 ">
            Start Your Android App Development <br /> Journey From Here
          </h1>
          <p className="text-gray-600 font-light">
            Start your Android development journey from here and gain the skills
            to create powerful, user-friendly mobile applications. Learn the
            core concepts step by step, practice with real projects, and build
            apps that make an impact. Begin today and take the first step toward
            becoming a professional Android developer.
          </p>
          <div className="my-6 w-full flex flex-col lg:flex-row item-start gap-4 ">
            <button className="py-2 px-5 drop-shadow-lg text-white rounded-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 ">
              <Link href={`/course/app-development/course-details`}>
                Explore
              </Link>
            </button>
            <button className="py-2 px-5 drop-shadow-lg text-black rounded-lg customBorder2 ">
              <Link href={`/course/app-development/course-testimonials`}>
                Success
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* more course --- android development */}
      <div className="w-full mt-24 flex flex-row items-center justify-between gap-5">
        {/* image */}
        <div className="w-full rounded-xl p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {/* // todo: use <Image Tag> */}
          <div className="w-full flex items-center justify-center">
            <Image
              width={600}
              height={500}
              className="rounded-lg"
              src="https://i.ytimg.com/vi/Ubg3PenEdNw/hqdefault.jpg"
              alt="course thumbnail"
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-2xl text-white font-bold my-5">
              Learn Complete Software Development
            </h1>
            <button className="py-2 px-5 drop-shadow-lg text-white rounded-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 ">
              <Link href={`/course/software-development`}>Let&apos;s Code</Link>
            </button>
          </div>
        </div>
        {/* description */}
        <div className="w-full flex flex-col items-start  ">
          <h1 className="text-2xl courseTitle my-4 ">
            Start Your Desktop Software Development <br /> Journey From Here
          </h1>
          <p className="text-gray-600 font-light">
            Start your desktop software development journey from here and master
            the skills to build efficient, reliable, and user-friendly
            applications. Learn the fundamentals step by step, practice with
            real-world projects, and create powerful software solutions. Begin
            today and move closer to becoming a professional desktop software
            developer.
          </p>
          {/* call for action btn */}
          <div className="my-6 w-full flex flex-col lg:flex-row item-start gap-4 ">
            <button className="py-2 px-5 drop-shadow-lg text-white rounded-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 ">
              <Link href={`/course/software-development/course-details`}>
                Explore
              </Link>
            </button>
            <button className="py-2 px-5 drop-shadow-lg text-black rounded-lg customBorder ">
              <Link href={`/course/software-development/course-testimonials`}>
                Success
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
