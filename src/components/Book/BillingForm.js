import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
    email: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // Fetch cart items from the API
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cart/get/${userId}`);
        setCartItems(response.data.cart?.items || []);
      } catch (error) {
        toast.error("Error fetching cart items.");
      }
    };
    fetchCartItems();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (
      formData.firstName &&
      formData.lastName &&
      formData.city &&
      formData.state &&
      formData.pinCode &&
      formData.phone &&
      formData.email
    ) {
      try {
        // Sending the billing details to the API
        const response = await axios.post("http://localhost:5000/api/billing/createBillingDetail", formData);
        
        // Handle successful response
        if (response.status === 201) {
          toast.success("Billing details submitted successfully!");

          setFormData({
            firstName: "",
            lastName: "",
            country: "India",
            streetAddress: "",
            apartment: "",
            city: "",
            state: "",
            pinCode: "",
            phone: "",
            email: "",
          });

          console.log(response.data); // You can handle the response data as needed
        }
         
      } catch (error) {
        toast.error("Error submitting billing details.");
        console.error("Error details:", error);
      }
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, { bookId, quantity }) => {
      return total + (bookId.price || 0) * quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col md:flex-row mt-[120px] mx-auto max-w-7xl p-8">
      {/* Billing Form */}
      <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg shadow-md mr-8">
        <h1 className="text-3xl font-semibold mb-6">Billing Details</h1>
        <form onSubmit={handleSubmit}>
          {/* Form fields... */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* Country / Region */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Country / Region *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="India">India</option>
              {/* Add more countries if needed */}
            </select>
          </div>
          {/* Street Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Street address *</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              placeholder="House number and street name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* Apartment, Suite, etc. */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Apartment, suite, unit, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              placeholder="Apartment, suite, unit, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          {/* City */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Town / City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* State */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">State *</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* PIN Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">PIN Code *</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 mt-9"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg h-[400px]">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <ul className="mb-4">
          {cartItems.map(({ bookId, quantity }) => (
            <li key={bookId._id} className="flex justify-between text-gray-700">
              <span>{bookId.title || "Untitled Book"} (x{quantity})</span>
              <span>₹ {(bookId.price * quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Subtotal</span>
          <span>₹ {calculateSubtotal()}</span>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Shipping: All India</p>
          <p className="text-lg font-bold">Total: ₹ {calculateSubtotal()}</p>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
