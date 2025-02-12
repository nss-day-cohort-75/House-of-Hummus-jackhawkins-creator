import { makePurchase } from "./TransientState.js" //purchase button functionality

const handlePurchaseSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        makePurchase()
    }
}

export const PurchaseSubmission = async () => {
    document.addEventListener("click", handlePurchaseSubmissionClick)

    return "<div><button id='purchase'>Purchase Combo</button></div>"
}