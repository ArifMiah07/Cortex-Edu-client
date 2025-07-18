"use client";

import Image from "next/image";

// import useUserStore, { IUser } from "@/stores/useStore";

export type TCourse = {
  _id?: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  createdBy: string; 
  isActive: boolean;
  isPublished?: boolean;
  isPrivate?: boolean;
  isDeleted?: false,
}


export default function Profile({data}: {data: TCourse[]}) {

  const courseData = data;

  console.log("data from profile: ", data);
  // const { user, setUser } = useUserStore();
  // const handleLogin = () => {
  //   // Simulate a login process
  //   const newUser: IUser = { name: "John Doe", email: "john.doe@example.com" };
  //   setUser(newUser);
  // };

  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
    <div className="w-full min-h-screen text-center ">
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" />
        </form>
      </div>
      <div>
        {
          courseData?.map((course: TCourse, index: number)=> <div key={course?._id || index}>
            <p> title: {course.title}</p>
            <Image width={600} height={600} src={course.thumbnail || 'placeholder.png'} alt="course thumbnail" ></Image>
          </div>)
        }
      </div>
    </div>
  );
}
