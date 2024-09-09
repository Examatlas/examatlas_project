import React from "react";
import Footer from "./Footer";
const RecentBlog = () => {
    const data = [

        {
            id: 6,
            headline: "Common Mistakes to Avoid for a Successful SEBI Grade A 2024 Exam",
            date: "Apr 3, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/05/Step-by-step-guide-to-boost-your-GA-prep-of-RBI-Grade-B.jpg"
        },
        {
            id: 7,
            headline: "Utilizing ChatGPT to Enhance Your Preparation for RBI 2024 Exam",
            date: "Mar 29, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/04/5-Common-Mistakes-to-avoid-for-SEBI.jpg"
        },
        {
            id: 8,
            headline: "Insightful Preparation Tips to Excel in SEBI Grade A 2024 Exam",
            date: "Mar 22, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/03/5-Ways-to-use-ChatGPT-to-speed-up-RBI-2024-preparation.jpg"
        },
        {
            id: 9,
            headline: "How to Overcome Exam Failure and Achieve Success in RBI Grade B",
            date: "Mar 1, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/03/Insightful-Prep-Tips-to-check-for-SEBI-Grade-A-exam-2024.jpg"
        },
        {
            id: 10,
            headline: "Comparing UPSC CSE and RBI Exams: Making the Right Career Choice",
            date: "Feb 26, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/02/The-right-career-choice-Exploring-Similarities-in-UPSC-CSE-and-RBI-Exam-1080x675.png"
        }
    ];

    return (
        <>
            <div className="flex">
                <div className=" w-[700px] ml-40">
                    <h1 className="text-3xl text-blue-700 font-extrabold ">Recent Blog</h1>

                    {data.map((item, index) => (
                        <div key={item.id} className="pt-7">
                            <div className="flex">
                                <p className="text-gray-800 font-bold">
                                    {item.headline}
                                    <br />
                                    <br />
                                    <span className="text-gray-600 font-normal">{item.date}</span>
                                </p>
                                <img
                                    src={item.image}
                                    className="w-[200px] object-cover h-[112px] ml-9 rounded-lg"
                                />
                            </div>
                            {index < data.length - 1 && (
                                <hr className="w-[720px] border-gray-300 mt-4" />
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    dfsdfdf
                </div>
            </div>
            <Footer/>

        </>
    )
}
export default RecentBlog;

