import React from "react";
import RecentBlog from "./RecentBlog";
const Blog = () => {
    const data = [
        {
            id: 1,
            headline: "RBI Grade B : Master Time Management .",
            date: "Aug 6, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/08/WVfGiOlZgYQ-SD.jpg"
        },
        {
            id: 2,
            headline: "Top Resources for RBI Grade B 2024 Exam.",
            date: "Aug 10, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/05/Learn-how-to-train-your-mind-to-clear-RBI-Grade-B-2024.webp"
        },
        {
            id: 3,
            headline: "Tips to Crack RBI Grade B in First Attempt",
            date: "Aug 15, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/05/Key-strategy-to-cover-govt.-schemes-for-RBI-Grade-B-2024-1080x675.png"
        },
        {
            id: 4,
            headline: "Best Resources for RBI Grade B 2024 Exam",
            date: "Aug 20, 2024",
            image: "https://anujjindal.in/wp-content/uploads/2024/05/Step-by-step-guide-to-boost-your-GA-prep-of-RBI-Grade-B.jpg"
        }
    ];



    return (
        <>
            <div className="flex mt-12">

                <div className=" w-[850px] pl-44">
                    <h1 className="text-3xl text-blue-700 font-extrabold">Latest Blogs</h1>
                    <img src="https://anujjindal.in/wp-content/uploads/2024/08/WVfGiOlZgYQ-SD.jpg" className="rounded-lg mt-10 w-[900px] h-[379px] object-cover" />
                    <p className="mt-7 text-gray-800 text-xl font-extrabold">How to cover current affairs for RBI Grade B 2024</p>
                    <p className="mt-5 text-gray-700 font-semibold">Aug 6, 2024 | RBI Grade B</p>
                </div>

                <div className="flex flex-col pl-16">
                    <h1 className="text-3xl text-blue-700 font-extrabold ">Trending Blog</h1>


                    {data.map((item,index) => (
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
                                    className="w-[200px] object-cover h-[112px] ml-3 rounded-lg"
                                />
                            </div>
                            {index  < data.length -1 && (
                                 <hr className="w-[520px] border-gray-300 mt-4" />
                            )}
                        </div>
                    ))}
                </div>
                
            </div>
            <hr className="w-[1290px] border-blue-900 border-t-2 mt-12 mb-12 ml-40" />
            <RecentBlog/>
        </>
    )
}
export default Blog;
