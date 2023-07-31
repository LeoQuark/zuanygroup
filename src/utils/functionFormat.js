export const formatText = (text) => {
    const nameLower = text.toLowerCase()
    return nameLower.charAt(0).toUpperCase() + nameLower.slice(1)
}