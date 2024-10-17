import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API_BASE_URL from '../../config';
// import axios from 'axios';
import api from '../../Api/Api_config';

const ScheduledLiveClasses = () => {
    const [scheduledData, setScheduledData] = useState();
    const { courseId } = useParams();
    const getAllScheduledCourseByCourseId = async () => {
        try {
            const res = await api.get(`api/liveclass/getAllScheduledCourseByCourseId/${courseId}`);
            if (res?.status === 200) {
                setScheduledData(res?.data?.courses)
            }
        } catch (error) {
            console.log("Error while fetching scheduled class data", error);
        }
    }
    useEffect(() => {
        getAllScheduledCourseByCourseId();
    }, []);
    return (
        <div className='mt-44'>
            <h2>Helo</h2>

            {
                scheduledData && scheduledData?.map((item, index) => {
                    return (
                        <div className='border'>
                            <p>{item?.title}</p>
                            <p>{item?.time}</p>
                            <Link to={`/livecourse/live/${item?.meetingId}/${item?.token}"`}>
                            <button className='bg-blue-500 px-2 py-2 rounded-md'>Join</button>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ScheduledLiveClasses;
