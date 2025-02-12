import { FoodTruck } from "./FoodTruck.js" //rendering to DOM module

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

document.addEventListener("newPurchaseMade", renderAllHTML) //custom event to update with new purchase

renderAllHTML()

