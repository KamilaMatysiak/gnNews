import { store } from "../app/store";
import { describe, test  } from "vitest";
import { fetchCountries } from "../features/countriesSlice";

describe("fetch countries data", () => {
    test("initial state of countries state", () => {
        const state = store.getState().countries
        expect(state.countries).toEqual([])
    })

    test("fetching countries", async () => {
        const result = await store.dispatch(fetchCountries())
        expect(result.payload).not.toBeNull()
        expect(result.payload.articles).not.toBe([])
    }) 
})