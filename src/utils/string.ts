// Creates a slug formatted string from supplied string
export const slugify = (str: string): string => {
    return str
        .replace(/(_|-{2,}|\s+)/g, "-")
        .replace(/[^a-zA-Z0-9-]/g, "")
        .replace(/^(-*)/, "")
        .replace(/-{2,}/g, "-")
        .replace(/(-*)$/, "")
        .toLowerCase()
        .trim()
}

export const paddedString = (val: number | string, minLength: number, filler = "0"): string => {
    filler = filler.length > 0 ? filler : "0" // make sure its not empty
    filler = filler[0] // limit to one character
    const padLength = Math.max(val.toString().length, minLength)
    const padded = filler.repeat(padLength) + val
    return padded.slice(-padLength)
}

const emailPattern = new RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

export const isEmail = (email: string): boolean => {
    return emailPattern.test(email)
}

interface EmailOptions {
    subject?: string
}
export const emailUrl = (email: string, { subject }: EmailOptions = {}): string => {
    return `mailto:${email}${subject ? `?subject=${encodeURI(subject)}` : ""}`
}
