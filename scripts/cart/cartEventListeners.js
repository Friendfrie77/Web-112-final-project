'use Strict'
import { uncheckAll, getCartContents, updateTotalPrice} from "./cartHelpers.js"

const selectAllInputListener = () =>{
    const headerButton = document.querySelector('#shop-header-button');
    if(headerButton.name === 'checkAll'){
        headerButton.addEventListener('click', () => uncheckAll())
    }else if(headerButton.name === 'uncheckAll'){
        headerButton.addEventListener('click', () => uncheckAll(true))
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