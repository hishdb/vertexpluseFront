import  { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";

const words = ["indices", "crypto", "commodities", "shares", "options", "ETFs"];

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start the fade-out transition
      setIsVisible(false);

      // After the fade-out transition, change the word
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true); // Fade-in transition
      }, 500); // Transition duration (matches Tailwind animation duration)
    }, 2000); // Change word every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url('https://www.investopedia.com/thmb/VdMCkGC3UVkdzGb_hyvYNkDRiyQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1153657433_2600-573e917e27f9442eb87ac10f45ce43ea.jpg')`,
            height: "75vh",
          }}
        >
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center md:justify-between px-6 md:px-16">
            {/* Left Section: Text and Buttons */}
            <div className="w-full h-full flex justify-center items-center">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-snug tracking-normal">
                IT'S TRADING <br />
                <span className="text-blue-300">WITH A PLUS</span>
              </h1>

            {/* Rotating Words in the Text with Transition */}
            <div className="flex justify-center items-center w-full">
              <p
                className={`text-2xl md:text-3xl font-medium text-center transition-opacity duration-500 transform ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {words[currentWordIndex]}
              </p>
            </div>


              {/* Buttons */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-14 py-4 rounded-lg shadow transition duration-200">
                  Start Trading Now
                </button>
                <button className="bg-white text-blue-500 border border-blue-500 hover:bg-blue-100 font-semibold px-14 py-4 rounded-lg shadow transition duration-200">
                  Try Free Demo
                </button>
              </div>
            </div>
          </div>

            {/* Right Section: Image */}

          <div className="hidden md:flex w-4/5 h-full justify-center items-center animate-slide-fade-in">
            <img
              src="https://www.forex.com/en-us/-/media/project/gain-capital/forex/heroes/platforms/overview/fx-us-platform-overview-mobile.png?h=1000&iar=0&w=1440&hash=191914194E4FCDA9FD9CD987A6AC6C1C"
              alt="Trading Devices"
              className="max-w-full h-auto scale-110"
            />
          </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
