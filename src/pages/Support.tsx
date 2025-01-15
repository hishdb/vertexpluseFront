import { FaRegUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import SupportImage from "../assets/Support.png";
function Support ()  {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 lg:px-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500  to-blue-950">
      {/* Left Section */}
      <div className="flex-1 flex flex-col w-[30%] h-[30%] items-center lg:items-start mb-8 lg:mb-0">
        <div className="relative">
          <img
            src={SupportImage} // Replace with your image URL
            alt="Expert"
         
          />
          <div className="absolute top-4 left-4 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
           24/7
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-8 lg:p-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Here to <span className="text-blue-500">*Support You</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Share your project details without hesitation.
        </p>

        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="flex items-center text-gray-800 font-medium mb-2"
            >
              <FaRegUser className="mr-2" />
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="flex items-center text-gray-800 font-medium mb-2"
            >
              <FaEnvelope className="mr-2" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="flex items-center text-gray-800 font-medium mb-2"
            >
              <FaRegCommentDots className="mr-2" />
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Message goes here"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300 font-medium"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
