// REF: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
// NOTE: MUI offers similar functions out-of-the-box in @material-ui/core/styles/colorManipulator
export const hexToRGB = (hex: string, defaultRGB: [number, number, number] = [0, 0, 0]): [number, number, number] => {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        let colors = hex.substring(1).split("")
        if (colors.length == 3) {
            colors = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]]
        }
        const color = parseInt(`0x${colors.join("")}`, 16)
        return [(color >> 16) & 255, (color >> 8) & 255, color & 255]
    }
    return defaultRGB
}
