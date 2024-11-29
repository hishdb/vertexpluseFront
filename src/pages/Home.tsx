import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import GlobalMarketsSection from "../components/GlobalMarketsSection";
import CoverAnimation from "../components/CoverAnimation";
import FeaturesSection from "../components/FeaturesSection";
import InsightsIntroductionSection from "../components/InsightsIntroductionSection";
import PlusInfoUsersNumberSection from "../components/PlusInfoUsersNumberSection";
import WhyVertexPluse from "../components/WhyVertexpluse";
import PaymentMethodsSection from "../components/PaymentMethodsSection";
import TradingSlider from "../components/TradingSlider";


function Home() {
  return (
  <div className="flex flex-col min-h-screen">
  <MenuBar />
  
  <main className="flex-grow ">

    <CoverAnimation/>  
    {/* Black Bar */}
    <div className="bg-black text-white flex justify-center items-center px-6 py-6 relative">
      <p className="text-sm md:text-3xl flex items-center">
        Official Partner of the NBA's iconic basketball team
        <img
          src="https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg"
          alt="Chicago Bulls Logo"
          className="ml-3 h-6 md:h-8"
        />
      </p>
    </div>

     {/* Gradient Shadow */}
     <div className="w-full h-20 bg-gradient-to-b from-blue-100 to-tranparent"></div>

     <GlobalMarketsSection/>
     <FeaturesSection/>
     <InsightsIntroductionSection/>
     <PlusInfoUsersNumberSection/>
     <WhyVertexPluse/>
     <PaymentMethodsSection/>
     
     <TradingSlider/>
    
  </main>
  <Footer />
</div>

  );
}




export default Home;