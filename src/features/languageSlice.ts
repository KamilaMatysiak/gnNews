import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface LanguageState {
    language: string
}

const initialState: LanguageState = {
    language: localStorage.getItem("language") || "pl"
}

export const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
            localStorage.setItem("language", state.language)
        }
    }
})

export const { setLanguage } = LanguageSlice.actions

export const language = (state: RootState) => state.language.language

export default LanguageSlice.reducer