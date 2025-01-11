import logo from "../assets/vertexpluseWhite.png";
import workingLaptop from "../assets/workingLaptop.jpg";
function AffiliateFirstElement ()  {
  return (
    <div className="relative w-full h-full overflow-hidden">
        {/* Content container */}
        <div className="relative h-full flex">
            {/* Left content */}
            <div className="sm:pl-60 pl-10 flex flex-col justify-center z-10 ">
            
                <div className="flex items-center gap-2 mb-6">
                    <img 
                        src={logo}
                        alt="Vertex Logo" 
                        className="h-8"
                    />
                    <span className="text-white  md:text-2xl sm:text-2xl font-light">Affiliate Program</span>
                </div>
                
                <h1 className="text-amber-400 md:text-5xl lg:text-6xl sm:text-2xl text-2xl  font-bold mb-8 leading-tight">
                    YOUR TRAFFIC WORKS FOR YOU
                </h1>
                
                <button className="bg-white text-[#001653] px-8 py-3 rounded-md w-fit text-lg font-medium hover:bg-opacity-90 transition-all">
                    JOIN NOW
                </button>
            </div>
            <div className="absolute top-0 left-0 sm:w-[65%] w-[100%] h-[150%] bg-amber-400 transform -skew-x-12 -translate-x-[10%] origin-top" />
            <div className=" absolute top-0 left-0 sm:w-[55%] w-[80%] h-[150%] bg-gradient-to-r from-blue-950 to-blue-700 transform -skew-x-12 -translate-x-[10%] origin-top" />
            {/* Right content - Image */}
            <div className="w-full h-full">
                <img 
                    src={workingLaptop} 
                    alt="Person working on laptop"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>

    </div>
  );
};

export default AffiliateFirstElement;