import React, { useState } from "react";
import upsc from "../images/upsc.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import FAQ from "./Accredian";


const coursesData = [
  {
    title: "Offline UPSC + UPPSC GS Foundation (Target 2025) - English",
    whatsappLink: "https://wa.me/1234567890",
    startDate: "01 Feb 2024",
    endDate: "30 Sep 2026",
    price: "₹ 11,800",
    fullFees: "₹ 1,21,429",
    exploreText: "EXPLORE",
    buyNowText: "Buy Now",
    image1: upsc,
    image2: "https://example.com/image2.jpg"
  },
  {
    title: "Online UPSC + UPPSC GS Foundation (Target 2026) - Hindi",
    whatsappLink: "https://wa.me/0987654321",
    startDate: "15 Mar 2024",
    endDate: "31 Dec 2026",
    price: "₹ 10,000",
    fullFees: "₹ 1,15,000",
    exploreText: "EXPLORE",
    buyNowText: "Buy Now",
    image1: img2,
    image2: "https://example.com/image4.jpg"
  },
  {
    title: "Offline UPSC GS Foundation (Target 2024) - English",
    whatsappLink: "https://wa.me/1122334455",
    startDate: "01 Jan 2024",
    endDate: "30 Jun 2026",
    price: "₹ 12,500",
    fullFees: "₹ 1,30,000",
    exploreText: "EXPLORE",
    buyNowText: "Buy Now",
    image1: img3,
    image2: "https://example.com/image6.jpg"
  },
  {
    title: "Online UPSC GS Foundation (Target 2026) - English",
    whatsappLink: "https://wa.me/2233445566",
    startDate: "01 Apr 2024",
    endDate: "30 Nov 2026",
    price: "₹ 9,500",
    fullFees: "₹ 1,10,000",
    exploreText: "EXPLORE",
    buyNowText: "Buy Now",
    image1: img4,
    image2: "https://example.com/image8.jpg"
  },
  {
    title: "Online UPSC GS Foundation (Target 2026) - English",
    whatsappLink: "https://wa.me/2233445566",
    startDate: "01 Apr 2024",
    endDate: "30 Nov 2026",
    price: "₹ 9,500",
    fullFees: "₹ 1,10,000",
    exploreText: "EXPLORE",
    buyNowText: "Buy Now",
    image1: img5,
    image2: "https://example.com/image8.jpg"
  }

];

const batchData = [
  {
    title: "UPSC PRARAMBH 2027 New Batch",
    whatsappLink: "https://wa.me/1234567890",
    startDate: "09 Sep 2024",
    endDate: "31 May 2028",
    price: "₹34,999",
    originalPrice: "₹48,999",
    discount: "28% Discount Applied",
    features: ["Premium Features Included", "infinityBadge"],
    buttonText: "Explore",
    buyNowText: "Buy Now",
    image: img6
  },
  {
    title: "UPSC Mains Masterclass 2025",
    whatsappLink: "https://wa.me/1234567891",
    startDate: "01 Jan 2025",
    endDate: "30 Nov 2025",
    price: "₹24,999",
    originalPrice: "₹34,999",
    discount: "29% Discount Applied",
    features: ["Live Sessions", "Mains-specific Guidance"],
    buttonText: "Explore",
    buyNowText: "Buy Now",
    image: img7
  },
  {
    title: "UPSC Prelims Crash Course 2024",
    whatsappLink: "https://wa.me/1234567892",
    startDate: "15 Mar 2024",
    endDate: "20 May 2024",
    price: "₹9,999",
    originalPrice: "₹12,999",
    discount: "23% Discount Applied",
    features: ["Crash Course", "Quick Revision"],
    buttonText: "Explore",
    buyNowText: "Buy Now",
    image: img8
  },
  {
    title: "UPSC Optional Subject 2026 Batch",
    whatsappLink: "https://wa.me/1234567893",
    startDate: "05 Apr 2026",
    endDate: "15 Aug 2026",
    price: "₹14,999",
    originalPrice: "₹19,999",
    discount: "25% Discount Applied",
    features: ["Optional Subject Mastery", "Expert Faculty"],
    buttonText: "Explore",
    buyNowText: "Buy Now",
    image: img9
  },
  {
    title: "UPSC Current Affairs 2024",
    whatsappLink: "https://wa.me/1234567894",
    startDate: "01 Jul 2024",
    endDate: "31 Dec 2024",
    price: "₹4,999",
    originalPrice: "₹7,999",
    discount: "38% Discount Applied",
    features: ["Daily Updates", "Comprehensive Coverage"],
    buttonText: "Explore",
    buyNowText: "Buy Now",
    image: img10
  },
];

