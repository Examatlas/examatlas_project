import React, { useState } from "react";

const EmailBox = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError('');
            console.log("Valid email:", email);
           
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="max-w-md mx-auto my-4 p-4 border border-gray-300 rounded mt-36 mb-14 h-[300px]">
            <form onSubmit={handleSubmit}>
                <h1 className="text-3xl font-semibold text-center m-4 mb-10">Forgot Password</h1>
                <label htmlFor="email" className="block text-xl font-semibold  text-gray-700 mb-4">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="Enter your email"
                    required
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                <button
                    type="submit"
                    className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EmailBox;
