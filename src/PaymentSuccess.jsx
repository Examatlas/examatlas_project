import React from 'react';
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get("reference");

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ textTransform: 'uppercase' }}>Order Successful</h1>
            <p>Reference No. {referenceNum}</p>
        </div>
    );
}

export default PaymentSuccess;
