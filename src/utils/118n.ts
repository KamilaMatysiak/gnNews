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
                    noNews: "Nie znaleziono żadnych wiadomości",
                    //feedbackModal
                    easy: "Przyjemności",
                    hard: "Trudności",
                    design: "Zaprojektowanie strony",
                    implement: "Zaimplementowanie UI",
                    redux: "Ogarnięcie Reduxa z TypeScriptem",
                    test: "Testy",
                }
            },

            en: {
                translation: {
                    feedbackButton: "Show",
                    articlesNumber: "Number of articles: ",
                    noNews: "No articles were found",
                    //feedbackModal
                    easy: 'Fun',
                    hard: 'Struggles',
                    design: "Designing the page",
                    implement: "Implementing UI",
                    redux: "Figuring out how redux works with Typescript",
                    test: "Tests"
                }
            }
        }
    })

export default i18n;