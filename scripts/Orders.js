import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

const findMetalPrice = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    return foundMetal.price
}

const findSizePrice = (order) => {
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    return foundSize.price
}

const findStylePrice = (order) => {
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    return foundStyle.price
}

const calcTotalPrice = (order) => {
    let metalPrice = findMetalPrice(order)
    let sizePrice = findSizePrice(order)
    let stylePrice = findStylePrice(order)
    const totalPrice = metalPrice + sizePrice + stylePrice
    return totalPrice
}

const buildOrderListItem = (order) => {
    
    const totalPrice = calcTotalPrice(order)
    const costString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} was placed on ${order.timestamp}. Cost: ${costString}
    </li>`
}



// Remember that the function you pass to find() must return true/false


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

