//import data 
import { getTypes, setType, getTempState } from "./dataAccess.js"

//assign data to variable
const types = getTypes()

//create export function that makes radio buttons for each option
export const Types = () => {
    const tempState = getTempState()
    let html = `<ul class="type-button-list">`
    const typesArray = types.map(
        (type) => {
            if (tempState.typeId === type.id) {
                return `<li>
                    <input type="radio" name="type" value="${type.id}" checked/>${type.name}
                </li>`
            } else {
                return `<li>
                    <input type="radio" name="type" value="${type.id}"/>${type.name}
                </li>`
            }
        }
    )
    html += typesArray.join(" ")
    html += `</ul>`

    return html
}

//create event listener that adds option to temp state w/ setter function
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)