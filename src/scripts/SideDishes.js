import { setSideId } from "./TransientState.js"

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "side") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSideId(convertedToInteger) //sets transient state to user's clicked choice
    }
}

export const SideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChange)

    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = sides.map(
        (side) => {
            return `<div>
            <input type='radio' name='side' value='${side.id}' /> ${side.title}
            </div>`
        }
    )
    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}