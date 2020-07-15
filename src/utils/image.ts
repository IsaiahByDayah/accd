interface PlaceholderOptions {
    height?: number
    h?: number
    width?: number
    w?: number
    text?: string
    format?: "gif" | "jpg" | "jpeg" | "png"
}
export const placeholderImage = (options: PlaceholderOptions = {}) => {
    const h = options.height || options.h || 150
    const w = options.width || options.w || 150
    const t = options.text ? `?text=${options.text.replace(" ", "+")}` : ""
    const format = options.format || "jpg"
    return `https://via.placeholder.com/${w}x${h}.${format}${t}`
}

export const getImageSize = (source: string | Blob): Promise<{ height: number; width: number }> => {
    const src = source instanceof Blob ? URL.createObjectURL(source) : source
    return new Promise<{ height: number; width: number }>((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            resolve({ height: img.height, width: img.width })
        }
        img.onerror = e => reject(e)
        img.src = src
    })
}
