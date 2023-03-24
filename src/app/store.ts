import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countriesSlice";
import feedbackModalSlice from "../features/feedbackSlice";
import lightModeSlice from "../features/lightModeSlice";
import newsViewSlice from "../features/newsViewSlice";
import sidebarSlice from "../features/sidebarSlice";
import languageSlice from "../features/languageSlice";

export const store = configureStore({
    reducer: {
        newsView: newsViewSlice,
        lightMode: lightModeSlice,
        language: languageSlice,
        sidebar: sidebarSlice,
        countries: countriesSlice,
        feedbackModal: feedbackModalSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch