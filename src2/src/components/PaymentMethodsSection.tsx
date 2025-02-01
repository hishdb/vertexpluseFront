import visaLogo from "../assets/visa.svg"; // Replace with the path to your Visa logo
import mastercardLogo from "../assets/mastercard.svg"; // Replace with the path to your Mastercard logo
import exchangeLogo from "../assets/wire.svg"; // Replace with the path to your third logo
import { useTranslation } from "react-i18next";

function PaymentMethodsSection() {
  const {t} = useTranslation();
  return (
    <div className="relative bg-transparent py-10">
      {/* Logos Section */}
      <div className="flex justify-center items-center space-x-20">
        <img
          src={visaLogo}
          alt="Visa Logo"
          className="w-24 h-auto object-contain"
        />
        <img
          src={mastercardLogo}
          alt="Mastercard Logo"
          className="w-16 h-auto object-contain"
        />
        <img
          src={exchangeLogo}
          alt="Exchange Logo"
          className="w-16 h-auto object-contain"
        />
      </div>

      {/* Description */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        {t("VertexPluseOffersGlobalPaymentMethods")}
      </p>
    </div>
  );
}

export default PaymentMethodsSection;
