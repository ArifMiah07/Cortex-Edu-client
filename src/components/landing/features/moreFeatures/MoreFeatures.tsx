"use client";

import {
  BookmarkPlus,
  ChartNoAxesCombined,
  FileSearch,
  History,
  ListPlus,
  LoaderPinwheel,
  SquarePen,
} from "lucide-react";
import { JSX } from "react";

//   data: todo: move them to lib folder
export interface IFeatures {
  id: number | string;
  bgClr: string;
  title: string;
  description: string;
}
export const features: IFeatures[] = [
  {
    id: 1,
    bgClr: "bg-purple-100",
    title: "Create Notes",
    description:
      "Easily jot down important points while studying and keep all your notes organized in one place.",
  },
  {
    id: 2,
    bgClr: "bg-red-100",
    title: "Bookmark Lessons",
    description:
      "Save lessons and create custom collections for quick access to your favorite content.",
  },
  {
    id: 3,
    bgClr: "bg-green-100",
    title: "Track Total Time",
    description:
      "Monitor how much time you’ve spent learning to stay on top of your schedule and goals.",
  },
  {
    id: 4,
    bgClr: "bg-yellow-100",
    title: "Progress Tracking",
    description:
      "See your course completion and learning milestones to measure your growth over time.",
  },
  {
    id: 5,
    bgClr: "bg-blue-100",
    title: "Custom Playlists",
    description:
      "Build playlists with external links to organize learning resources exactly the way you want.",
  },
  {
    id: 6,
    bgClr: "bg-pink-100",
    title: "Playlist Learning Progress",
    description:
      "Keep track of your progress for each playlist so you know exactly where you left off.",
  },
  {
    id: 7,
    bgClr: "bg-teal-100",
    title: "Search Modules & Lessons",
    description:
      "Quickly find modules, lessons, or topics using our powerful search feature.",
  },
];

const iconMap: Record<number, JSX.Element> = {
  1: <SquarePen />,
  2: <BookmarkPlus />,
  3: <History />,
  4: <ChartNoAxesCombined />,
  5: <ListPlus />,
  6: <LoaderPinwheel />,
  7: <FileSearch />,
};

export default function MoreFeaturesSection() {
  // add functionalities

  return (
    // This is more features section
    /**
     * Show here all features and extra features
     * show a list of features
     * like -->
     * creates notes
     * bookmark lessons and create collection
     * see the total spend time
     * progress tracking
     * create a playlist with external links
     * see the playlist learning progress
     * search option for modules and lessons
     *
     */
    <section className="border border-gray-400 bg-purple-300 rounded drop-shadow-lg w-full min-h-[80vh]  flex-col items-center justify-center p-6 mb-24">
      {/* section heading */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center tracking-wide my-6 ">
          More Features
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center leading-relaxed mb-6">
          Explore extra tools and options that make learning more organized,
          engaging, and effective.
        </p>
      </div>
      {/* content */}
      <div className=" border border-gray-400 drop-shadow-lg rounded-xl bg-slate-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center lg:items-start p-3 gap-5">
        {features?.map((feature, indx) => (
          <div
            className={`flex flex-col items-start rounded-xl shadow p-5 gap-3 ${feature.bgClr} hover:scale-105 transition-transform duration-300`}
            key={feature.id || indx}>
            <div
              className={`w-12 h-12 flex items-center justify-center text-white bg-indigo-500 rounded-full`}>
              {/* icon */}
              {iconMap[feature.id as number]}
            </div>
            <div className="flex flex-col gap-2 ">
              {/* text */}
              <h1 className="text-md font-medium ">{feature.title}</h1>
              <p className="text-md text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
