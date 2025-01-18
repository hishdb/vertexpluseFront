import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/vertexpluse.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuLinkProps {
  label: string;
  isActive: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: React.ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  label,
  isActive,
  onMouseEnter,
  onMouseLeave,
  children,
}) => (
  <div
    className={`relative group cursor-pointer px-2 lg:px-4 py-2 ${
      isActive ? "bg-blue-900 text-white rounded-t-lg" : "hover:text-blue-500"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="flex items-center space-x-1 text-sm lg:text-base">
      {label}
      <ArrowDropDownIcon className="w-4 h-4 lg:w-6 lg:h-6" />
    </span>
    {isActive && children}
  </div>
);

interface DropdownProps {
  items: MenuItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => (
  <div className="absolute left-0 mt-2 w-48 md:w-60 bg-blue-900 shadow-lg z-50 rounded-b-lg rounded-tr-lg">
    {items.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="block px-3 md:px-4 py-2 text-white text-sm md:text-md hover:bg-blue-300 hover:text-gray-200 transition-colors duration-200"
      >
        {item.label}
      </a>
    ))}
  </div>
);

const MenuBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const {t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const marketItems: MenuItem[] = [
    { label: t("Crypto"), href: "/crypto" },
    { label: t("Indices"), href: "/indices" },
    { label: t("Forex"), href: "/forex" },
    { label: t("Commodities"), href: "/commodities" },
    { label: t("Shares"), href: "/shares" },
    { label: t("Options"), href: "/options" },
    { label: t("ETFs"), href: "/etfs" },
    { label: t("All Markets"), href: "/all-markets" },
  ];

  const tradingItems: MenuItem[] = [
    { label: t("Premium Service"), href: "/PremiumService" },
    { label: t("Fees & Charges"), href: "/FeesCharges" },
    { label: t("ESG"), href: "/ESG" },
 
  ];

  const companyItems: MenuItem[] = [
    { label: t("About Us"), href: "/About Us" },
    { label: t("Affiliate"), href: "/Affiliate" },
    { label: t("Investor Relations"), href: "/Investor Relations" },
  ];

  /*const educationItems: MenuItem[] = [
    { label: t("Trading Academy"), href: "/TradingAcademy" },
    { label: t("News & Market Insights"), href: "/NewsMarketInsights" },
    { label: t("+Insights"), href: "/Insights" },
    { label: t("Economic Calendar"), href: "/EconomicCalendar" },
    { label: t("Risk Management"), href: "/RiskManagement" },
    { label: t("Alerts"), href: "/Alerts" },
  ];*/

  const categories = [
    { label: t("Markets"), items: marketItems },
    { label: t("Trading"), items: tradingItems },
    { label: t("Company"), items: companyItems },
    
  ];

  const handleMenuHover = (menu: string | null) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 200;
      const newOpacity = Math.max(0.85, 1 - scrollTop / maxScroll);
      setBackgroundOpacity(newOpacity);
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      dir= {isRTL ? "rtl" : "ltr"}
      className={`bg-white text-blue-900 py-4 md:py-4 px-4 md:px-6 fixed top-0 left-0 w-full z-50 shadow-md transition-opacity duration-300 ${
        isScrolled ? "rounded-b-2xl" : ""
      }`} 
      style={{
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            <img
              src={logo}
              alt="Logo"
              className="h-8 md:h-10 lg:h-12"
            />
          </Link>
          <LanguageSwitcher />
          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 mr-2 text-xs font-semibold rounded">
              {t("Trade")}
            </button>
            <button
              className="text-blue-900 hover:text-blue-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4 xl:space-x-6 w-full justify-end">
          <div className="flex items-center space-x-2 lg:space-x-4">
            {categories.map((category) => (
              <MenuLink
                key={category.label}
                label={category.label}
                isActive={activeMenu === category.label}
                onMouseEnter={() => handleMenuHover(category.label)}
                onMouseLeave={handleMenuLeave}
              >
                <Dropdown items={category.items} />
              </MenuLink>
            ))}
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Login Button */}
          <a
          href="https://platform.vertexpluse.com/login" // External login URL
          className="px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm font-semibold text-blue-700 hover:text-blue-500"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Ensures security and performance
        >
          {t("Login")}
        </a>

        {/* Start Trading Button */}
        <a
          href="https://platform.vertexpluse.com/register" // External register URL
          className="bg-blue-600 text-white hover:bg-blue-700 hover:text-black px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm font-semibold rounded"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Ensures security and performance
        >
          {t("StartTrading")}
        </a>

        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 text-white h-screen overflow-y-auto fixed inset-0 z-50 flex flex-col">
          <div className="flex items-center justify-between p-4">
            {/* Close Button */}
            <button className="self-end text-xl text-white" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-grow p-6">
            {categories.map((category) => (
              <div key={category.label} className="mb-4">
                <button
                  className={`flex justify-between items-center w-full text-left text-base font-semibold ${
                    activeMenu === category.label
                      ? "text-blue-300"
                      : "text-white"
                  }`}
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === category.label ? null : category.label
                    )
                  }
                >
                  {category.label}
                  <ArrowDropDownIcon />
                </button>
                {activeMenu === category.label && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {category.items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="block hover:text-blue-300"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;