const LiveCourse = () => {
  const [activeTab, setActiveTab] = useState('allBatches');
  const [showAll, setShowAll] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(true);
    setActiveTab('ExamAtlasOnlyIas');
  };

  const handleViewSecondClick = () => {
    setShowSecond(true);
    setActiveTab('upsc');
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'allBatches':
        return <AllBatchesComponent onViewAllClick={handleViewAllClick} onViewSecondAllClick={handleViewSecondClick} />;
      case 'ExamAtlasOnlyIas':
        return <ExamAtlasOnlyIASComponent showAll={showAll} setShowAll={setShowAll} />;
      case 'upsc':
        return <UPSCComponent showSecond={showSecond} setShowSecond={setShowSecond} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-10 mx-4 sm:mx-10 md:mx-44 ">
        <h1 className="text-4xl font-bold">UPSC Online Course</h1>
        <p className="pt-6 font-light">
          UPSC Online Coaching is an excellent choice for those aspiring to crack the prestigious UPSC exam.UPSC exam. The UPSC Online Coaching Program at ExamAtlas is designed to provide students with the finest and most cost-effective courses. Our expertise and guidance provide students with a solid foundation and a strategic approach to tackle the challenges of the UPSC examination, not only via its own courses, but also via OnlyIAS courses. So, start your IAS preparation journey with a ExamAtlas UPSC course now.
        </p>
      </div>

      <div className="mt-8 p-5 bg-blue-100">
        <button
          className={`font-semibold md:ml-48 text-lg ${activeTab === 'allBatches' ? 'text-blue-500 ' : ''}`}
          onClick={() => setActiveTab('allBatches')}
        >
          All Batches
        </button>
        <button
          className={`font-semibold ml-12 text-lg ${activeTab === 'ExamAtlasOnlyIas' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('ExamAtlasOnlyIas')}
        >
          ONLY IAS
        </button>
        <button
          className={`font-semibold ml-12 text-lg ${activeTab === 'upsc' ? 'text-blue-500' : ''}`}
          onClick={() => setActiveTab('upsc')}
        >
          UPSC
        </button>
      </div>

      <div className="mt-5 mx-4 sm:mx-28 md:mx-20 ">
        {renderComponent()}
      </div>
    </>
  );
};

const AllBatchesComponent = ({ onViewAllClick, onViewSecondAllClick }) => {
  const visibleCourses = coursesData.slice(0, 3);
  const visibleSecondCourses = batchData.slice(0, 3);

  return (
    <div className="w-[100%]">
      <h1 className="font-semibold text-2xl">ExamAtlas ONLY IAS UPSC Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 ">
        {visibleCourses.map((course, index) => (
          <div key={index} className="border w-full rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src={course.image1} alt="Course 1" className="w-96 rounded-lg" />
            <h2 className="text-xl font-semibold mt-4 mb-2">{course.title}</h2>
            <div className="flex space-x-4 mb-14">
              <p className="text-sm mb-1 mt-3">Starts on {course.startDate}</p>
              <p className="text-sm mb-1 mt-3">Ends on {course.endDate}</p>
            </div>
            <hr />
            <p className="text-xl mt-3 text-blue-500 font-semibold mb-1">{course.price}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2 font-semibold">{course.exploreText}</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold">
                {course.buyNowText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={onViewAllClick} className="bg-blue-100 text-blue-500 rounded-lg p-3 font-semibold w-[1130px] hover:bg-blue-200">
          View All ExamAtlas only IAS Batches
        </button>
      </div>

      <h1 className="font-semibold text-2xl pl-7 pt-11">UPSC Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {visibleSecondCourses.map((batch, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src={batch.image} alt="Course 1" className="w-96 rounded-lg" />
            <h2 className="text-xl font-semibold mt-4 mb-2">{batch.title}</h2>
            <div className="flex space-x-4 mb-14">
              <p className="text-sm mb-1 mt-3">Starts on {batch.startDate}</p>
              <p className="text-sm mb-1 mt-3">Ends on {batch.endDate}</p>
            </div>
            <hr />
            <div className="flex">
              <p className="text-xl mt-3 text-blue-500 font-semibold mb-1">{batch.price}</p>
              <p className="ml-20 mt-4 bg-green-100 p-1 rounded-lg text-green-500 font-semibold">{batch.discount}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2 font-semibold">{batch.buttonText}</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold">
                {batch.buyNowText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={onViewSecondAllClick} className="bg-blue-100 text-blue-500 rounded-lg p-3 font-semibold w-[1130px] hover:bg-blue-200">
          View All UPSC Batches
        </button>
      </div>


      {/* content section */}
      <div className="ml-5 ">
        <h1 className="text-2xl mt-10 font-semibold ">Best UPSC Online Coaching in India</h1>
        <p className="mt-5">ExamAtlas provides the best UPSC online coaching in India and offers the best faculty along with comprehensive courses, which is essential. ExamAtlas strives to provide the best online coaching for UPSC aspirants. We have a team of highly experienced and knowledgeable educators who specialize in a variety of subjects such as history, geography, politics, economics, and more. ExamAtlas's goal is to provide students with the skills and expertise needed to excel on the Civil Service Exam. Our live and low-cost UPSC online coaching program offers you the knowledge and abilities to excel in this exam. Unlock your potential and achieve your dreams of becoming an IAS officer with ExamAtlas’s comprehensive UPSC course. Designed by experts with years of experience in UPSC preparation, our courses offer detailed study materials, personalized mentorship, and strategic test series to enhance your readiness for the IAS examination. Join our community of aspirants and embark on a successful journey towards securing one of the most prestigious positions in the Indian civil services. Start your preparation with us today and transform your aspirations into reality.</p>

        <h1 className="text-2xl mt-7 font-semibold ">IAS Online Coaching in India for UPSC Exam</h1>
        <p className="mt-5">ExamAtlas (ExamAtlas) is a leading provider of the best online UPSC coaching in India, offering top-notch guidance at an affordable price. ExamAtlas ensures that students receive comprehensive study material and access to experienced faculty members with a focus on delivering high-quality coaching. The platform boasts a user-friendly interface, making it effortless for students to navigate the study material, attend live classes, and access recorded lectures. Our dedicated faculty is committed to helping students excel in their UPSC preparations and conquer the highly competitive civil services examination. We try to increase students' grasp of the subject content and exam performance by providing effective assessment approaches and personalized support. Prepare for success in the UPSC exam with our top-tier course, designed specifically to empower aspiring civil servants. Our program includes in-depth study materials, interactive sessions, and extensive mock tests that mirror the actual UPSC exam format. Gain insights from experienced instructors who understand the intricacies of the exam and can guide you through each step of your preparation. Enroll now to build a strong foundation, enhance your problem-solving skills, and step confidently into your UPSC exam. Join us and turn your civil service dreams into reality!</p>

        <h1 className="text-2xl mt-7 font-semibold ">Best UPSC Online Courses</h1>
        <p className="mt-5">ExamAtlas offers a variety of UPSC online courses for all aspirants. Our institute takes pride in its team of expert teachers who possess extensive knowledge and experience in the field of UPSC. At ExamAtlas, our UPSC online coaching program includes a range of valuable resources and features. Students will benefit from regular assessments, mock tests, and doubt-clearing sessions, ensuring a thorough understanding of the topics and helping them gauge their progress effectively. We understand the significance of mock tests in the UPSC exam preparation process, and thus, our program emphasizes providing ample opportunities for students to practice and enhance their skills.

          Students can access a dynamic learning environment that fosters growth and excellence by enrolling in ExamAtlas's UPSC online coaching. Our courses are designed to cater to the unique needs of UPSC aspirants, ensuring they receive the highest quality education and guidance.

          Embark on your journey to mastering the UPSC exam with our specialized course tailored for aspiring IAS officers. Understanding the UPSC exam pattern is crucial, and our curriculum is meticulously designed to cover each aspect of it, from Prelims to Mains and the Interview. Dive into comprehensive material that breaks down the complex UPSC exam pattern, making your preparation process smooth and effective. Our course, puts you on your journey to becoming the next IAS officer, leverages advanced teaching methodologies and expert insights to equip you with the skills needed to excel. With personalized mentorship, updated resources, and rigorous mock tests, you'll not only understand the UPSC exam pattern but also stay one step ahead in the competitive race. </p>

        <h1 className="text-2xl mt-10 font-semibold ">UPSC Online Coaching in Hindi</h1>
        <p className="mt-5">ExamAtlas (ExamAtlas) offers UPSC Online Coaching in Hindi, providing a convenient and accessible platform for Hindi medium students preparing for the UPSC exam. Our UPSC courses in Hindi are designed to cater to the needs of students who prefer studying in Hindi mode.


          Discover the pathway to becoming an IAS officer with our UPSC Online Coaching in Hindi, designed specifically for Hindi-speaking aspirants. Our course offers a deep dive into the UPSC exam, providing comprehensive materials, expert-led video lectures, and interactive sessions—all in Hindi. Tailored to cater to the unique challenges of the UPSC exam, our resources help you master both the conceptual framework and the intricacies of the exam. Enhance your preparation with our meticulously designed test series and personalized feedback mechanisms. Whether you are just starting out or seeking to refine your strategies, our UPSC Online Coaching in Hindi equips you with the necessary tools to excel in the UPSC exam and achieve your dream of becoming an IAS officer.

          We understand the importance of clear communication and effective comprehension of complex concepts, which is why our UPSC online coaching in Hindi is an invaluable resource. With ExamAtlas, Hindi medium students can strengthen their foundation in physics and other subjects, enabling them to excel in the UPSC examination. We also offer free UPSC courses in Hindi, further supporting and empowering students on their UPSC preparation journey. Choose ExamAtlas for comprehensive and high-quality UPSC online coaching in Hindi that ensures your success.</p>


        <h1 className="text-2xl mt-10 font-semibold ">Free UPSC Online Coaching 2024</h1>
        <p className="mt-5">ExamAtlas also offers free online coaching for UPSC aspirants. Our UPSC batches provide the best faculty and study material to help students prepare for the exam. Below are the top free UPSC batches available:

          Samadhan Free YT Batch For UPSC Aspirants

          Buniyaad NCERT Basics

          UPSC Prelims Selection Express

          UPSC Prelims Selection Express Hindi

          UPSC Focus

          UPSC Netra

          UPSC Conceptual

          Samagra Book Series Batch (Hinglish )

          UPSC CSE WEBINAR</p>

        <h1 className="text-2xl mt-10 font-semibold ">UPSC Online Coaching Features</h1>
        <p className="mt-5 mb-10">Here are the key features of UPSC online coaching offered by ExamAtlas:

          ExamAtlas is a top choice for UPSC online coaching because we prioritize comprehensive preparation and offer a range of resources to support students' learning.

          Our online coaching platform offers interactive lectures, video courses, practice tests, and question-and-answer sessions to help students increase their comprehension of important ideas and problem-solving abilities.

          Our UPSC online coaching courses are structured to allow flexibility in study time, enabling students to learn at their own pace.

          We provide well-structured study material that covers the entire UPSC syllabus, ensuring that students have access to up-to-date information and are well-prepared to tackle the challenges of the UPSC exams.

          The study material is routinely updated to reflect the most recent exam patterns and to incorporate important current events.

          ExamAtlas for UPSC online coaching, can benefit students with our expertise, guidance, and supportive learning environment that maximizes their chances of success in the UPSC exams.


          We are dedicated to offering high-quality education and assisting students in achieving their goals of joining the prestigious civil service</p>


      </div>
      <FAQ/>

    </div>

  );
};



// ias component
const ExamAtlasOnlyIASComponent = ({ showAll, setShowAll }) => {
  const visibleCourses = showAll ? coursesData : coursesData.slice(0, 5);

  return (
    <div>
      <h1 className="font-semibold text-2xl">ExamAtlas ONLY IAS UPSC Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {visibleCourses.map((course, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src={course.image1} alt="Course 1" className="w-96 rounded-lg" />
            <h2 className="text-xl font-semibold mt-4 mb-2">{course.title}</h2>
            <div className="flex space-x-4 mb-14">
              <p className="text-sm mb-1 mt-3">Starts on {course.startDate}</p>
              <p className="text-sm mb-1 mt-3">Ends on {course.endDate}</p>
            </div>
            <hr />
            <p className="text-xl mt-3 text-blue-500 font-semibold mb-1">{course.price}</p>
            <p className="text-sm mb-1 font-extralight">Full fees: {course.fullFees}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="border border-blue-500 text-blue-500 rounded-lg px-6 py-2 font-semibold">{course.exploreText}</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold">
                {course.buyNowText}
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* conntent section of ias */}
      <div className="ml-5">
        <h1 className="text-2xl mt-10 font-semibold ">ExamAtlas OnlyIAS Offline UPSC Course</h1>
        <p className="mt-5">The Indian Administrative Service (IAS) is a dream of millions of aspirants. The exam for this elite All India Service is conducted by the Union Public Service Commission known as the UPSC IAS exam or UPSC CSE. To become an IAS officer candidates must cross the hurdle of Prelims, Mains, and Interview.
          Given the rising difficulty level, the ExamAtlas ExamAtlas OnlyIAS has evolved as the saviour of aspirants. Our flagship initiatives like the OnlyIAS Offline course, OnlyIAS Offline Coaching, Only IAS Optional Course, and UPSC Offline Course in Hindi bring revolution in UPSC exam preparation by providing the best learning experience at the cheapest price.</p>

        <h1 className="text-2xl mt-10 font-semibold ">ExamAtlas OnlyIAS Offline Course Details</h1>
        <p className="mt-5">Only IAS online course details provide insight into the best initiatives of ExamAtlas that are available at attractive discount fees.

          ExamAtlas OnlyIAS Online Course Highlights

          Best UPSC Online Coaching in India: Join the league of UPSC toppers with our renowned online courses such as UPSC GS Foundation (Target 2025).

          Live & Recorded Classes: Balance your preparation with ExamAtlas OnlyIAS Live Online classes so that you can study for the UPSC exam anytime and anywhere. Recorded sessions for those who missed class will be available.

          Prelims Crash Course: ExamAtlas OnlyIAS provides dedicated courses for the IAS prelims exam such as ‘RPP’ to help you sail through the rigorous competition of this stage.

          Best Test Series for IAS Exam: Leverage from best mock tests like UPSC Prelims + CSAT Test Series 2.0, UPSC Mains Test Series 2.0, UPSC Mains Test Series in Hindi, and Integrated Daily MCQs to stay one step ahead.

          Experienced Faculty: Learn from highly qualified UPSC teachers at ExamAtlas OnlyIAS who are experts in their respective fields.

          Comprehensive UPSC Study Material: Gain access to our exclusive study resources including OnlyIAS current affairs, ExamAtlas Only IAS Udaan 2024, Only IAS Prahaar, and more Only IAS magazines.

          Doubt Engine: Make the most of the personalized doubt-clearing sessions at ExamAtlas OnlyIAS Coaching which ensures a deep understanding of the UPSC syllabus and effective exam preparation.</p>

        <h1 className="text-2xl mt-10 font-semibold">Why Choose ExamAtlas OnlyIAS Offline Course?</h1>
        <p className="mt-5">The ExamAtlas OnlyIAS has established itself as one of the reliable platforms for the preparation of the UPSC exam. It offers online UPSC courses in Hindi as well as in English for aspirants. They can join any Only IAS Offline Course as per their requirements at one of the lowest fees.

          Starting from the foundation level the ExamAtlas IAS course covers all aspects of the UPSC exam till the interview stage.

          Start preparing for the UPSC exam from class 12th with our tailor-made GS Foundation batches.

          ExamAtlas Only IAS online coaching fees for all courses are one of the lowest in the Country.

          Aspirants can enroll in the ExamAtlas OnlyIAS Offline UPSC Course ‘Target 2025’ for holistic preparation for the upcoming exam.

          ExamAtlas OnlyIAS current affairs magazines such as UDAAN magazine,  curate the most relevant news and analysis from the UPSC perspective to keep you updated on the latest developments.

          Only IAS Optional Courses for a range of optional subjects like PSIR are available which are designed by highly experienced subject matter experts of ExamAtlas.

          Free UPSC material like Only IAS Prahaar magazine is available for those who join the Only IAS Offline course complementing their preparation.

          Regular answer writing practice for the UPSC Mains exam to achieve the best rank for IAS.</p>

        <h1 className="text-2xl mt-10 font-semibold ">ExamAtlas OnlyIAS Online Coaching Benefits</h1>
        <p className="mt-5 mb-10">Online coaching for IAS gives flexibility to working professionals and college students making preparation easier. ExamAtlas Only IAS is the best choice for UPSC IAS exam for many reasons:

          Faculty with years of teaching experience in UPSC.
          Mentors who guide you through every step of your IAS journey.
          Live classes and recorded lectures so that you can attend them later.
          Focused online courses for GS, CSAT, Essay, and Optional Papers.
          Only IAS Monthly Magazine like Udaan magazine ExamAtlas will be provided for free.
          Regular UPSC mock tests for prelims and mains exam.
          Rigorous Prelims Program (RRP) that covers all dimensions of this stage.
          Daily answer writing to prepare for main simultaneously with prelims.
          Revision series to ensure no backlog is left for the UPSC IAS exam.
          Most cost-efficient Offline IAS Courses at ExamAtlas for UPSC preparation in budget.</p>
      </div>
      <FAQ/>

    </div>
  );
};


//upsc component
const UPSCComponent = ({ showSecond, setShowSecond }) => {
  const visibleSecondCourses = showSecond ? batchData : batchData.slice(0, 5);

  return (
    <div>
      <h1 className="font-semibold text-2xl">UPSC Batches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {visibleSecondCourses.map((batch, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src={batch.image} alt="Course 1" className="w-96 rounded-lg" />
            <h2 className="text-xl font-semibold mt-4 mb-2">{batch.title}</h2>
            <div className="flex space-x-4 mb-14">
              <p className="text-sm mb-1 mt-3">Starts on {batch.startDate}</p>
              <p className="text-sm mb-1 mt-3">Ends on {batch.endDate}</p>
            </div>
            <hr />
            <div className="flex">
              <p className="text-xl mt-3 text-blue-500 font-semibold mb-1">{batch.price}</p>
              <p className="ml-20 mt-4 bg-green-100 p-1 rounded-lg text-green-500 font-semibold">{batch.discount}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="border border-blue-500 text-blue-500 rounded-lg px-6 py-2 font-semibold">{batch.buttonText}</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold">
                {batch.buyNowText}
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* upsc content section */}
      <div className="ml-5">
        <h1 className="text-2xl mt-10 font-semibold ">Best Online Course for UPSC CSE in India</h1>
        <p className="mt-5">UPSC ExamAtlas by ExamAtlas is here to provide the most affordable UPSC CSE courses for aspirants who wish to crack UPSC CSE Exam 2024. Also, aspirants enrolled in this course will gain access to the most well-curated study materials and an excellent faculty with years of experience.

          Moreover, students preparing for the UPSC CSE 2024 will benefit from the UPSC CSE courses. The timely completion of the curriculum will allow students to plan a timely revision and give them sufficient time to practice the mock tests.

          UPSC CSE Exam 2024 is conducted in three stages. Preliminary Exam (Objective Test), Main Exam (Written Test) and Personality Test (interview). Candidates aspiring to become Civil Servants must clear all three UPSC CSE stages.

          Also, the courses provided by ExamAtlas will cover the complete UPSC CSE syllabus 2024.</p>

        <h1 className="text-2xl mt-10 font-semibold ">UPSC CSE Online Course Features</h1>
        <p className="mt-5">A detailed and complete UPSC CSE syllabus 2024 will be covered within the time limit. We will pay more emphasis on the conceptual clarity of the students.
          The UPSC CSE coaching will be offered to students at any time, wherever they are. Through our applications, students can easily access this information if they wish to take part in live lectures. The students have access to recording of their lectures 24 hours a day.
          On our application, students will have access to all class notes and additional study material provided by the teachers. The notes will be presented in a PDF format. There will be DPPs and assessment questions as well.
          These courses will be designed to allow students to engage actively in learning. Rather than recorded videos or reading materials, live skepticism courses are more interesting. There are many live doubts classes recorded and made available for the purposes of later viewing.
          Assessment of performance: students are provided with regular assessment of their performance in the test series. A series of tests gives students sufficient time to prepare for the actual test. Test series helps students develop skills that are important for success in examinations, such as time management.
          Why choose ExamAtlas?
          Last year, we launched 26 new YouTube channels to increase our total reach and student numbers on YouTube from 8.7 million to 22 million.
          In order to support students' continuous learning, we have endowed our valuable time and resources in more than ten new categories, including UPSC, GATE, ExamAtlas Skills, Commerce, CA, SSC, Banking, CUET, CSIR, IIT JAM, and others.
          Students have received exact answers to more than 50 million doubt questions, with an 81% satisfaction rate.
          One out of five JEE students, one of six NEET students, and one of six NDA students are ExamAtlasians.
          There were 4 lac hours of study material taught on campus or on the Internet.
          Our unique live-streaming technology has successfully hosted the largest class in India, with 127,000 students, without a hitch.</p>

        <h1 className="text-2xl mt-10 font-semibold ">UPSC CSE Online Course Benefits</h1>
        <p className="mt-5 mb-10">UPSC Sankalp is an online course for UPSC CSE preparation which includes comprehensive coverage of all the topics for all four papers of G.S.Mains, GS prelims and essay for UPSC CSE 2024 for those having PSIRas optional.
          Also, the course will start on the date  5/04/2023 and will end on 31/03/2024.
          Duration of class Two to 2:30 hours, three daily lectures, Mondays through Fridays, Weekly Lectures CA.
          Certainly, thirteen months of the live class is available from 31 December 2024 for the Aspirants and recorded lectures. Teachers from India's best universities are presenting live teaching in Hinglish language Specific focus on conceptual clarity and the ability to write a reply in class. Practice and examine questions that have been asked during previous years and probable questions for the upcoming examinations.
          DPPs (Up to 10 MCQs & 1 Main Model Answer) for daily practice & Weekly tests every Sunday.
          Our experts offer supplementary test series and an answer writing program. The daily notes of the classes were drawn up by experts on matters discussed in a live lecture.
          Preparation of CSAT is part of this batch.
          Doubt Solving Facility: We provide a Doubt solving facility with the best faculties in the industry to solve every doubt of students via Doubt Engine, which is enabled by a Team of Experts along with Faculties solving doubts for students.
          Study material by experts : SAMPOORNA: Comprehensive Booklets for CSE, MANTHAN: Monthly Current Affairs Magazine, UDAAN: Quick revision booklets especially for prelims, UDAAN 500: One-stop solution for 1.5Year current affairs (Free for all enrolled students)
          There isn't any refund policy in place.</p>
      </div>
    </div>
  );
};

export default LiveCourse;
