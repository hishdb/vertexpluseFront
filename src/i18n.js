import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files (JSON format)
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import ru from "./locales/ru.json";
import fr from "./locales/fr.json";

i18n
  .use(LanguageDetector) // Automatically detects user's language
  .use(initReactI18next) // Integrates with React
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ru: { translation: ru },
      fr: { translation: fr },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
