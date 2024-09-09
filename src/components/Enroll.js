import React from "react";
import { FaTrophy } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { TiSortAlphabetically } from "react-icons/ti";

const Enroll = () =>{
    return(
        <>
        <div className="bg-gradient-to-t from-sky-100 to-white h-[550px] text-black mt-80 flex">
            <div className=" w-[750px]">
            <img src="https://testbook.com/assets/img/index/explore-pass__illust.svg" alt="Description of the image"
            className="mt-24 ml-72 "
            />
            </div>

            <div className=" w-[750px] ml-14">
              <p className="mt-14  text-2xl font-semibold">Enroll in Test Series for 670+ exams with</p>
              <p className="text-2xl font-bold font-mono  mt-3">ExamAtlas</p>
              <p className="mt-9">Get unlimited access to the most relevant Mock Tests, on India's <br/> Structured Online Test series platform</p>
              <p className="mt-6 font-semibold">What you get with Testbook Pass</p>
              
              <div className="flex">
              <p className="mt-12 flex"><FaTrophy className="text-2xl text-yellow-400 mr-3"/>All India Rank</p>
              <p className="mt-12 flex ml-24"><FaClipboardCheck className="text-2xl text-purple-400 mr-3"/>Latest Exam Patterns</p>
              </div>

              <div className="flex">
              <p className="mt-7 flex"><FcSalesPerformance  className="text-2xl text-yellow-400 mr-3"/>In Depth Performance <br/> Analysis</p>
              <p className="mt-7 flex ml-10"><TiSortAlphabetically  className="text-2xl text-green-500 mr-3"/>Multi-lingual Mock Tests</p>
              </div>
              <button className="border border-sky-500 bg-sky-500 rounded-lg p-2 hover:bg-sky-400 w-56 mt-6 text-white">Explore ExamAtlas Pass</button>
            </div>
        </div>

       
        </>
    )
}
export default Enroll;

