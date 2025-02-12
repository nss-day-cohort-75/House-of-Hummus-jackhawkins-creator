import { setVegetableId } from "./TransientState.js"

const handleVegetableChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setVegetableId(convertedToInteger) //sets transient state to user's clicked choice
    }
}

export const VegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegetableChange)

    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = vegetables.map(
        (vegetable) => {
            return `<div>
            <input type='radio' name='vegetable' value='${vegetable.id}' /> ${vegetable.type}
            </div>`
        }
    )
    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}