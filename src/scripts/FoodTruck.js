import { EntreeOptions } from "./Entrees.js"
import { PurchaseSubmission } from "./PurchaseCombo.js"
import { Sales } from "./Sales.js"
import { SideOptions } from "./SideDishes.js"
import { VegetableOptions } from "./Vegetables.js"

export const FoodTruck = async () => { //html generation function
    const salesHTML = await Sales()
    const buttonHTML = await PurchaseSubmission()
    const entreeOptionsHTML = await EntreeOptions()
    const vegetableOptionsHTML = await VegetableOptions()
    const sideOptionsHTML = await SideOptions()

    return `
        <header class="header">
            <img src="https://purepng.com/public/uploads/large/purepng.com-hummushummuschickpeasbeanstahini-1411527619934foshe.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices__entrees options">
                <h2>Entrees</h2>
                ${entreeOptionsHTML}
            </section>

            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${vegetableOptionsHTML}
            </section>

            <section class="choices__sides options">
                <h2>Sides</h2>
                ${sideOptionsHTML}
            </section>
        </article>

        <article>
            ${buttonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `
}
