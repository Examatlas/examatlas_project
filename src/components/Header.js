import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";  
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);  

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
    setIsLoginOpen(false);  
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignupOpen(false);  
  };

  const handleNavigateHome = () =>{
    navigate('/home')
  }

  const handleNavigateBlog = () =>{
    navigate('/blog')
  }

  const handleNavigateCF = () =>{
    navigate('/currentaffairs')
  }

  const  handleNavigateCourse = () =>{
    navigate('/livecourse')
  }

  const handleNavigateTest = () =>{
    navigate('/testseries')
  }

  return (
    <>
      <div className="bg-blue-100 p-6 flex z-10 ">
        <img
          src="https://examatlas.com/assets/images/logo.png"
          alt="Example Image"
          className="pl-8 w-36 h-14 ml-36"
        />
        <div className="flex pt-6 pl-48 font-semibold cursor-pointer">
          <p className="pr-9 text-blue-400" onClick={handleNavigateHome}>HOME</p>
         
          <p className="pr-9 flex hover:text-blue-400" onClick={handleNavigateTest}>
            TEST SERIES <IoIosArrowDown style={{ marginLeft: "8px", marginTop: "4px" }} />
          </p>
          <p className="pr-9 hover:text-blue-400" onClick={handleNavigateCourse}>LIVE COURSES</p>
          <p className="pr-9 hover:text-blue-400" onClick={handleNavigateCF}>CURRENT AFFAIRS</p>
          <p className="pr-9 hover:text-blue-400" onClick={handleNavigateBlog}>BLOG</p>

          <p
            className="pl-6 pr-6 pt-1 flex bg-blue-500 text-white rounded-md mr-5 ml-28 hover:bg-blue-400  h-9"
            onClick={toggleSignup}
          >
            Register
          </p>
          <p
            className="pl-6 pr-6 pt-1 flex border border-blue-400 hover:bg-blue-200 rounded-md text-black"
            onClick={toggleLogin}  
          >
            Login
          </p>
        </div>
      </div>

      {isSignupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
          <SignupForm onClose={toggleSignup} />
        </div>
      )}

      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
          <LoginForm onClose={toggleLogin} />
        </div>
      )}
      
    </>
  );
};

export default Header;



// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import SignupForm from "./SignupForm";
// import LoginForm from "./LoginForm";  

// const Header = () => {
//   const [isBoxOpen, setIsBoxOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("login");

//   const toggleBox = () => {
//     setIsBoxOpen(!isBoxOpen);
//     console.log('isBoxOpen:', isBoxOpen); 
//   }
  
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     console.log('activeTab:', tab); 
//   };
  
//   return (
//     <>
//       <div className="bg-blue-100 p-6 flex z-10">
//         <img
//           src="https://examatlas.com/assets/images/logo.png"
//           alt="Example Image"
//           className="pl-8 w-36 h-14 ml-36"
//         />
//         <div className="flex pt-6 pl-48 font-semibold cursor-pointer">
//           <p className="pr-9 text-blue-400">HOME</p>
//           <p className="pr-9 flex hover:text-blue-400">
//             TEST SERIES <IoIosArrowDown style={{ marginLeft: "8px", marginTop: "4px" }} />
//           </p>
//           <p className="pr-9 hover:text-blue-400">LIVE COURSES</p>
//           <p className="pr-9 hover:text-blue-400">CURRENT AFFAIRS</p>
//           <p className="pr-9 hover:text-blue-400">BLOG</p>
//           <p
//             className="pl-6 pr-6 pt-1 flex bg-blue-400 text-white rounded-md mr-5 ml-28 hover:bg-blue-300 h-9 cursor-pointer"
//             onClick={toggleBox}
//           >
//             Login/Register
//           </p>
//         </div>
//       </div>
      
//       {isBoxOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-20">
//           <div className="bg-white p-6 rounded-lg w-80">
//             <div className="flex justify-between mb-4">
//               <button
//                 className={`py-2 px-4 ${activeTab === "login" ? "bg-blue-400 text-white" : "bg-gray-200"}`}
//                 onClick={() => handleTabChange("login")}
//               >
//                 Login
//               </button>
//               <button
//                 className={`py-2 px-4 ${activeTab === "signup" ? "bg-blue-400 text-white" : "bg-gray-200"}`}
//                 onClick={() => handleTabChange("signup")}
//               >
//                 Signup
//               </button>
//             </div>
//             {activeTab === "login" && <LoginForm onClose={toggleBox} />}
//             {activeTab === "signup" && <SignupForm onClose={toggleBox} />}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
