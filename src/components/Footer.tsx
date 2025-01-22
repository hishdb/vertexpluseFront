import secureLock from "../assets/secure-lock.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import x from "../assets/x.png";
import supporticon from "../assets/supporticon.png";
import getitongoogleplay from "../assets/getitongoogleplay.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [timeLeft, setTimeLeft] = useState("");

    const fetchCountdown = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/countdown");
        const { remainingTime } = response.data;

        if (remainingTime) {
          const { days, hours, minutes, seconds } = remainingTime;
          setTimeLeft(`${days} ${t("days")}, ${hours} ${t("hours")}, ${minutes} ${t("minutes")}, ${seconds} ${t("seconds")}`);
        } else {
          setTimeLeft("Countdown completed!");
        }
      } catch (error) {
        console.error("Error fetching countdown:", error);
        setTimeLeft("Error fetching countdown.");
      }
    };


  useEffect(() => {
    fetchCountdown();
    const intervalId = setInterval(fetchCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <footer className="bg-blue-950 text-white">
      {/* Need Help Bar */}
      <div className="bg-blue-500 py-10 flex justify-center items-center">
        <p className="text-3xl font-normal">{t("NeedHelp")}</p>
        <a
          href="https://vertexpluse.com/Support"
          className="ml-6 px-8 py-2 border border-white text-white font-semibold rounded-md shadow hover:bg-white hover:text-blue-500 transition duration-200 flex items-center space-x-2"
        >
          <span>{t("Support247Support")}</span>
          <img src={supporticon} alt="support" height="30" width="30" />
        </a>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between md:text-left px-6 md:px-20 py-40 space-y-8 md:space-y-0">
        {/* Left Section */}
        <div
          className="md:w-3/6 space-y-4"
        
        >
          <p className="text-md font-medium"   dir={isRTL ? "rtl" : "ltr"}>{t("RememberThatCFDs")}</p>
          <p className="text-md font-medium"   dir={isRTL ? "rtl" : "ltr"}>{t("VertexPluseIsMainly")}</p>
          <p className="text-md font-medium"   dir={isRTL ? "rtl" : "ltr"}>{t("VertexPluseIsATrademark")}</p>
          <p className="text-md font-medium"   dir={isRTL ? "rtl" : "ltr"}>{t("TheSP500Dow")}</p>
          <div className="flex items-center justify-center md:justify-start space-x-2"   dir={isRTL ? "rtl" : "ltr"}>
              <img src={secureLock} alt="secureLock" />
              <p className="text-md font-medium">{t("SecuredBySSL")}</p>
          </div>
          </div>

        {/* Right Section */}
        <div className="md:w-2/6 flex flex-col items-center md:items-start space-y-8" >
          <div>
            <p className="text-lg font-semibold mb-2" dir={isRTL ? "rtl" : "ltr"}>{t("FollowUsOn")}</p>


            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="facebook" className="h-8 md:h-10" />
              </a>
              <a href="#" aria-label="X">
                <img src={x} alt="X" className="h-8 md:h-10" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="instagram" className="h-8 md:h-10" />
              </a>
              <a href="#" aria-label="Telegram">
                <img src={telegram} alt="telegram" className="h-8 md:h-10" />
              </a>
            </div>
          </div>
          <div>
            {/* Countdown */}
            <p className="text-md text-blue-300 font-medium mb-4"   dir={isRTL ? "rtl" : "ltr"}>
              {t("Availableon")} {timeLeft}
            </p>
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
}

export default Footer;
