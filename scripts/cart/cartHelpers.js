"use strict"

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
    console.log(getCartContents())
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
export {addToCart, checkButtonState, purchaseAmountIncrease, purchaseAmountDecrease, inputMaxMin}