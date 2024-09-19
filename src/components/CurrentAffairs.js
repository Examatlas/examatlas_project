import React, { useEffect, useState } from "react";
import RecentCurrentAffairs from "./RecentCurrentAffairs";
import API_BASE_URL from "../config";
import axios from "axios";

const CurrentAffairs = () => {
  const [CurrentAffairData, setCurrentAffairData] = useState([]);

  const fetchAllCurrentAffairs = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/currentAffair/getAllCA`);
      setCurrentAffairData(response?.data?.currentAffairs);
    } catch (error) {
      console.log("Error when fetching currentAffairs", error);
    }
  };

  useEffect(() => {
    fetchAllCurrentAffairs();
  }, []);

  return (
    <>
      {CurrentAffairData.length > 0 && (
        <div className="flex flex-col xl:flex-row mt-28">
          <div className="lg:w-[850px] px-4 lg:pl-36">
            <h1 className="text-xl md:text-3xl text-blue-700 font-extrabold">
              Latest Current Affairs
            </h1>
            <img
              src={CurrentAffairData[0].image} 
            // src="https://anujjindal.in/wp-content/uploads/2024/08/WVfGiOlZgYQ-SD.jpg"

              className="rounded-lg mt-10 w-[900px] h-[380px] object-cover"
              alt="Current Affair"
            />
            <p className="mt-7 text-gray-800 text-xl font-extrabold">
              {CurrentAffairData[0].title} {/* Display the title of the first current affair */}
            </p>
            <p className="mt-5 text-gray-700 font-semibold">
              {CurrentAffairData[0].date}  {CurrentAffairData[0].keyword} {/* Display date and keyword */}
            </p>
          </div>

          <div className="flex flex-col px-6 my-4 md:px-16">
            <h1 className="text-xl md:text-3xl text-blue-700 font-extrabold">
              Trending Current Affairs
            </h1>

            {CurrentAffairData.slice(1).map((dataItem, dataIndex) => (
              <div key={dataIndex} className="pt-7">
                <div className="flex">
                  <p className="text-gray-800 font-bold">
                    {dataItem.title}
                    <br />
                    <br />
                    <span className="text-gray-600 font-normal">
                      {dataItem.keyword}
                    </span>
                  </p>

                  <img
                    src={dataItem.image}
                    className="w-[200px] object-cover h-[112px] ml-3 rounded-lg"
                    alt="Trending Current Affair"
                  />
                </div>
                {dataIndex < CurrentAffairData.length - 2 && (
                  <hr className="w-[90%] mx-auto md:w-[520px] border-gray-300 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <hr className="w-[90%] mx-auto border-blue-900 border-t-2 mt-12 mb-12" />
      <RecentCurrentAffairs />
    </>
  );
};

export default CurrentAffairs;
