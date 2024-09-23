import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { CiStreamOn } from "react-icons/ci";
import API_BASE_URL from '../../config';
import { Link } from 'react-router-dom';
import img from '../../images/upsc.png'
const UPSCLiveClass = () => {
  const [classData, setClassData] = useState();
  console.log(classData);

  const getAllLiveClass = async () => {
    const responce = await axios.get(`${API_BASE_URL}/liveclass/getAllLiveClass`);
    if (responce) {
      setClassData(responce?.data?.classes)
    }
  }

  useEffect(() => {
    getAllLiveClass();
  }, []);

  return (
    <div className='mt-[6rem] mx-[5rem]'>
      <h1 className='mt-10 text-3xl text-center'>UPSC LIVE CLASSES</h1>
      <div className='grid grid-cols-4 justify-center items-center p-4 my-4 gap-4 '>
        {
          classData && classData?.map((data) => {
            return (
              <div className="w-[17.8rem] shadow-md cursor-pointer mb-4 rounded-lg flex flex-col transform transition-transform duration-300 p-2">
                <div className="w-full relative">
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
                    src={img}
                    alt="Description of image"
                  // className={`${!live&& !Vod?"mt-11":""} w-[280px] h-[155px] rounded-lg`}
                  // className={`${!live&& !Vod?"mt-11":""} w-[280px] h-[150px] rounded-lg`}
                  />
                </div>
                <div className="w-full  px-2 py-2 ">
                  <span className="font-semibold text-2xl">{data?.title}</span><br />
                  <p className=''>{data?.description}</p>
                  
                  By:{" "} <span className="font-semibold text-gray-800 ">{data?.teacher}</span><br />
                  {/* <span className="font-semibold text-gray-600">Language</span><br /> */}
                  {/* <span className="font-semibold text-gray-600">Time: {data?.time}</span><br /> */}

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
