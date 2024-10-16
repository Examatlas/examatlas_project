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
import Wishlist from "./components/Book/Wishlist";
import Cart from "./components/Book/Cart";
import BillingForm from "./components/Book/BillingForm";
import ScheduledLiveClasses from "./components/LiveClasses/ScheduledLiveClasses";

import PaymentSuccess from "./components/Book/PaymentSuccess";
import OrderTrack from "./components/Book/OrderTrack";
import OrderHistory from "./components/Book/OrderHistory";

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

            {/* payment gateway  */}
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="ordertrack" element={<OrderTrack/>}/>

            <Route path="/OrderHistory" element={<OrderHistory/>}/>
           
            <Route
              path="/livecourse/upsc-live-class"
              element={<UPSCLiveClass />}
            />
            <Route
              path="/livecourse/upsc-live-class/:courseId"
              element={<ScheduledLiveClasses />}
            />
            <Route
              path="/livecourse/live/:meetingId/:scheduledClassId"
              element={<ViewerScreenContainer />}
            />
            <Route path="/currentaffairs" element={<CurrentAffairs />} />
            <Route path="/blog" element={<Blog />} />


            <Route path="/book" element={<Book />} />
            <Route path="/ecommerce/wishlist" element={<Wishlist/>}/>
            <Route path="/ecommerce/cart" element={<Cart/>}/>

            <Route path="/billingForm" element={<BillingForm/>}/>

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
