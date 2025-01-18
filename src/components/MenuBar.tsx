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
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Your existing menu items...
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
      dir={isRTL ? "rtl" : "ltr"}
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
            <img src={logo} alt="Logo" className="h-8 md:h-10 lg:h-12" />
          </Link>
          <LanguageSwitcher />
          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
                        <a
                href="https://platform.vertexpluse.com/register"
           className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 mr-2 text-xs font-semibold rounded">
              {t("Trade")}
            </a>
            <button
              className="text-blue-900 hover:text-blue-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu - Keeping exactly the same */}
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
            <a
              href="https://platform.vertexpluse.com/login"
              className="px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm font-semibold text-blue-700 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Login")}
            </a>
            <a
              href="https://platform.vertexpluse.com/register"
              className="bg-blue-600 text-white hover:bg-blue-700 hover:text-black px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm font-semibold rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("StartTrading")}
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col bg-white">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="font-bold text-xl" onClick={toggleMenu}>
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              <FaTimes size={24} className="text-blue-900" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto">
            {categories.map((category) => (
              <div key={category.label} className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full p-4 text-left"
                  onClick={() =>
                    setActiveMenu(activeMenu === category.label ? null : category.label)
                  }
                >
                  <span className="text-lg font-medium text-blue-900">
                    {category.label}
                  </span>
                  <ArrowDropDownIcon
                    className={`transform transition-transform duration-200 ${
                      activeMenu === category.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    activeMenu === category.label ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="bg-gray-50 px-4 py-2">
                    {category.items.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block py-3 text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex flex-col space-y-3">
              <a
                href="https://platform.vertexpluse.com/login"
                className="block w-full py-3 text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                {t("Login")}
              </a>
              <a
                href="https://platform.vertexpluse.com/register"
                className="block w-full py-3 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                {t("StartTrading")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;