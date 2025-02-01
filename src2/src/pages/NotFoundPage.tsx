import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-blue-900 text-white text-center">
      <h1 className="text-9xl font-extrabold tracking-wide drop-shadow-lg">404</h1>
      <p className="text-2xl font-medium mt-4 drop-shadow-md">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-lg mt-2">
       
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all"
        >
          Home
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
