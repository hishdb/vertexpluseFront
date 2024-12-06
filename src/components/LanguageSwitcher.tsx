import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

// Define supported languages
const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },   
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },       
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },     
  { code: 'fr', name: 'French', flag: '🇫🇷' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Get current language
  const currentLanguage = LANGUAGES.find(
    (lang) => lang.code === i18n.language
  ) || LANGUAGES[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 text-blue-900 hover:text-blue-600 focus:outline-none"
      >
        <FaGlobe className="w-5 h-5" />
        <span className="text-sm font-medium">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center space-x-2 ${
                i18n.language === language.code 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'text-gray-700'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;