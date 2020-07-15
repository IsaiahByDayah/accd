import { isEmail, paddedString, slugify, emailUrl } from "./string"

describe("String Utility Functions", () => {
    describe("slugify", () => {
        test("should replace underscores, excess dashes, and whitespace with a single dash", () => {
            const str = "abc_123---foo bar"
            const expected = "abc-123-foo-bar"
            expect(slugify(str)).toBe(expected)
        })
        test("should remove non alpha-numeric characters", () => {
            const str = "abc/123?def=456+ghi"
            const expected = "abc123def456ghi"
            expect(slugify(str)).toBe(expected)
        })
        test("should return string with only lowercase letter", () => {
            const str = "ABC123dEf zyX"
            const expected = "abc123def-zyx"
            expect(slugify(str)).toBe(expected)
        })
    })

    describe("paddedString", () => {
        test("should pad string with specified filler up to specified length", () => {
            const str = "1"
            const expected = "xxx1"
            expect(paddedString(str, 4, "x")).toBe(expected)
        })

        test("should not pad string if already specified length", () => {
            const str = "1234"
            const expected = "1234"
            expect(paddedString(str, 4, "x")).toBe(expected)
        })

        test("should not alter string if longer than specified length", () => {
            const str = "123456"
            const expected = "123456"
            expect(paddedString(str, 4, "x")).toBe(expected)
        })
    })

    describe("isEmail", () => {
        test("should validate correct email", () => {
            const email = "example@gmail.com"
            expect(isEmail(email)).toEqual(true)
        })
        test("should reject non emails", () => {
            const emails = ["", "0", "null", "aj;jahielhg@gmail.com", "no@gmail.c"]
            emails.forEach(email => expect(isEmail(email)).toEqual(false))
        })
    })

    describe("emailUrl", () => {
        const email = "example@gmail.com"
        test("returns correct email", () => {
            const url = "mailto:example@gmail.com"
            expect(emailUrl(email)).toEqual(url)
        })

        describe("should handle adding a subject", () => {
            test("single word", () => {
                const url = "mailto:example@gmail.com?subject=Hello"
                expect(emailUrl(email, { subject: "Hello" })).toEqual(url)
            })
            test("spaces", () => {
                const url = "mailto:example@gmail.com?subject=foo%20bar"
                expect(emailUrl(email, { subject: "foo bar" })).toEqual(url)
            })
            test("punctuation", () => {
                const url = "mailto:example@gmail.com?subject=Hello,%20World!"
                expect(emailUrl(email, { subject: "Hello, World!" })).toEqual(url)
            })
        })
    })
})
