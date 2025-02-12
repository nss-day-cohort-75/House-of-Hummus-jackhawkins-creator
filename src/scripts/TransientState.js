// Initialize transient state for purchases
const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}


// Functions to modify each property of transient state
export const setEntreeId = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVegetableId = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const setSideId = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const makePurchase = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", postOptions)

    // Custom Event
    const customEvent = new CustomEvent("newPurchaseMade")
    document.dispatchEvent(customEvent)
}