import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config";
import RecentBlog from "./RecentBlog";

const Blog = () => {
  const [blogData, setBlogData] = useState([]); // Initialize as an empty array

  // Fetch all blogs
  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/blog/getAllBlogs`);
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
      {blogData.length > 0 && (
        <div className="flex flex-col xl:flex-row mt-28">
          <div className="lg:w-[850px] px-2 xl:pl-44">
            <h1 className="text-3xl text-blue-700 font-extrabold">Latest Blogs</h1>
            <img
            //   src={blogData[0].image}
              src="https://anujjindal.in/wp-content/uploads/2024/08/WVfGiOlZgYQ-SD.jpg"
              className="rounded-lg mt-10 lg:w-[900px] h-[5rem] xl:h-[380px] object-cover"
              alt="Latest Blog"
            />
            <p className="mt-7 text-gray-800 text-xl font-extrabold">{blogData[0].title}</p>
            <p className="mt-5 text-gray-700 font-semibold">{blogData[0].keyword}</p>
          </div>

          <div className="flex flex-col my-4 px-4 md:pl-16">
            <h1 className="text-xl md:text-3xl text-blue-700 font-extrabold">Trending Blogs</h1>

            {blogData.slice(1).map((item, index) => (
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
                    className="w-[200px] object-cover h-[112px] ml-3 rounded-lg"
                    alt="Trending Blog"
                  />
                </div>
                {index < blogData.length - 2 && (
                  <hr className="lg:w-[520px] border-gray-300 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <hr className="w-[90%] mx-auto border-blue-900 border-t-2 mt-12 mb-12" />
      <RecentBlog />
    </>
  );
};

export default Blog;
