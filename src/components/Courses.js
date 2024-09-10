import React, { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import upsc from "../images/upsc.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import CourseBox from "./courses/CourseBox";

const Courses = () => {
  const courses = [
    "SSC CGL 2024 Crash Course",
    "UGC NET/SET (Hinglish)",
    "SSC CGL (Guaranteed placement program) 2025",
    "All Railway Exams Marathi",
    "RRB NTPC",
    "SSC MTS",
    "Banking and Insurance Super Pack",
    "Nirnay IAS 2025-Officers Batch - 2 (Hinglish)",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleButtons = 5;
  const buttonWidth = 220;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < courses.length - visibleButtons ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div>
      <p className="text-2xl my-4 font-semibold mx-4 md:mx-44">
        Top Courses and Complete Study Material Included
      </p>
      <div className="flex items-center justify-center">
        <button onClick={prevSlide} className="mr-3 mb-10 text-3xl font-bold ">
          <IoArrowBackCircle />
        </button>
        <div
          className="overflow-hidden"
          style={{ width: `${buttonWidth * visibleButtons}px` }}
        >
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * buttonWidth}px)`,
              width: `${courses.length * buttonWidth}px`,
            }}
          >
            {courses.map((course, index) => (
              <button
                key={index}
                className={`border ${
                  index >= currentIndex && index < currentIndex + visibleButtons
                    ? "border-gray-600  text-gray-600 hover:text-blue-400 hover:border-blue-400"
                    : "border-black "
                } rounded-full p-1 mr-3 mb-10`}
                style={{ minWidth: `${buttonWidth - 12}px` }}
              >
                {course}
              </button>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="ml-3 mb-10 text-3xl font-bold">
          <IoArrowForwardCircleSharp />
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center mx-10 mt-1 gap-x-8 md:mx-[6rem] ">
        {/* Box 1 */}
        {/* <div className="w-[500px] mb-4 rounded-lg flex  transform hover:scale-105 transition-transform duration-300">
                    <div className="w-[50%]">
                        <button className="bg-red-600 text-white rounded-md p-1 mb-1 flex items-center space-x-2">
                            <CiStreamOn className="text-xl" />
                            <span className="text-lg">Live Classes</span>
                        </button>
                        <img
                            src={upsc}
                            alt="Description of image"
                            // className="w-[280px] h-[150px] rounded-lg"
                            className="w-[100%] h-[150px] rounded-lg"
                        />
                    </div>
                    <div className="pt-11 pl-4 w-[50%]">
                        <span className="font-semibold">SSC CGL 2024: 30 Days - 30 <br /> Mock Test Practice Batch</span><br />
                        By: <span className="font-semibold text-gray-800">ExamAtlas & Team</span><br />
                        <span className="font-semibold text-gray-600">110 Live Classes &nbsp; Hinglish</span>
                    </div>
                </div> */}
        <CourseBox
          img={upsc}
          live={CiStreamOn}
          heading="SSC CGL 2024: 30 Days - 30  Mock Test Practice Batch"
          by="ExamAtlas & Team"
          medium={"110 Live Classes Hinglish"}
        />

        {/* Box 2 */}
        {/* <div className="w-[500px] mb-11 rounded-lg flex  transform hover:scale-105 transition-transform duration-300">
          <div>
            <img
              src={img2}
              alt="Description of image"
              className="w-[280px] h-[150px] rounded-lg mt-10"
            />
          </div>
          <div className="pt-11 pl-4">
            <span className="font-semibold">SSC CGL 2024: Top 1000 MCQ</span>
            <br />
            <br />
            By:{" "}
            <span className="font-semibold text-gray-800">
              ExamAtlas & Team
            </span>
            <br />
            <br />
            <span className="font-semibold text-gray-600">
              1000 MCQS &nbsp; Hinglish
            </span>
          </div>
        </div> */}
        <CourseBox
          img={img2}
          // live={CiStreamOn}
          heading="SSC CGL 2024: Top 1000 MCQ"
          by=" ExamAtlas & Team"
          medium={`1000 MCQS Hinglish`}
        />

        {/* Box 3 */}
        {/* <div className="w-[500px] mb-11 rounded-lg flex  transform hover:scale-105 transition-transform duration-300 ">
          <div>
            <button className="bg-red-600 text-white rounded-md p-1 mb-1 flex items-center space-x-2">
              <CiStreamOn className="text-xl" />
              <span className="text-lg">Live Classes</span>
            </button>
            <img
              src={img3}
              alt="Description of image"
              className="w-[280px] h-[150px] rounded-lg"
            />
          </div>
          <div className="pt-11 pl-4">
            <span className="font-semibold">
              Current Affairs Master <br /> Course 2024
            </span>
            <br />
            <br />
            By:{" "}
            <span className="font-semibold text-gray-800">Gaurav Maurya</span>
            <br />
            <br />
            <span className="font-semibold text-gray-600">
              144 Live Classes &nbsp; Hinglish
            </span>
          </div>
        </div> */}
        <CourseBox
          img={img3}
          live={CiStreamOn}
          heading="Current Affairs Master Course 2024"
          by="Gaurav Maurya"
          medium={`144 Live Classes Hinglish`}
        />

        {/* Box 4 */}
        {/* <div className="w-[500px] mb-11 rounded-lg flex  transform hover:scale-105 transition-transform duration-300">
          <div>
            <button className="bg-purple-600 text-white rounded-md p-1 mb-1 flex items-center space-x-2">
              <span>VOD</span>
            </button>
            <img
              src={img4}
              alt="Description of image"
              className="w-[280px] h-[155px] rounded-lg"
            />
          </div>
          <div className="pt-11 pl-4">
            <span className="font-semibold">
              SSC CGL 2024: General
              <br />
              Intelligence & Reasoning{" "}
            </span>
            <br />
            <br />
            By:{" "}
            <span className="font-semibold text-gray-800">
              ExamAtlas & Team
            </span>
            <br />
            <br />
            <span className="font-semibold text-gray-600">
              45 Classes &nbsp; Hinglish
            </span>
          </div>
        </div> */}

        <CourseBox
          img={img4}
          Vod={CiStreamOn}
          heading="SSC CGL 2024: General Intelligence & Reasoning"
          by="ExamAtlas & Team"
          medium={` 45 Classes Hinglish`}
        />
      </div>

      <div className=" w-fit mx-auto my-5">
        <button className="bg-sky-400 p-3 rounded-md text-white hover:bg-sky-500 ">
          Explore SSC CGL 2024 Crash course Supercoaching
        </button>
      </div>
    </div>
  );
};

export default Courses;
