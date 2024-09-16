import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";

const LoginForm = ({ onClose ,onLoginSuccess}) => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const{mobile,password} = formData
    console.log("Login submitted:", formData);

  try{
    const response = await axios.post(
      "http://localhost:5000/api/user/loginUser",
      {mobile,password}
    );

    const token = response.data.data;
    localStorage.setItem('token',token)

    onLoginSuccess();

    toast.success(response.data.message);

    setFormData({
      mobile:"",
      password:""
    });

    onClose()

  }catch(error){
    console.log(error.message)
    toast.error(error.response?.data?.message)
  }
}

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96 h-[360px]  relative">
        <IoMdClose
          className="absolute top-5 right-5 text-gray-700 cursor-pointer"
          size={24}
          onClick={onClose}
        />
        <h2 className="text-2xl font-semibold mb-4">Login</h2><br/>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              placeholder="enter mobile number "
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              placeholder="enter password"
            />
          </div><br/>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

