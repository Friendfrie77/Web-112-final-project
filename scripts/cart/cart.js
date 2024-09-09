"use strict";
import { productList } from "../../data/productInfo/productInfo.js";
import { createNav } from "../nav.js";
import {getStars, isNavSticky, setPageTitle} from "../helpers.js";
/*
save user cart in sessionStorage 
load cart 
*/
// sessionStorage.clear();
//check if item has the stock
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
            foundItem[id] = foundItem[id] + amount
        }
    }
    sessionStorage.setItem('cart', JSON.stringify(currentCart))
}
const removeFromCart = (id, amount) =>{
    let message;
    const currentCart = getCartContents()
    let product = currentCart.find(p => p.hasOwnProperty(id.toString()))
    const productIndex = currentCart.indexOf(product)
    if(productIndex < 0){
        message = `Error`
    }else if(product[id] !== amount){
        product[id] -= amount
        message = `${amount} of the product: ${productList[id].brand} ${productList[id].title} removed from your cart.`
    }else{
        currentCart.splice(productIndex, 1)
        message = `The product: ${productList[id].brand} ${productList[id].title} removed from your cart.`
    }
    sessionStorage.setItem('cart', JSON.stringify(currentCart))
    return message
}
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
    const cartSection = document.createElement('section');
    cartSection.setAttribute('id','user-cart')
    cartSection.classList = 'cart-page-section flex-col flex-row-gap-xlarge'
    const recommendedSection = document.createElement('section');
    recommendedSection.classList = 'cart-page-section'
    cartWrapper.append(cartSection)
    // wrapper.append(recommendedSection)
    wrapper.append(cartWrapper)
}
/*


*/
const populateCart = () =>{
    const cart = getCartContents();
    const wrapper = document.querySelector('#user-cart')
    if(!cart || cart.length === 0){
        wrapper.innerHTML = `
            <h1>Your cart is empty</h1>
            <p>If you would like to see what we have to offer our store can be found <a href='shop.html'>here</a>.</p>
        `
    }else{
        cart.forEach(element => {
            const product = productList[parseInt(Object.keys(element))]
            console.log(product)
            const tempDiv = document.createElement('div');
            tempDiv.classList ='padding-5px'
            tempDiv.innerHTML = `
                <div class='flex-row flex-col-gap-large'>
                    <div>
                        <img src=${product.img} width='150px' height='150px' alt='${product.title}'/>
                    </div>
                    <div class='flex-col'>
                        <h2>${product.brand} ${product.title}</h2>
                        <span>${Math.floor(Math.random() * 301)} bought in past month</span>
                        <span>${getStars(product.rating)}</span>
                    </div>
                    <span>$${product.price}</span>
                </div>
                <hr />
            `
        wrapper.append(tempDiv)
        });
    }
}
const onPageLoad = () =>{
    setPageTitle('Shoping cart', 'Site cart')
    createNav().then(() =>{
        isNavSticky();
        createCartPage()
        populateCart()
    })
}
window.onload = onPageLoad




// const test = [{1:2}, {2:20}]
// sessionStorage.setItem('cart', JSON.stringify(test) )
// addToCart(3, 30)
// console.log(removeFromCart(3,30))