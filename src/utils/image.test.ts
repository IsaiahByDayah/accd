import { placeholderImage } from "./image"

describe("Image Util Functions", () => {
    describe("placeholderImage", () => {
        it("Should use default values", () => {
            const expected = "https://via.placeholder.com/150x150.jpg"
            expect(placeholderImage()).toEqual(expected)
        })
        it("Should apply width value", () => {
            const expected = "https://via.placeholder.com/100x150.jpg"
            expect(placeholderImage({ width: 100 })).toEqual(expected)
            expect(placeholderImage({ w: 100 })).toEqual(expected)
        })
        it("Should apply height value", () => {
            const expected = "https://via.placeholder.com/150x100.jpg"
            expect(placeholderImage({ height: 100 })).toEqual(expected)
            expect(placeholderImage({ h: 100 })).toEqual(expected)
        })
        it("Should apply format value", () => {
            const expected = "https://via.placeholder.com/150x150.png"
            expect(placeholderImage({ format: "png" })).toEqual(expected)
        })
        it("Should apply text value", () => {
            const expected = "https://via.placeholder.com/150x150.jpg?text=Hello+World"
            expect(placeholderImage({ text: "Hello World" })).toEqual(expected)
        })
    })
})
