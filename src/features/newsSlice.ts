import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { NEWS_API_URL } from "../constants";


export const fetchNews = createAsyncThunk('fetchNews', async (country:string) =>{
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=70e3710ad8e841289654fe82fa5f3e3b`);
    return res.data;
})

export type ArticleType = {
    author: string
    title: string
    url: string
    publishedAt: string
    urlToImage: string
}

export type NewsType = {
    news: {
        totalResults: Number
        articles: ArticleType
    }
}

interface NewsState {
    news: {
        totalResults: Number
        articles: []
        isLoading: boolean
    }

}

const initialState: NewsState = {
    news: {
        totalResults: 0,
        articles: [],
        isLoading: true
    },

}

export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action: PayloadAction<{articles: [], totalResults: Number, isLoading: boolean}>) => {
            state.news = action.payload
            state.news.isLoading = false
        })
    }   
})

export default NewsSlice.reducer