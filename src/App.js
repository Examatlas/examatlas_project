import "./App.css";
import Home from "../src/components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import LiveCourse from "./components/LiveCourse";
import CurrentAffairs from "./components/CurrentAffairs";
import TestSeries from "./components/TestSeries";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";
import UPSCLiveClass from "./components/LiveClasses/UPSCLiveClasses";
import ViewerScreenContainer from "./liveStreaming/ViewerScreenContainer";

import ProtectedRoute from "./Auth/ProtectedRoute";

import { AuthProvider } from './Auth/AuthContext';
import EmailBox from "./components/EmailBox";

import ResetPasswordForm from "./components/ResetPasswordForm";
import Book from "./components/Book/Book";


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Toaster />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/examAtlas/reset-password-token" element={<ResetPasswordForm />} />

            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          
            <Route path='/emailbox' element={<EmailBox/>}/>

            <Route
              path="/livecourse/upsc-live-class"
              element={<UPSCLiveClass />}
            />
            <Route
              path="/livecourse/upsc-live-class/:meetingId"
              element={<ViewerScreenContainer />}
            />
            <Route path="/currentaffairs" element={<CurrentAffairs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book" element={<Book />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/testseries" element={<TestSeries />} />
              <Route path="/livecourse" element={<LiveCourse />} />
            </Route>
          </Routes>
          <Footer />
         
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
