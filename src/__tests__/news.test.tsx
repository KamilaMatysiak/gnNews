import { store } from "../app/store";
import { describe, test  } from "vitest";
import { fetchNews } from "../features/newsSlice";
import { setView } from "../features/newsViewSlice";

describe("fetch news data", () => {
    test("initial state of news state", () => {
        const state = store.getState().news.news
        expect(state.articles).toEqual([])
        expect(state.totalResults).toEqual(0)
    })

    test("fetching news", async () => {
        const result = await store.dispatch(fetchNews("pl"))
        expect(result.payload).not.toBeNull()
        expect(result.payload.articles).not.toBe([])
    }) 
})

describe("way of displaying news", () => {
    it('should show initial state of newsView', () => {
        const state = store.getState().newsView
        expect(state.mode).toEqual('tiles')
    })

    it('should change news view to list view', () => {
        const result = store.dispatch(setView('list'))
        const mode = result.payload
        expect(mode).toBe('list')
    })
})