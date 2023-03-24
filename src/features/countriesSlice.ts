import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { COUNTRIES_API_URL } from "../constants";


export const fetchCountries = createAsyncThunk('fetchCountries', async () =>{
    const res = await axios.get(COUNTRIES_API_URL);
    return res.data;
})

export type CountryType = {
    name: {common: string}
    flags: {svg: string}
}

interface CountriesState {
    countries: []
    error: string
}

const initialState: CountriesState = {
    countries: [],
    error: ""    
}

export const CountriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<[]>) => {
            state.countries = action.payload
            state.error = ""
        })
    },   
})

export default CountriesSlice.reducer