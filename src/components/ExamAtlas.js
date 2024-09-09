import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { CiStreamOn } from "react-icons/ci";
import { TiSortAlphabetically } from "react-icons/ti";

const ExamAtlas = () => {
    return (
        <>
            <div className="flex  ">
                <div className="w-[800px] h-[720px]">
                    <h1 className="text-4xl font-semibold pl-56 pt-48">Why ExamAtlas ?</h1>
                    <p className="pl-56 pt-5 font-medium text-lg">
                        With 1.8+ Crore Students and One of the best Selection <br /> rate in
                        India amongst online learning platforms, <br /> you can surely rely on us to excel.
                    </p>
                    <button className="p-3 rounded-lg ml-56 mt-5 font-semibold hover:bg-green-400 bg-green-500 text-white">
                        Get Started For Free
                    </button>
                </div>

                <div className="w-[800px] h-[700px] ml-5 flex flex-col">

                    <div className="flex ">
                        <div className="rounded-lg bg-green-100 w-72 h-72 mt-16">
                            <button className=" rounded-lg bg-green-500 p-4  m-5"><FaChalkboardTeacher className="text-4xl text-white" /></button>
                            <p className="pl-4 font-semibold pt-9">Learn from the Best</p>
                            <p className="pl-4 pt-5">Learn from the masters of the subject, in the most engaging yet simplified ways</p>
                        </div>
                        <div className="rounded-lg bg-pink-100 w-72 h-72 mt-32 ml-7">
                            <button className=" rounded-lg bg-pink-400 p-4  m-5"><CiStreamOn className="text-4xl text-white" /></button>
                            <p className="pl-4 font-semibold pt-5">Live Tests for Real Exam Experience</p>
                            <p className="pl-4 pt-3">Feel the thrill of a real exam. Improve your time & pressure management skills</p>
                        </div>
                    </div>

                    <div className="flex absolute">
                        <div className="rounded-lg bg-yellow-100 w-72 h-72 relative top-80 mt-12">
                            <button className=" rounded-lg bg-yellow-400 p-4  m-5"><IoMdStats className="text-4xl text-white" /></button>
                            <p className="pl-4 font-semibold pt-6">Detailed Score Analysis</p>
                            <p className="pl-4 pt-3">Get a detailed breakdown of your strengths & weaknesses and discover insights to improve your score</p>
                        </div>
                        <div className="rounded-lg bg-purple-200 w-72 h-64 mb-16 ml-7 relative top-96 mt-12">
                            <button className=" rounded-lg bg-purple-400 p-4  m-5">< TiSortAlphabetically className="text-4xl text-white" /></button>
                            <p className="pl-4 font-semibold pt-4">Multilingual: 8 Languages</p>
                            <p className="pl-4 pt-3">Learn in the language you are most comfortable with. Choose from any of our 8 languages</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pl-64 flex ">
                <div>
                    <p className="text-2xl font-semibold mt-3">
                        Don't just take our word for it,<br />
                        our results speak for themselves.
                    </p>
                    <p className="pt-3">We are proud to have partnered with lakhs of students in securing their dream job.</p>
                </div>
                <div>
                    <img src="https://testbook.com/assets/img/selections/trophy.svg" className="ml-48" />
                </div>
            </div>


            <div className="border border-gray-100  p-1 w-[1050px] h-[240px] ml-64 mb-9 rounded-lg  flex">
                <div className=" w-64 m-1 rounded-lg bg-yellow-100 h-56 flex shadow-lg">
                    <img src="https://testbook.com/assets/img/selections/leaf-left.svg" className="w-14 m-3" />
                    <span className="text-2xl font-semibold pt-20">53567 <br/>
                    Total</span>
                    <img src="https://testbook.com/assets/img/selections/leaf-right.svg" className="w-14 m-5"/>
                </div>

                <div className=" w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col shadow-lg">
                    <img src="https://cdn.testbook.com/images/alpha/moduleNotes_AMP4D2_1627395795_tb.png" className="w-20 h-16 ml-14 mt-8"/>
                    <p className="mt-8 pl-16 text-2xl font-semibold">19054</p>
                    <p className="text-center">Selection in SSC</p>
                </div>
                <div className=" w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col shadow-lg">
                <img src="https://cdn.testbook.com/images/alpha/moduleNotes_MFG3EY_1627395814_tb.png" className="w-20 h-16 ml-14 mt-8"/>
                    <p className="mt-8 pl-16 text-2xl font-semibold">18921</p>
                    <p className="text-center">Selection in Banking</p>
                </div>
                <div className=" w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col shadow-lg">
                <img src="https://cdn.testbook.com/images/alpha/moduleNotes_Y4B23U_1627395831_tb.png" className="w-20 h-16 ml-14 mt-8"/>
                    <p className="mt-8 pl-16 text-2xl font-semibold">7087</p>
                    <p className="text-center">Selection in Railways</p>
                </div>
                <div className=" w-52 m-1 rounded-lg border border-gray-100 h-56 flex flex-col shadow-lg">
                <img src="https://cdn.testbook.com/images/alpha/moduleNotes_XVDKKO_1636719922_tb.png" className="w-20 h-16 ml-14 mt-8"/>
                    <p className="mt-8 pl-16 text-2xl font-semibold">8505</p>
                    <p className=" text-center">Selection in other govt. exams</p>
                </div>
            </div>

        </>
    );
};

export default ExamAtlas;
