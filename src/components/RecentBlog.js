import React,{useState,useEffect} from "react";
import axios from "axios";
import API_BASE_URL from "../config";
import api from "../Api/Api_config";

const RecentBlog = () => {
    const [blogData, setBlogData] = useState([]);
  
      // Fetch all blogs
  const fetchAllBlogs = async () => {
    try {
      const response = await api.get("/api/blog/getAllBlogs");
      setBlogData(response?.data?.blogs || []); // Ensure that data is set as an array
    } catch (error) {
      console.log("Error when fetching blogs", error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);


    return (
        <>
            <div className="flex flex-col xl:flex-row mb-20">
                <div className=" lg:w-[700px] mx-4 lg:ml-40">
                    <h1 className=" text-xl md:text-3xl text-blue-700 font-extrabold ">Recent Blog</h1>

                    {blogData.map((item, index) => (
                        <div key={index} className="pt-7">
                            <div className="flex">
                                <p className="text-gray-800 font-bold">
                                    {item.title}
                                    <br />
                                    <br />
                                    <span className="text-gray-600 font-normal">{item.keyword}</span>
                                </p>
                                <img
                                    src={item.image}
                                    className="w-[200px] object-cover h-[112px] ml-9 rounded-lg"
                                />
                            </div>
                            {index < item.length - 1 && (
                                <hr className="w-[90%] mx-auto xl:w-[720px] border-gray-300 mt-4" />
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-2xl font-semibold px-4 lg:pl-20">Discover more of what you are preparing for</p>
                    <div className=" mx-auto px-7 pt-14 md:pl-20 py-3 ">
                        <button className="border border-green-500 p-3 rounded-lg w-40 mr-4 hover:bg-green-100 text-green-600 font-semibold">RBI Grade B</button>
                        <button className="border border-green-500 p-3 rounded-lg w-40 hover:bg-green-100 text-green-600 font-semibold">SEBI Grade B</button><br/>
                        <button className="border border-green-500 p-3 rounded-lg w-40 mt-6 mr-4 hover:bg-green-100 text-green-600 font-semibold">NABARD Grade A</button>
                        <button className="border border-green-500 p-3 rounded-lg w-40 hover:bg-green-100 text-green-600 font-semibold">UGC NET</button><br/>
                        <button className="border border-green-500 p-3 rounded-lg w-48 mt-5 ml-20 hover:bg-green-100 text-green-600 font-semibold">UPSE CSE</button>
                    </div>
                </div>
            </div>
         
        </>
    )
}
export default RecentBlog;

