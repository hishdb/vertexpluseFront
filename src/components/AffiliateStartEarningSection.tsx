import StartEarningMoney from "../assets/StartEarningMoney.png"

const AffiliateStartEarningSection = () => {
  return (
    <div className="relative w-full h-full flex sm:flex-row flex-col overflow-hidden ">
      {/* Left side - Image */}
      <div className="sm:w-10/11 md:w-1/2 lg:w-1/2 w-10/11 flex  flex-col justify-center sm:items-start items-center p-8">
        <img 
          src={StartEarningMoney}
          alt="Trading platform on mobile phone"
          className=" bg-cover "
        />

      </div>

      {/* Right side - Content */}
      <div className="sm:w-1/2 flex flex-col justify-center sm:items-start items-center p-8">
        <h2 className="text-[#001653] lg:text-4xl md:text-3xl sm:text-2xl font-bold  leading-tight">
          Start earning from<br />
          your traffic, today.
        </h2>

        <p className="text-gray-700 mb-8 mt-4 text-md">
          Monetize your traffic and earn commissions by promoting Plus500 on your website
        </p>

        <div className="space-y-5 sm:mb-12 mb-5">
          {/* High Conversion Tools Section */}
          <div>
            <h3 className="text-gray-800 text-xl font-semibold mb-2">
              High Conversion Tools
            </h3>
            <p className="text-gray-600">
              Our <span className="text-blue-500 cursor-pointer">marketing solutions</span> can easily help maximize the potential of your website while promoting Plus500.
            </p>
          </div>

          {/* Personal Support Section */}
          <div>
            <h3 className="text-gray-800 text-xl font-semibold ">
              Personal support & guidance
            </h3>
            <p className="text-gray-600">
              Each Affiliate is accompanied by an Affiliate manager.<br />
              <span className="text-blue-500 cursor-pointer">Contact us</span> for further information - we will be happy to assist!
            </p>
          </div>
        </div>

        <button className="bg-[#FABC3F] text-[#001653]  px-12 py-4 rounded w-fit text-lg font-semibold hover:bg-opacity-90 transition-all">
          JOIN NOW
        </button>
      </div>
    </div>
  );
};

export default AffiliateStartEarningSection;