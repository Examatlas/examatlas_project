import React from "react";
// import Header from "./Header";
// import Banner from "./Banner";
import Body from "./Body";
import Content from "./Content";
import Courses from "./Courses";
import LiveClasses from "./LiveClasses";
import EventList from "./LiveClassData";
import Enroll from "./Enroll";
import ExamAtlas from "./ExamAtlas";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

const Home = () =>{
    return(
        <>
        {/* <Header/> */}
        {/* <Banner/> */}
        <Body/>
        <Content/>
        <Courses/>
        <LiveClasses/>
        <EventList/>
        <Enroll/>
        <ExamAtlas/>
        <MobileApp/>
        <Footer/>
    
        </>
    )
}

export default Home;
