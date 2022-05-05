import { getSizes, setSize, getTempState } from "./dataAccess.js"


const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let tempState = getTempState()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        if (tempState.sizeId === size.id) {
            return `<li>
                <input type="radio" name="size" value="${size.id}" checked/> ${size.carets}
            </li>`
        } else {
            return `<li>
                <input type="radio" name="size" value="${size.id}" /> ${size.carets}
            </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

