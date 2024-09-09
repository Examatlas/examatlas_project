import React from "react";
import { MdArrowRight } from "react-icons/md";

const MobileApp = () => {
    return (
        <>
        <div className="flex absolute">
            <div className="border border-blue-500 bg-blue-600 w-[1600px] h-[400px]  mt-24 ml-64 mb-20 text-white rounded-lg">
                <div className="pl-36 pt-24">
                    <p className="text-2xl font-semibold">
                        Start your learning journey now!
                    </p>

                    <div className="flex pt-4 space-x-4">
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
                            Succeed <MdArrowRight className="ml-1 text-white text-3xl" />
                        </p>
                    </div>
                </div>


                <div className="flex mt-5 ml-48">
                    <img src="https://testbook.com/angular/assets/img/template-img/appstore.svg" className="mr-5" />
                    <img src="https://testbook.com/angular/assets/img/template-img/playstore.svg" />
                </div>
                <button className="ml-64 font-semibold w-32 rounded-lg bg-green-500 hover:bg-green-400 mt-6 p-2">Get Started</button>
            </div>

            <div>
                <img src="https://testbook.com/assets/img/index/web-phone.png" className="relative right-[520px] top-3 h-[600px] w-[800px]"/>
            </div>


            </div>
        </>
    )
}
export default MobileApp;