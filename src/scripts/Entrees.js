import { setEntreeId } from "./TransientState.js"

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setEntreeId(convertedToInteger) //sets transient state to user's clicked choice
    }
}

export const EntreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChange)

    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = entrees.map(
        (entree) => {
            return `<div>
            <input type='radio' name='entree' value='${entree.id}' /> ${entree.name}
            </div>`
        }
    )
    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}