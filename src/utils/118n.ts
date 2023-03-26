import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: localStorage.getItem('language') || 'pl',
        interpolation: {
            escapeValue: false
        },

        resources: {
            pl: {
                translation: {
                    feedbackButton: "Pokaż",
                    articlesNumber: "Liczba artykułów: ",
                    noNews: "Nie znaleziono żadnych wiadomości"
                }
            },

            en: {
                translation: {
                    feedbackButton: "Show",
                    articlesNumber: "Number of articles: ",
                    noNews: "No articles were found",
                }
            }
        }
    })

export default i18n;