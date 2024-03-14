import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languageDetector, languageDetectorOptions } from "./lang-detector";
import Pt from "./languages/pt";
import En from "./languages/en";

const resources = {
    en: En,
    pt: Pt
};

i18n.use(languageDetector)
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        detection: languageDetectorOptions,
        resources,
        // supportedLngs: ["pt", "en"],
        // lng: "pt", // fallback language is portuguese
        fallbackLng: ["pt", "en"],

        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    });

export default i18n;