import secureLock from "../assets/secure-lock.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import x from "../assets/x.png";
import supporticon from "../assets/supporticon.png";
import getitongoogleplay from "../assets/getitongoogleplay.png";

function Footer () {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Need Help Bar */}
      <div className="bg-blue-500 py-10 flex justify-center items-center">
        <p className="text-3xl font-normal">Need Help?</p>
        <button className="ml-6 px-8 py-2 border border-white text-white font-semibold rounded-md shadow hover:bg-white hover:text-blue-500 transition duration-200 flex items-center space-x-2">
          <span>24/7 Support</span>
          <img src={supporticon} alt="support" height="30" width="30" />
      </button>

      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between md:text-left px-6 md:px-20 py-40 space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="md:w-3/6 space-y-4">
          <p className="text-md font-medium">
            Remember that CFDs are a leveraged product and can result in the
            loss of your entire capital. Trading CFDs may not be suitable for
            you. Please ensure you fully understand the risks involved.
          </p>
          <p className="text-md font-medium">
            Plus500 is mainly compensated for its services through the Bid/Ask
            spread. Check our Fees & Charges.
          </p>
          <p className="text-md font-medium">Plus500 is a trademark of Plus500 Ltd.</p>
          <p className="text-md font-medium">
            The S&P 500, Dow Jones Industrial Average and S&P/ASX 200 Indices
            are products of S&P Dow Jones Indices LLC (“SPDJI”) and/or its
            licensors. S&P 500®, USA 500, USA 30 are trademarks of Standard &
            Poor’s Financial Services LLC (“S&P”); Dow Jones® is a trademark of
            Dow Jones Trademark Holdings LLC (“Dow Jones”). ASX® is a trademark
            of the Australian Securities Exchange. Plus500 products are not
            sponsored, endorsed, sold or promoted by SPDJI, Dow Jones, ASX or
            their affiliates and none makes any representation about investing
            in such product(s) or has any liability for any errors, omissions,
            or interruptions of the indices.
          </p>
          <p className="text-md font-medium">
            <span className="flex items-center justify-center md:justify-start space-x-2">
              <span>
                <img src={secureLock} alt="secureLock"/>
              </span>
              <p>Secured by SSL. Copyright © Plus500. All rights reserved.</p>
            </span>
          </p>

        </div>

        {/* Right Section */}
        <div className="md:w-2/6 flex flex-col items-center md:items-start space-y-8">
          <div>
            <p className="text-lg font-semibold mb-2">Follow Us On:</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><img src={facebook} alt="facebook"  className="h-8 md:h-10"/></a>
              <a href="#" aria-label="X"><img src={x} alt="X" className="h-8 md:h-10"/></a>
              <a href="#" aria-label="Instagram"><img src={instagram} alt="instagram" className="h-8 md:h-10"/></a>
              <a href="#" aria-label="Telegram"><img src={telegram} alt="telegram" className="h-8 md:h-10"/></a>
            </div>
          </div>
          <div >
          <a href="#">
            <img
              src="https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/en-gb"
              alt="appstore app"
              width="200"
              height="80"
            />
          </a>
          <a href="#" className="ml-4">
            <img
              src={getitongoogleplay}
              alt="google play app"
              width="200"
              height="80"
            />
          </a>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
