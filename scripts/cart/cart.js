"use strict";
import { productList } from "../../data/productInfo/productInfo.js";
import { createNav } from "../nav.js";
import {getStars, isNavSticky, setPageTitle} from "../helpers.js";
import { updateTotalPrice, shoppingCartHeader} from "./cartHelpers.js";
import { selectAllInputListener, checkBoxListener} from "./cartEventListeners.js";
/*
save user cart in sessionStorage 
load cart 
*/
// sessionStorage.clear();
//check if item has the stock

const getCartContents = () => {
    if(sessionStorage.getItem('cart')){
        return JSON.parse(sessionStorage.getItem('cart'))
    }
    return null
}
const createCartPage = () =>{
    const wrapper = document.querySelector('#mainContent');
    const cartWrapper = document.createElement('section');
    cartWrapper.classList = 'content-wrapper align-items-center margin-top-large'
    const cartSection = document.createElement('div');
    cartSection.setAttribute('id','user-cart')
    cartSection.classList = 'cart-page-section flex-col flex-row-gap-xlarge'
    const recommendedSection = document.createElement('div');
    recommendedSection.classList = 'cart-page-section'
    const saveForLater = document.createElement('div');
    
    cartWrapper.append(cartSection)
    // wrapper.append(recommendedSection)
    wrapper.append(cartWrapper)
}
/*


*/
const populateCart = () =>{
    const cart = getCartContents();
    const wrapper = document.querySelector('#user-cart');
    if(!cart || cart.length === 0){
        wrapper.innerHTML = `
            <h1>Your cart is empty</h1>
            <p>If you would like to see what we have to offer our store can be found <a href='shop.html'>here</a>.</p>
        `
    }else{
        wrapper.innerHTML = `
        <div class='flex-col' id=cart-header>
        </div>
        `
        cart.forEach(element => {
            const product = productList[parseInt(Object.keys(element))]
            let quantityOptions = ' '
            for (let i = 1; i <= Math.min(product.limit, product.stock); i++){
                if(i == Object.values(element)){
                    quantityOptions += `<option value=${i} selected>Qty: ${i}</option>`
                }
                quantityOptions += `<option value=${i}>Qty: ${i}</option>`
            }
            const tempDiv = document.createElement('div');
            tempDiv.classList ='padding-5px'
            tempDiv.innerHTML = `
                <div class='flex-row flex-col-gap-large'>
                    <label class='custom-checkbox-wrapper'>
                        <input type='checkbox' id=${product.id} checked>
                        <span class='custom-checkbox'></span>
                    </label>
                    <div>
                        <img src=${product.img} width='150px' height='150px' alt='${product.title}'/>
                    </div>
                    <div class='flex-col'>
                        <h2>${product.brand} ${product.title}</h2>
                        <span>${Math.floor(Math.random() * 301)} bought in past month</span>
                        <span>${getStars(product.rating)}</span>
                        <div class='flex-row user-cart-controls'>
                            <select name='quantity' id=${product.id}>
                                <option value='0'>0 (delete)</option>
                                ${quantityOptions}
                            </select>
                            <input type='submit' value='Delete'/>
                            <input type='submit' value='Save for later'/>
                        </div>
                    </div>
                    <span class='price-span'>$${product.price}</span>
                </div>
                <hr />
            `
        wrapper.append(tempDiv)
        });
        shoppingCartHeader()
        updateTotalPrice(cart)
        selectAllInputListener()
    }
    document.querySelector('#uncheckAll').addEventListener('click', uncheckAll )
}


const uncheckAll = () =>{
    const checkBox = document.querySelectorAll('.custom-checkbox-wrapper input')
    checkBox.forEach(e =>{
        e.checked = false
    })
    updateTotalPrice()
}
const onPageLoad = () =>{
    setPageTitle('Shoping cart', 'Site cart')
    createNav().then(() =>{
        isNavSticky();
        createCartPage()
        populateCart()
        checkBoxListener()
    })
}
window.onload = onPageLoad




// const test = [{1:2}, {2:20}]
// sessionStorage.setItem('cart', JSON.stringify(test) )
// addToCart(3, 30)
// console.log(removeFromCart(3,30))