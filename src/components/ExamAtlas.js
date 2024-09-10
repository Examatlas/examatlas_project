import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { CiStreamOn } from "react-icons/ci";
import { TiSortAlphabetically } from "react-icons/ti";

const ExamAtlas = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-4 my-8 ">
        <div className="w-[100%] lg:w-[50%] lg:h-[720px]">
          <h1 className=" text-2xl md:text-4xl font-semibold md:pl-56 lg:pl-20 xl:pl-56 md:pt-48">
            Why ExamAtlas ?
          </h1>
          <p className="md:pl-56 lg:pl-20 lg:w-[25rem] xl:w-[40rem] xl:pl-56 pt-5 font-medium text-lg">
            With 1.8+ Crore Students and One of the best Selection rate in India
            amongst online learning platforms, you can surely rely on us to
            excel.
          </p>
          <button className="p-3 rounded-lg md:ml-56 lg:ml-20 xl:ml-56 my-5 font-semibold hover:bg-green-400 bg-green-500 text-white">
            Get Started For Free
          </button>
        </div>

        <div className="w-[100%] lg:w-[50%] h-auto md:h-[800px] flex items-center flex-col">
          <div className="flex flex-col sm:flex-row ">
            <div className="rounded-lg bg-green-100 w-[100%] md:w-72 md:h-72 md:mt-16 py-4 px-4 my-2 ">
              <div className="flex flex-row md:flex-col items-center">
                <button className=" rounded-lg bg-green-500 m-2 p-4 ">
                  <FaChalkboardTeacher className="text-4xl text-white" />
                </button>
                <p className="pl-4 font-semibold md:pt-9">
                  Learn from the Best
                </p>
              </div>

              <p className="pl-4 md:pt-5">
                Learn from the masters of the subject, in the most engaging yet
                simplified ways
              </p>
            </div>
            <div className="rounded-lg bg-pink-100 py-4 px-4 md:w-72 md:h-72 md:mt-32 md:ml-7">
              <div className="flex flex-row items-center">
                <button className=" rounded-lg bg-pink-400 m-2 p-4">
                  <CiStreamOn className="text-4xl text-white" />
                </button>
                <p className="pl-4 font-semibold ">
                  Live Tests for Real Exam Experience
                </p>
              </div>
              <p className="pl-4 md:pt-3">
                Feel the thrill of a real exam. Improve your time & pressure
                management skills
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:absolute">
            <div className="rounded-lg bg-yellow-100 py-2 px-4 md:w-72 md:h-72 relative md:top-80 md:mt-12 my-2">
              <div className="flex flex-row md:flex-col items-center">
                <button className=" rounded-lg bg-yellow-400 m-2 p-4">
                  <IoMdStats className="text-4xl text-white" />
                </button>
                <p className="pl-4 font-semibold md:pt-6">
                  Detailed Score Analysis
                </p>
              </div>
              <p className="pl-4 md:pt-3">
                Get a detailed breakdown of your strengths & weaknesses and
                discover insights to improve your score
              </p>
            </div>
            <div className="rounded-lg bg-purple-200 py-2 px-4 md:w-72 md:h-64 md:mb-16 md:ml-7 relative md:top-96 md:mt-12">
              <div className="flex flex-row md:flex-col items-center">
                <button className=" rounded-lg bg-purple-400 m-2 p-4">
                  <TiSortAlphabetically className="text-4xl text-white" />
                </button>
                <p className="pl-4 font-semibold md:pt-4">
                  Multilingual: 8 Languages
                </p>
              </div>

              <p className="pl-4 md:pt-3">
                Learn in the language you are most comfortable with. Choose from
                any of our 8 languages
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-5 md:mx-[10rem] flex flex-col md:flex-row ">
        <div>
          <p className="text-2xl font-semibold mt-3">
            Don't just take our word for it,
            <br />
            our results speak for themselves.
          </p>
          <p className="pt-3">
            We are proud to have partnered with lakhs of students in securing
            their dream job.
          </p>
        </div>
        <div>
          <img
            src="https://testbook.com/assets/img/selections/trophy.svg"
            className=" md:ml-48"
          />
        </div>
      </div>
{/* md:w-[1050px] */}
      <div className=" p-1 w-[90%] mx-auto  md:h-[240px]  mb-9 rounded-lg  flex  flex-col md:flex-row">
        <div className=" w-[90%] mx-auto md:w-52 rounded-lg bg-yellow-100 h-56 flex justify-center items-center shadow-lg">
          <img
            src="https://testbook.com/assets/img/selections/leaf-left.svg"
            className="w-14 m-3"
          />
          <span className="text-2xl font-semibold pt-20">
            53567 <br />
            Total
          </span>
          <img
            src="https://testbook.com/assets/img/selections/leaf-right.svg"
            className="w-14 m-5"
          />
        </div>

        <div className="w-[90%] mx-auto md:w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col justify-center items-center shadow-lg">
          <img
            src="https://cdn.testbook.com/images/alpha/moduleNotes_AMP4D2_1627395795_tb.png"
            className="w-20 h-16 "
          />
          <p className="mt-8 text-2xl font-semibold">19054</p>
          <p className="">Selection in SSC</p>
        </div>
        <div className=" w-[90%] mx-auto md:w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col justify-center items-center shadow-lg">
          <img
            src="https://cdn.testbook.com/images/alpha/moduleNotes_MFG3EY_1627395814_tb.png"
            className="w-20 h-16 "
          />
          <p className="mt-8 text-2xl font-semibold">18921</p>
          <p className="text-center">Selection in Banking</p>
        </div>
        <div className=" w-[90%] mx-auto md:w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col justify-center items-center shadow-lg">
          <img
            src="https://cdn.testbook.com/images/alpha/moduleNotes_Y4B23U_1627395831_tb.png"
            className="w-20 h-16"
          />
          <p className="mt-8 text-2xl font-semibold">7087</p>
          <p className="text-center">Selection in Railways</p>
        </div>
        <div className=" w-[90%] mx-auto md:w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col justify-center items-center shadow-lg">
          <img
            src="https://cdn.testbook.com/images/alpha/moduleNotes_XVDKKO_1636719922_tb.png"
            className="w-20 h-16 "
          />
          <p className="mt-8 text-2xl font-semibold">8505</p>
          <p className=" text-center">Selection in other govt. exams</p>
        </div>
      </div>
    </>
  );
};

export default ExamAtlas;
