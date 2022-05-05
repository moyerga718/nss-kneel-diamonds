import { getOrders } from "./dataAccess.js"
import { getMetals } from "./dataAccess.js"
import { getSizes } from "./dataAccess.js"
import { getStyles } from "./dataAccess.js"
import { getTypes } from "./dataAccess.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()

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

const findTypePrice = (order) => {
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId 
        }
    )
    return foundType.priceFactor
}

const calcTotalPrice = (order) => {
    let metalPrice = findMetalPrice(order)
    let sizePrice = findSizePrice(order)
    let stylePrice = findStylePrice(order)
    let typePriceFactor = findTypePrice(order)
    const totalPrice = (metalPrice + sizePrice + stylePrice) * typePriceFactor
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

    const listItems = orders.map(
        (order) => {
            if (order.id > 0) {
                return buildOrderListItem(order)
            }
        })

    html += listItems.join("")
    html += "</ul>"

    return html
}

