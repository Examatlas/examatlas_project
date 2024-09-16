import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiStreamOn } from "react-icons/ci";
const UPSCLiveClass = () => {
    const[classData,setClassData]=useState();
    console.log(classData);
    
    const getAllLiveClass=async()=>{
        // const responce=await axios.get(`${config?.url}liveclass/getAllLiveClass`);
        const responce=await axios.get(`http://localhost:5000/api/liveclass/getAllLiveClass`);
        if(responce){
          setClassData(responce?.data?.classes)
        }
      }
    
      useEffect(()=>{
        getAllLiveClass();
      },[]);

  return (
    <div className='mt-20 '>
      <h1>UPSC LIVE CLASS</h1>
      <div className=''>
        {
            classData && classData?.map((data)=>{
                return(
                    <div className="w-[500px] bg-red-200 cursor-pointer mb-4 rounded-lg flex flex-col md:flex-row transform hover:scale-105 transition-transform duration-300 p-2">
                    <div className="w-full md:w-1/2 relative">
                        {/* {
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
                        } */}
        
                        <img
                            // src={img}
                            alt="Description of image"
                            // className={`${!live&& !Vod?"mt-11":""} w-[280px] h-[155px] rounded-lg`}
                            // className={`${!live&& !Vod?"mt-11":""} w-[280px] h-[150px] rounded-lg`}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 my-2 md:mt-11  ">
                        <span className="font-semibold">{data?.title}</span><br /><br />
                        By:{" "} <span className="font-semibold text-gray-800 ">Teacher</span><br /><br />
                        <span className="font-semibold text-gray-600">Language</span>
                        <span className="font-semibold text-gray-600">Time</span>
                    </div>
                </div>
               )
            })
        }
     
      </div>
    </div>
  );
}

export default UPSCLiveClass;
