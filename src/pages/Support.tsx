import { useState } from "react";
import { FaRegUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import axios from "axios";
import MenuBar from "../components/MenuBar";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      setStatus("Message sent successfully!");
    } catch (error: any) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div className="flex items-center justify-center h-screen bg-gray-100 px-4 lg:px-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-blue-950">
        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12 w-full max-w-md sm:max-w-lg">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-center">
            Here to <span className="text-blue-500">*Support You</span>
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Share your project details without hesitation.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="flex items-center text-gray-800 font-medium mb-2">
                <FaRegUser className="mr-2" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name here"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="flex items-center text-gray-800 font-medium mb-2">
                <FaEnvelope className="mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="flex items-center text-gray-800 font-medium mb-2">
                <FaRegCommentDots className="mr-2" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message goes here"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg transition duration-300 font-medium ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-800 text-white hover:bg-blue-900"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="loader border-t-2 border-white rounded-full w-4 h-4 mr-2"></div>
                  Sending...
                </div>
              ) : (
                "Send Your Message"
              )}
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-green-500">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Support;
