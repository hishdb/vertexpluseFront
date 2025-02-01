import premiumBackground from '../assets/proMale.webp';
import manWithSuitBackground from '../assets/manWitthSuiteBackground.webp';
import Background from '../assets/rectanglesBackground.webp';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import WhyVertexPluse from '../components/WhyVertexpluse';
import WeSponsor from '../components/WeSponsor';
import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function PremiumService() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
  return (
    <div className="flex flex-col min-h-screen ">
    <MenuBar />
  
    <main className="flex-grow">
      <div className="text-white min-h-screen w-full overflow-hidden">
        <div  
        className="bg-center bg-repeat-y bg-contain"
        style={{
            backgroundImage: `url(${Background})`,
          }}>
        {/* Top Section */}
        <div
          className="relative flex items-center justify-start bg-auto bg-no-repeat bg-right-top py-12 md:py-20 lg:py-60"
          style={{
            backgroundImage: `url(${premiumBackground})`,
            height: "82vh",
          }}
        >
          {/* Overlay */}
        
          <div className={`relative max-w-5xl  ${isRTL ? 'mr-10 lg:mr-20' : 'ml-10 lg:ml-20'} text-start lg:pl-20  ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex flex-col items-start space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                VertexPluse  <span className="text-yellow-300 text-2xl md:text-5xl lg:text-6xl">{t("--PremiumService")}</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-light max-w-3xl">
                {t("VertexPlusesNewPremiumServiceOffersTailorMade")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Now positioned to overlap */}
        <div className="relative  -mt-32 md:-mt-32 lg:-mt-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className={`bg-white border-2 border-yellow-300 p-6 sm:p-8 lg:p-12 shadow-xl  ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-900 text-center">
                {t("PremiumServicePackage")}
              </h2>
              <p className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-blue-800 mt-2">
                {t("AsPartOfOurPremiumService")}
              </p>
              <ul className="mt-8 space-y-6 text-sm sm:text-lg md:text-lg lg:text-xl text-gray-700">
                <li className="flex items-center gap-4">
                  <span className="text-yellow-300 text-4xl font-bold">+</span>
                  <span className="flex-1">
                    {t("ADedicatedPremiumService")}<span className="text-yellow-300 font-medium ml-2">{t("ClientManager")}</span>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-yellow-300 text-4xl font-bold">+</span>
                  <span className="flex-1">
                    {t("PeriodicEmailsContaining")}<span className="text-yellow-300 font-medium ml-2">{t("ExpertAnalysis")}</span><span className="ml-2">{t("OfUpcomingTradingEvents")}</span>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-yellow-300 text-4xl font-bold">+</span>
                  <span className="flex-1">
                    {t("ExternalTradingWebinars")}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-yellow-300 text-4xl font-bold">+</span>
                  <span className="flex-1">
                    {t("PremiumServiceCustomerSupportTeam")}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-yellow-300 text-4xl font-bold">+</span>
                  <span className="flex-1">
                    {t("AdditionalFeaturesToCome")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Premium Client Section */}
        <div className={`-mt-32 md:-mt-32 lg:-mt-20 py-0 sm:py-12 md:py-20 items-center justify-start bg-auto bg-no-repeat bg-right-top text-white ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}
         style={{
          backgroundImage: `url(${manWithSuitBackground})`,
        }}>
          <div className="mx-auto px-6 sm:px-12 md:px-40 lg:px-40 mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-yellow-300">
              {t("BecomeAPremiumClient")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 flex flex-col items-center space-y-4">
                <div className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl">
                  <IoBarChartSharp />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {t("HoldARealTradingAccount")}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  {t("ToBecomeAVertexPlusePremiumCustomer")}
                </p>
              </div>
              {/* Card 2 */}
              <div className="p-6 flex flex-col items-center space-y-4">
                <div className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl">
                  <MdOutlineRateReview />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {t("AccountReview")}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  {t("VertexPlusePremiumServiceInvitationOnly")}
                </p>
              </div>
              {/* Card 3 */}
              <div className="p-6 flex flex-col items-center space-y-4">
                <div className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl">
                  <IoCheckmarkDoneCircle />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {t("EnjoyOurPremiumService")}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  {t("CongratulationsPremiumServiceOffer")}
                </p>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = "https://platform.vertexpluse.com/register"}
            className="mt-10 px-20 py-5 bg-yellow-300 text-blue-900 text-sm sm:text-base md:text-lg lg:text-xl rounded-md font-semibold hover:bg-yellow-600 transition">
              {t("StartTradingNow")}
            </button>
          </div>
        </div>
        </div>


          <WhyVertexPluse/>
          <div className="bg-gradient-to-b from-blue-950 to-blue-300 mt-20">
          <WeSponsor/>
          </div>
          
        </div>
      </main>
    <Footer />
</div>
  );
}

export default PremiumService;
