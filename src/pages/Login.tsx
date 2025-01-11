import VertexPluse from "../assets/vertexpluseWhite.png"

function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700  to-blue-950">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={VertexPluse}
          alt="Plus500 Logo"
          className="h-12"
        />
      </div>

      {/* Login Form Container */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md px-8 py-10">
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <i className="fas fa-envelope text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <i className="fas fa-eye text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm mb-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition">
          Log in
        </button>

        {/* Or Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-400">or log in with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
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

        {/* Keep me logged in */}
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="keep-logged-in"
            className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="keep-logged-in" className="text-sm text-gray-700">
            Keep me logged in
          </label>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <a href="#" className="text-white text-sm hover:underline">
          Don't have an account? Create one now!
        </a>
      </div>
    </div>
  );
}

export default Login;
