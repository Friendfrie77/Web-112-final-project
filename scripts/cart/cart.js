"use strict";
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
        sessionStorage.setItem('cart', JSON.stringify(currentCart))
    }else{
        currentCart = JSON.parse(sessionStorage.getItem('cart'));
        let foundItem = currentCart.find(p => p.hasOwnProperty(id.toString()))
        if(!foundItem){
            currentCart.push({[id]:amount})
        }else{
            foundItem[id] = foundItem[id] + amount
            console.log(foundItem[id] )
        }
    }
    sessionStorage.setItem('cart', JSON.stringify(currentCart))
}

// console.log(sessionStorage.getItem('productId'))
const onPageLoad = () =>{
    setPageTitle('Shoping cart', 'Site cart')
    createNav()
}
window.onload = onPageLoad

const test = [{1:2}, {2:20}]
sessionStorage.setItem('cart', JSON.stringify(test) )
console.log(sessionStorage.getItem('cart'))
addToCart(3, 30)
console.log(sessionStorage.getItem('cart'))