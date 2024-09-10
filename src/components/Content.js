import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiHotspotFill } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { IoTimer } from "react-icons/io5";
import { GrDocumentTime } from "react-icons/gr";

const Content = () => {
  return (
    <div className="container mx-auto ">
      <div className="border border-gray-100 px-10 py-2 font-semibold text-2xl text-center">
        What you will get with Supercoaching
      </div>

      <div className="flex flex-wrap justify-center mt-10 w-full">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-blue-100 font-semibold text-center rounded-md p-9 mx-2 my-3 flex justify-center">
          <FaChalkboardTeacher className="text-3xl text-pink-400 mr-3 " />
          Courses by Super Teachers
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-blue-100 font-semibold text-center rounded-md p-9 mx-2 my-3 flex justify-center">
          <RiHotspotFill className="text-3xl text-pink-400 mr-3 " />
          Daily Live Classes by Experts
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-blue-100 font-semibold text-center rounded-md p-9 mx-2 my-3 flex justify-center">
          <FaBookReader className="text-3xl text-pink-400 mr-3 " />
          Complete Study Material
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-blue-100 font-semibold text-center rounded-md p-9 mx-2 my-3 flex justify-center">
          <RxLapTimer className="text-3xl text-pink-400 mr-3 " />
          Practice Questions
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-blue-100 font-semibold text-center rounded-md p-9 mx-2 my-3 flex justify-center">
          <IoTimer className="text-3xl text-pink-400 mr-3 " />
          Quick Doubt Resolution by Experts
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  bg-blue-100 font-semibold text-center rounded-md p-9 mx-2 my-3 flex justify-center">
          <GrDocumentTime className="text-3xl text-pink-400 mr-3 " />
          Access to 50,000+ Mock Test
        </div>
      </div>

      <div className="w-fit mx-auto">
        <button className="bg-sky-400 hover:bg-sky-500  rounded-md p-4 text-white mx-auto mt-8 mb-7 font-semibold">
          Explore Supercoaching
        </button>
      </div>
    </div>
  );
};

export default Content;
