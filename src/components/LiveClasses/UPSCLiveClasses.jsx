import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { CiStreamOn } from "react-icons/ci";
import API_BASE_URL from '../../config';
import { Link } from 'react-router-dom';
const UPSCLiveClass = () => {
    const[classData,setClassData]=useState();
    // console.log(classData);
    
    const getAllLiveClass=async()=>{
        // const responce=await axios.get(`${config?.url}liveclass/getAllLiveClass`);
        const responce=await axios.get(`${API_BASE_URL}/liveclass/getAllLiveClass`);
        if(responce){
          setClassData(responce?.data?.classes)
        }
      }
    
      useEffect(()=>{
        getAllLiveClass();
      },[]);


  return (
    <div className='mt-[6rem] mx-[5rem]'>
      <h1 className='mt-10 text-3xl'>UPSC LIVE CLASS</h1>
      <div className='flex flex-wrap gap-4'>
        {
            classData && classData?.map((data)=>{
                return(
                    <div className="w-[500px] bg-red-200 cursor-pointer mb-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform duration-300 p-2">
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
                    <div className="w-full bg-green-400 md:w-1/2 px-2 my-2 md:mt-11  ">
                        <span className="font-semibold">{data?.title}</span><br /><br />
                        By:{" "} <span className="font-semibold text-gray-800 ">Teacher</span><br /><br />
                        <span className="font-semibold text-gray-600">Language</span>
                        <span className="font-semibold text-gray-600">Time</span>
                        <Link to={`/livecourse/upsc-live-class/${data?.meetingId}`}>
                            <button className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md'>join Class</button>
                        </Link>
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
