import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import logo from "../assets/vertexpluse.png";
import { FaBars, FaTimes } from "react-icons/fa";

type MenuItem = {
  label: string;
  href: string;
};

function MenuBar () {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuHover = (menu: string | null) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const marketItems: MenuItem[] = [
    { label: "Crypto", href: "/crypto" },
    { label: "Indices", href: "/indices" },
    { label: "Forex", href: "/forex" },
    { label: "Commodities", href: "/commodities" },
    { label: "Shares", href: "/shares" },
    { label: "Options", href: "/options" },
    { label: "ETFs", href: "/etfs" },
    { label: "All Markets", href: "/all-markets" },
  ];

  const tradingItems: MenuItem[] = [
    { label: "About Us", href: "/About Us" },
    { label: "Affiliate", href: "/Affiliate" },
    { label: "Investor Relations", href: "/Investor Relations" },
    { label: "Cookies & Privacy", href: "/CookiesPrivacy" },
  ];

  const company: MenuItem[] = [
    { label: "Premium Service", href: "/PremiumService" },
    { label: "Fees & Charges", href: "/FeesCharges" },
    { label: "ESG", href: "/ESG" },
  ];

  const education: MenuItem[] = [
    { label: "Trading Academy", href: "/TradingAcademy" },
    { label: "News & Market Insights", href: "/NewsMarketInsights" },
    { label: "+Insights", href: "/Insights" },
    { label: "Economic Calendar", href: "/EconomicCalendar" },
    { label: "Risk Management", href: "/RiskManagement" },
    { label: "Alerts", href: "/Alerts" },
  ];

  const categories = [
    { label: "Markets", items: marketItems },
    { label: "Trading", items: tradingItems },
    { label: "Company", items: company },
    { label: "Education", items: education },
  ];

  return (
    <nav className="bg-white text-blue-900 py-4 px-6 relative">
      <div className="flex justify-center items-center space-x-60">
       

        {/* Mobile Menu Toggle */}
        <div className="flex  space-x-20">
  {/* Logo */}
  <Link to="/" className="font-bold text-xl">
    <img
      src={logo}
      alt="Logo"
      className="h-10 md:h-12" // Adjust height for mobile and desktop
    />
  </Link>

  {/* Mobile Menu Toggle */}
  <div className="flex items-center space-x-2 md:hidden">
    <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 mr-4 text-sm font-semibold rounded">
      Trade
    </button>
    <button
      className="text-blue-900 hover:text-blue-600 focus:outline-none"
      onClick={toggleMenu}
    >
      {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  </div>
</div>



        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
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
          <div className="flex items-center space-x-4">
            <button className="px-10 py-2 text-sm font-semibold text-blue-700 hover:text-blue-500">
              Login
            </button>
            <button className="bg-blue-600 text-white hover:bg-blue-700 hover:text-black px-10 py-2 text-sm font-semibold rounded">
              Start Trading
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        
  <div className="md:hidden bg-blue-900 text-white fixed inset-0 z-50 flex flex-col">
    <div className="flex items-center justify-between p-4">
   

      {/* Close Button */}
      <button
        className="self-end text-xl text-white"
        onClick={toggleMenu}
      >
        <FaTimes />
      </button>
    </div>

    {/* Mobile Menu Content */}
    <div className="flex-grow p-6">
      {categories.map((category) => (
        <div key={category.label} className="mb-4">
          <button
            className={`flex justify-between items-center w-full text-left text-lg font-semibold ${
              activeMenu === category.label ? "text-blue-300" : "text-white"
            }`}
            onClick={() =>
              setActiveMenu(activeMenu === category.label ? null : category.label)
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
    className={`relative group cursor-pointer px-4 py-2 ${
      isActive ? "bg-blue-900 text-white rounded-t-lg" : "hover:text-blue-500"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="flex items-center space-x-1">
      {label}
      <ArrowDropDownIcon />
    </span>
    {isActive && children}
  </div>
);

interface DropdownProps {
  items: MenuItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => (
  <div className="absolute left-0 mt-2 w-60 bg-blue-900 shadow-lg z-50 rounded-b-lg rounded-tr-lg">
    {items.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="block px-4 py-2 text-white text-md hover:bg-blue-300 hover:text-gray-200 transition-colors duration-200"
      >
        {item.label}
      </a>
    ))}
  </div>
);

export default MenuBar;
