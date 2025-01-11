import React, { useState } from "react";
import logo from "../assets/vertexpluseWhite.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    country: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400  to-blue-950">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700  to-blue-950  text-white p-8 flex flex-col justify-center w-full lg:w-1/2">
          <img src={logo} alt="Logo" className="w-60  mb-6" />
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-center">
              <span className="text-blue-400 font-bold mr-2">✔</span>
              Free and unlimited Demo trading
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 font-bold mr-2">✔</span>
              Over 2800 leveraged instruments
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 font-bold mr-2">✔</span>
              Tight spreads & no commissions
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 font-bold mr-2">✔</span>
              Cutting-edge trading technology
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 font-bold mr-2">✔</span>
              Comprehensive Trading Academy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="p-8 w-full lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6 text-center">
            Join 26+ million who have chosen VertexPluse
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Surname"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create Demo Account
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">or create an account with</p>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4 mb-4 mt-4">
          <button className="bg-gray-100 p-3 rounded-md shadow-md hover:bg-gray-200 transition">
            <i className="fab fa-google text-red-500"></i>
          </button>
          <button className="bg-gray-100 p-3 rounded-md shadow-md hover:bg-gray-200 transition">
            <i className="fab fa-facebook text-blue-500"></i>
          </button>
          <button className="bg-gray-100 p-3 rounded-md shadow-md hover:bg-gray-200 transition">
            <i className="fab fa-apple text-black"></i>
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
