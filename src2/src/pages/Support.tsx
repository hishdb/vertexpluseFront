import { useState } from "react";
import { FaRegUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import axios from "axios";
import MenuBar from "../components/MenuBar";
import { useTranslation } from "react-i18next";

function Support() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(""); // Clear the error message when typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setStatus(""); // Clear previous status

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setError(t("Please fill in all fields before sending the message."));
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/send-email", formData);
      setStatus(t("Messagesentsuccessfully"));
    } catch (error: any) {
      console.error(t("Errorsendingmessage"), error);
      setStatus(t("Failedtosendmessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <div dir={isRTL ? "rtl" : "ltr"} className="flex items-center justify-center h-screen bg-gray-100 px-4 lg:px-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-blue-950">
        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12 w-full max-w-md sm:max-w-lg">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-center">
            {t("Here to")} <span className="text-blue-500">*{t("Support You")}</span>
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            {t("Askyouquestionwithouthesitation")}
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="flex items-center text-gray-800 font-medium mb-2">
                <FaRegUser className="mr-2" />
                {t("Your Name")}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("Enter name here")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="flex items-center text-gray-800 font-medium mb-2">
                <FaEnvelope className="mr-2" />
                {t("Email Address")}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("Email address")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="flex items-center text-gray-800 font-medium mb-2">
                <FaRegCommentDots className="mr-2" />
                {t("Message")}
              </label>
              <textarea
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t("Message goes here")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

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
                  {t("Sending")}...
                </div>
              ) : (
                t("Send Your Message")
              )}
            </button>
          </form>

          {/* Success/Failure Status */}
          {status && <p className="mt-4 text-center text-sm text-green-500">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Support;
