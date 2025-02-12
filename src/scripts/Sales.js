export const Sales = async () => { //Generate Output Message
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()
    let salesDivs = ""
    salesDivs += sales.map
        (sale => {
            const salePrice = sale.entree.price + sale.vegetable.price + sale.side.price
            return `<div>Receipt #${sale.id} = $${salePrice.toFixed(2)}</div>`
        }).join("")
    return salesDivs
}