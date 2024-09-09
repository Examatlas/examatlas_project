import React, { useState } from "react";
import { IoArrowForwardCircleSharp, IoArrowBackCircle } from "react-icons/io5";

const LiveClasses = () => {
    const courses = [
        "Teaching Exams",
        "State Govt. Exams",
        "SSC Exams",
        "Banking Exams",
        "Civil Services Exams",
        "Regulatory Body Exams",
        "Judiciary Exams",
        "Railway Exams",
        "Defence Exams",
        "Railway",
        "Police Exams",
        "Engeneering Recuirtment Exams",
        "ACCA"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleButtons = 5;
    const buttonWidth = 220;

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : 0
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < courses.length - visibleButtons ? prevIndex + 1 : prevIndex
        );
    };

    return (
        <>
            <div className="text-2xl ml-48 mb-8 mt-5 font-semibold flex items-center">
                <button className="bg-green-500 p-1 rounded-lg text-white">FREE</button>
                <span className="pt-1 pl-2">Live Classes</span>
            </div>

          
            <div className="flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="mr-3 mb-4 text-3xl font-bold"
                >
                    <IoArrowBackCircle />
                </button>

                <div className="overflow-hidden" style={{ width: `${buttonWidth * visibleButtons}px` }}>
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
                                className={`border ${index >= currentIndex && index < currentIndex + visibleButtons
                                    ? 'border-gray-600 text-gray-600 hover:text-blue-400 hover:border-blue-400'
                                    : 'border-black'
                                    } rounded-full  mx-2 mb-4`}
                                style={{ minWidth: `${buttonWidth - 12}px` }}
                            >
                                {course}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="ml-3 mb-4 text-3xl font-bold"
                >
                    <IoArrowForwardCircleSharp />
                </button>
            </div>
        </>
    );
}

export default LiveClasses;
