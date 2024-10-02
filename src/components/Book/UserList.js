import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../../config";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [editUserData, setEditUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/billing/billing/user/${userId}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response?.data?.message || "Error fetching billing details");
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (billingId) => {
    const userId = localStorage.getItem("userId");

    try {
      await axios.delete(`${API_BASE_URL}/billing/billing/deletebilling/${userId}/${billingId}`);
      setUserData(userData.filter((user) => user._id !== billingId));
      setSelectedUserId(null); // Reset the selected user after delete
    } catch (error) {
      console.error("Error deleting billing detail:", error);
    }
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setEditUserData(user);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem("userId");

    try {
      await axios.put(`${API_BASE_URL}/billing/billing/updatebilling/${userId}/${editUserData._id}`, editUserData);
      setUserData((prevData) =>
        prevData.map((user) => (user._id === editUserData._id ? editUserData : user))
      );
      setIsEditing(false);
      setValidationError(""); // Clear validation error
    } catch (error) {
      console.error("Error updating billing detail:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProceedToPayment = () => {
    if (!selectedUserId) {
      setValidationError("Please select an address to proceed to payment.");
      return;
    }
    // Logic for proceeding to payment
    setPaymentError(""); // Clear any previous errors
    console.log("Proceeding to payment for user ID:", selectedUserId);
  };

  const handleAddressSelect = (id) => {
    setSelectedUserId(id);
    setValidationError(""); // Clear the validation error when an address is selected
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-5 max-w-screen-lg">
      <h1 className="text-2xl font-semibold mb-6 ">Shipping Address</h1>
      {validationError && <div className="text-red-500 mb-4">{validationError}</div>}
      {paymentError && <div className="text-red-500 mb-4">{paymentError}</div>}
      {userData.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {userData.map((user) => (
            <div
              key={user._id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border p-4 rounded-lg hover:bg-gray-50 transition w-full"
            >
              <div className="flex items-center mb-4 md:mb-0">
                <input
                  type="radio"
                  name="user"
                  value={user._id}
                  checked={selectedUserId === user._id}
                  onChange={() => handleAddressSelect(user._id)} // Use the new function here
                  className="mr-3"
                />
                <div className="text-sm">
                  <p className="font-semibold">{`${user.firstName} ${user.lastName}`}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Address: {`${user.streetAddress}, ${user.city}, ${user.state}, ${user.pinCode}`}</p>
                  <p>Country: {user.country}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <AiOutlineEdit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No billing details available! <br/>Add Shipping Details.</p>
      )}

      {/* Edit form/modal */}
      {isEditing && editUserData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Billing Detail</h2>
            <form onSubmit={handleEditSubmit}>
              {/* Two input fields per line */}
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={editUserData.firstName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={editUserData.lastName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={editUserData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editUserData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm">State</label>
                  <input
                    type="text"
                    name="state"
                    value={editUserData.state}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm">Pin Code</label>
                  <input
                    type="number"
                    name="pinCode"
                    value={editUserData.pinCode}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={editUserData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm">City</label>
                  <input
                    type="text"
                    name="city"
                    value={editUserData.city}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm">Country</label>
                <input
                  type="text"
                  name="country"
                  value={editUserData.country}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleProceedToPayment}
          className="p-3 mt-5 bg-blue-500 w-[320px] text-white rounded-lg font-semibold"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default UserList;
