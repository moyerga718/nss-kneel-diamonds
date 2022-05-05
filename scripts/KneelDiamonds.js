
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { Types } from "./Type.js"
import { addCustomOrder } from "./dataAccess.js"
import { getTempState } from "./dataAccess.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            let tempState = getTempState()
            if (tempState.metalId > 0 && tempState.sizeId > 0 && tempState.styleId > 0 && tempState.typeId > 0) {
                addCustomOrder()
            } else {
                window.alert("Please select one option from each category")
            }
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
            <section class="type-button-container">
                ${Types()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

