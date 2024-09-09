import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const events = [
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | MATH LIVE TEST WITH JOHN DOE WITH ALICE',
    startDate: 'Aug 1',
    time: '10:00 AM',
    image: 'https://example.com/image1.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | ENGLISH LIVE TEST DAVID WILSON WITH ALICE',
    startDate: 'Aug 5',
    time: '11:30 AM',
    image: 'https://example.com/image2.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | SOCIAL STUDIES LIVE TEST WITH ALICE ',
    startDate: 'Aug 10',
    time: '02:00 PM',
    image: 'https://example.com/image3.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | SCIENCE LIVE TEST WITH BOB JOHNSON',
    startDate: 'Aug 15',
    time: '03:30 PM',
    image: 'https://example.com/image4.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | GEOGRAPHY LIVE TEST WITH CAROL ',
    startDate: 'Aug 20',
    time: '01:00 PM',
    image: 'https://example.com/image5.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | PHYSICS LIVE TEST WITH DAVID WILSON',
    startDate: 'Aug 25',
    time: '12:00 PM',
    image: 'https://example.com/image6.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | CHEMISTRY LIVE TEST WITH EVE MARTIN',
    startDate: 'Sep 1',
    time: '10:30 AM',
    image: 'https://example.com/image7.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | BIOLOGY LIVE TEST WITH FRANK WITH ALICE ',
    startDate: 'Sep 5',
    time: '11:00 AM',
    image: 'https://example.com/image8.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | HISTORY LIVE TEST WITH GRACE CLARK',
    startDate: 'Sep 10, 2024',
    time: '02:30 PM',
    image: 'https://example.com/image9.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | ECONOMICS LIVE TEST WITH HARRY',
    startDate: 'Sept15',
    time: '03:00 PM',
    image: 'https://example.com/image10.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | CIVICS LIVE TEST WITH ISLA WALKER',
    startDate: 'Sep 20',
    time: '12:30 PM',
    image: 'https://example.com/image11.jpg'
  },
  {
    title: 'FREE',
    subtitle: 'Live Classes',
    event: 'CTET DECEMBER 2024 | ARTS LIVE TEST WITH JACK ROBERTS',
    startDate: 'Sep 25',
    time: '01:15 PM',
    image: 'https://example.com/image12.jpg'
  }
];


const EventList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayedEvents = events.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="p-1 absolute">
      <div className="flex items-center justify-between ">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="bg-blue-500  text-white p-2 rounded-full disabled:bg-gray-400 relative top-40 ml-24"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="bg-blue-500 text-white p-2  rounded-full disabled:bg-gray-400 relative top-40 mr-24"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mr-44 ml-32 mb-9  ">
        {displayedEvents.map((event, index) => (
          <div
            key={index}
            className="border ml-9 border-gray-300 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 w-[400px] h-auto"
          >
            <div className="flex">
              <h2 className="font-bold bg-green-500 p-1 rounded-lg text-white pt-3">{event.title}</h2>
              <p className="text-sm text-gray-500 pt-2 pl-2">{event.event}</p>
            </div>

            <p className="text-sm text-gray-500 pt-8">{event.event}</p>
            <h3 className="text-lg text-gray-700 pt-3">
              Starts On :
              <button className="bg-gradient-to-r from-red-300 to-red-500 text-white ml-4">{event.startDate} | {event.time}</button>

            </h3>
            <div className='flex'>
              <button className="border border-blue-400 bg-sky-400 rounded-lg mt-7 w-[170px] h-8 text-white">Join This Class</button>
              <button className="border border-black mt-7 ml-2 w-[170px]  h-8 rounded-lg">View Series</button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default EventList;
