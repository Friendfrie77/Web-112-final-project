"use strict"
import { productList } from "../../data/productInfo/productInfo.js";
import { selectAllInputListener } from "./cartEventListeners.js";
const addToCart = (id, amount) =>{
    let currentCart = {};
    if(!sessionStorage.getItem('cart')){
        currentCart = [{[id] : amount}];
    }else{
        currentCart = JSON.parse(sessionStorage.getItem('cart'));
        let foundItem = currentCart.find(p => p.hasOwnProperty(id.toString()))
        if(!foundItem){
            currentCart.push({[id]:amount})
        }else{
            console.log(parseInt(foundItem[id]) + amount)
            foundItem[id] = parseInt(foundItem[id] + amount)
        }
    }
    sessionStorage.setItem('cart', JSON.stringify(currentCart))

}

const getSaveForLater = () => {
    if(sessionStorage.getItem('saveForLater')){
        return JSON.parse(sessionStorage.getItem('saveForLater'))
    }
    return null
}

const getCartContents = () => {
    if(sessionStorage.getItem('cart')){
        return JSON.parse(sessionStorage.getItem('cart'))
    }
    return null
}

const checkButtonState = (inputSelector) =>{
    const currentVal = parseInt(inputSelector.value);
    const maxVal = parseInt(inputSelector.max);
    const minVal = parseInt(inputSelector.min)
    const increaseBtn = document.querySelector('#purchase-amount-increase')
    const decreaseBtn = document.querySelector('#purchase-amount-decrease')
    if(increaseBtn){
        if(currentVal === maxVal){
            increaseBtn.disabled = true
        }else{
            increaseBtn.disabled = false
        }
    }
    if(decreaseBtn){
        if(currentVal === minVal){
            decreaseBtn.disabled = true
        }else{
            decreaseBtn.disabled = false
        }
    }
}

const inputMaxMin = (inputSelector) =>{
    let currentVal = parseInt(inputSelector.value)
    const maxVal = parseInt(inputSelector.max)
    const minVal = parseInt(inputSelector.min)
    if(currentVal >= maxVal){
        inputSelector.value = maxVal;
    }
    if(currentVal <= minVal){
        inputSelector.value = minVal
    }
    checkButtonState(inputSelector)

}
const purchaseAmountIncrease = (inputSelector) =>{
    let currentVal = parseInt(inputSelector.value);
    inputSelector.value = currentVal + 1;
    checkButtonState(inputSelector)
}
const purchaseAmountDecrease = (inputSelector) =>{
    let currentVal = parseInt(inputSelector.value);
    inputSelector.value = currentVal - 1;
    checkButtonState(inputSelector)
}

const updateTotalPrice = (cart, id, isChecked) =>{
    let subTotal = 0;
    let itemCount = 0;
    const updatePriceDiv = document.createElement('div')
    updatePriceDiv.setAttribute('id', 'subtotal')
    updatePriceDiv.classList = 'flex-row justify-content-end'
    //starting subtotal or if a item is checked again
    if(!id && cart || (id && isChecked && cart)){
        cart.forEach(e =>{
            const price = productList[parseFloat(Object.keys(e))].price
            const quantiy = parseInt(Object.values(e))
            subTotal = subTotal + (price * quantiy)
            itemCount = itemCount + quantiy
        })
    }else if(id && !isChecked && cart){
        cart.forEach(e =>{
            if(Object.keys(e) != id){
                const price = productList[parseFloat(Object.keys(e))].price
                const quantiy = parseInt(Object.values(e))
                subTotal = subTotal + (price * quantiy)
                itemCount = itemCount + quantiy
            }
        })
    }
    if(document.querySelector('#subtotal')){
        document.querySelector('#subtotal').innerHTML = `
            <span>Subtotal for ${itemCount} item(s): $${subTotal}</span>
        `
    }else{
        updatePriceDiv.innerHTML = `
            <span>Subtotal for ${itemCount} item(s): $${subTotal}</span>
        `
        document.querySelector('#user-cart').append(updatePriceDiv)
    }
    shoppingCartHeader()
}

const shoppingCartHeader = () =>{ 
    const checkBox = document.querySelectorAll('.custom-checkbox-wrapper input')
    let input;
    for(let i = 0; i < checkBox.length; i++){
        if(!checkBox[i].checked){
            input = `<input class='align-self-start' type='submit' id='uncheckAll' value='Select all items'>`
            break
        }if(i == (checkBox.length -1)){
            input = `<input class='align-self-start' type='submit' id='uncheckAll' value='Uncheck all'></input>`
        }
    }
    document.querySelector('#cart-header').innerHTML =`
            <h1>Shopping Cart</h1>
            ${input}
            <p class='text-align-right'>Price</p>
            <hr style='width:100%;'>
    `

}

const uncheckAll = (checked) =>{
    const checkBox = document.querySelectorAll('.custom-checkbox-wrapper input')
    checkBox.forEach(e =>{
        if(checked){
            e.checked = false
        }else{
            e.checked
        }
    })
    selectAllInputListener()
    updateTotalPrice()
}
export {addToCart, checkButtonState, purchaseAmountIncrease, purchaseAmountDecrease, inputMaxMin, updateTotalPrice, shoppingCartHeader, uncheckAll, getCartContents}