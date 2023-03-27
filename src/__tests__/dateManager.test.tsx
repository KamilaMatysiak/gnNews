import { store } from "../app/store";
import { describe, expect  } from "vitest";
import { setLanguage } from "../features/languageSlice";
import { formatDate, getDate, getTime } from "../utils/dateManager";

const date ='2023-03-27T12:34:15.119Z'
const testDate = new Date(date)

describe("format the date", () => {
    it('should return formatted date', () =>{
        const formattedDate = getDate(testDate)
        expect(formattedDate).toEqual('27.03.2023')
    })

    it('should return formatted time with seconds', () =>{
        const formattedDate = getTime(testDate, true)
        expect(formattedDate).toEqual('14:34:15')
    })

    it('should return formatted time without seconds', () =>{
        const formattedDate = getTime(testDate)
        expect(formattedDate).toEqual('14:34')
    })

    it('should return formatted datetime', () =>{
        const formattedDate = formatDate(date)
        expect(formattedDate).toEqual('27.03.2023 14:34')
    })


})