import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false
        },

        resources: {
            pl: {
                translation: {
                    feedbackButton: "Pokaż",
                    articlesNumber: "Liczba artykułów: ",
                }
            },

            en: {
                translation: {
                    feedbackButton: "Show",
                    articlesNumber: "Number of articles: ",
                }
            }
        }
    })

export default i18n;