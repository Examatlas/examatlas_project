import React from 'react';
//images
// import upsc from "../../images/upsc.png"
//icons
import { CiStreamOn } from "react-icons/ci";

const CourseBox = ({ img, heading, live, by, medium,Vod }) => {
    return (
        <div className="w-[500px] mb-4 rounded-lg flex flex-col md:flex-row transform hover:scale-105 transition-transform duration-300 p-2">
            <div className="w-full md:w-1/2 relative">
                {
                    live &&
                    <button className=" bg-red-600 text-white rounded-md p-1 mb-1 flex items-center space-x-2">
                        <CiStreamOn className="text-xl" />
                        <span className="text-lg">Live Classes</span>
                    </button>
                }
                {
                    Vod&& <button className="bg-purple-600 text-white rounded-md p-1 mb-1 flex items-center space-x-2">
                     <span>VOD</span>
                   </button>
                }

                <img
                    src={img}
                    alt="Description of image"
                    // className={`${!live&& !Vod?"mt-11":""} w-[280px] h-[155px] rounded-lg`}
                    className={`${!live&& !Vod?"mt-11":""} w-[280px] h-[150px] rounded-lg`}
                />
            </div>
            <div className="w-full md:w-1/2 px-2 my-2 md:mt-11  ">
                <span className="font-semibold">{heading}</span><br /><br />
                By:{" "} <span className="font-semibold text-gray-800 ">{by}</span><br /><br />
                <span className="font-semibold text-gray-600">{medium}</span>
            </div>
        </div>
    );
}

export default CourseBox;
