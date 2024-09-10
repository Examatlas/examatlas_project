import React from "react";
import { MdArrowRight } from "react-icons/md";

const MobileApp = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row justify-between mt-24 mb-20 relative">
            <div className="border overflow-hidden border-blue-500 bg-blue-600 w-[95%] h-[40rem] md:h-[400px] mx-auto text-white rounded-lg relative">
                <div className="flex flex-col px-4 md:pl-16 pt-16">
                    <p className="text-2xl font-semibold">
                        Start your learning journey now!
                    </p>

                    <div className="flex pt-4 space-x-1 md:space-x-4">
                        <p className="flex items-center">
                            Learn <MdArrowRight className="ml-1 text-white text-3xl" />
                        </p>
                        <p className="flex items-center">
                            Practice <MdArrowRight className="ml-1 text-white text-3xl" />
                        </p>
                        <p className="flex items-center">
                            Improve <MdArrowRight className="ml-1 text-white text-3xl" />
                        </p>
                        <p className="flex items-center">
                            Succeed 
                            {/* <MdArrowRight className="ml-1 text-white text-3xl" /> */}
                        </p>
                    </div>

                    <div className="flex items-center justify-center md:w-[40%] mt-5 space-x-4">
                        <img src="https://testbook.com/angular/assets/img/template-img/appstore.svg" className=" w-28" />
                        <img src="https://testbook.com/angular/assets/img/template-img/playstore.svg" className="w-28" />
                    </div>

                    <button className="ml-16 font-semibold w-40 rounded-lg bg-green-500 hover:bg-green-400 mt-6 py-2">
                        Get Started
                    </button>
                </div>

              
                <div className="absolute bottom-[-40%] left-2 overflow-y-hidden md:left-[40rem] md:top-[50px]">
                    <img src="https://testbook.com/assets/img/index/web-phone.png" className="h-[520px] w-[450px]" />
                </div>
            </div>
        </div>
        </>
    )
}

export default MobileApp;
