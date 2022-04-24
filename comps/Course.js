import React, { useState } from "react";
import {
  MdWeb,
  MdOutlineDesignServices,
  MdChatBubbleOutline,
} from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { SiAzuredevops } from "react-icons/si";
import Link from "next/link";

function Course() {
  return (
    <div className="flex-col justify-center items-center my-20">
      <p className="text-blue-500 uppercase text-center">Services</p>
      <h2 className="text-5xl  text-center">
        Our Best<span className="font-bold"> Courses</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:mx-0 mx-10 md:grid-cols-3 gap-5 my-20">
          <Link
            href={{
              pathname: "/CourseLayout",
              query: { courseName: "Computer Science" },
            }}
          >
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-violet-500">
              <MdWeb className="text-4xl text-gray-600 group-hover:text-white" />
              <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
                Computer Science
              </h1>
            </div>
          </Link>

          <Link
            href={{
              pathname: "/CourseLayout",
              query: { courseName: "Mobile App Development" },
            }}
          >
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-violet-500">
              <AiOutlineAppstoreAdd className="text-4xl text-gray-600 group-hover:text-white" />
              <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
                Mobile App Development
              </h1>
            </div>
          </Link>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-violet-500">
            <MdOutlineDesignServices className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              UI/UX Design
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-violet-500">
            <MdChatBubbleOutline className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              AI /Machine Learning
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-violet-500">
            <GiGrowth className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Data Science
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-violet-500">
            <SiAzuredevops className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Devops
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
