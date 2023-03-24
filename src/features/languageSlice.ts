import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface LanguageState {
    language: string
}

const initialState: LanguageState = {
    language: "pl"
}

export const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        }
    }
})

export const { setLanguage } = LanguageSlice.actions

export const language = (state: RootState) => state.language.language

export default LanguageSlice.reducer