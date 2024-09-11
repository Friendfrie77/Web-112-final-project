'use Strict'
import { uncheckAll, getCartContents, updateTotalPrice} from "./cartHelpers.js"

const selectAllInputListener = () =>{
    console.log(document.querySelector('#uncheckAll').value == 'Uncheck all')
    if(document.querySelector('#uncheckAll').value == 'Select all items'){
        document.querySelector('#uncheckAll').addEventListener('click', () => uncheckAll(true) )
    }else if(document.querySelector('#uncheckAll').value == 'Uncheck all'){
        document.querySelector('#uncheckAll').addEventListener('click', () => uncheckAll(false))
    }
}


const checkBoxListener = () =>{
    const cart = getCartContents();
    const checkBox = document.querySelectorAll('.custom-checkbox-wrapper input')
    checkBox.forEach((e) =>{
        e.addEventListener('click', () => (updateTotalPrice(cart,e.id, e.checked)))
    })
}
export {selectAllInputListener, checkBoxListener}