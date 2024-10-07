import React from 'react';
import { useSearchParams } from "react-router-dom";
import OrderTrack from "./OrderTrack";

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");

    return (
        <>
         <div style={{ height: '100vh', display: 'flex',marginTop:"150px",alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ textTransform: 'uppercase' , color : 'royalblue' , fontWeight:"bold", fontSize : "20px"}}>Order Successful</h1>
            <p className='mb-[100px]'>Reference No. {referenceNum}</p>
            {/* <p className='text-xl text-blue-900 font-semibold mb-5'>Track your order</p> */}
            <OrderTrack />

              

        </div>
        
        </>
       
    );
}

export default PaymentSuccess;


