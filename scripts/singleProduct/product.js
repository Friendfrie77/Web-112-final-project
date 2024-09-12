"use strict";
import {productMap, productList} from '../../data/productInfo/productInfo.js'
import {productReviews, reviewCount, reviewSpread} from "../../data/productInfo/productReviews.js";
import {getStars, isNavSticky, setPageTitle} from "../helpers.js";
import { createCarousel, carouselButtons} from '../carousel/carousel.js';
import { createNav } from "../nav.js";
import { createModal , closeModal} from '../modal/modal.js';
import { addToCart,purchaseAmountIncrease, purchaseAmountDecrease, checkButtonState, inputMaxMin} from '../cart/cartHelpers.js';
const parseProductInfo = () =>{
    const id = new URLSearchParams(window.location.search).get('id')
    return productMap[id]
}

const createProductPage = (product) =>{
    const wrapper = document.querySelector('#mainContent');
    const productSection = document.createElement('section');
    const maxPurchase = Math.min(product.limit, product.stock)
    productSection.className = 'content-wrapper';
    productSection.innerHTML = `
    <div class='flex-row-col flex-col-gap-large margin-bottom-large'>
        <div class='flex-col product-info-box'>
            <h1>${product.brand} ${product.title}</h1>
            <div class='product-imgs'>
            </div>
        </div>
        <div class='flex-col product-info-wrapper flex-row-gap-small'>
            <div class='product-info-box flex-row flex-col-gap-large'>
                <span class='header-text'>$${product.price}</span>
                <div class='flex-col'>
                    <p>limit ${product.limit} per order</p>
                    <p>Stock: ${product.stock}</p>
                </div>
            </div>
            <div class='discription product-info-box'>
                <h2>Discription:</h2>
                <p>${product.discription}</p>
            </div>
            <div class='product-info-box flex-row flex-content-center flex-col-gap-large'>
                <div class='purchase-amount-wrapper'>
                    <button class='purchase-amount-button' id='purchase-amount-decrease'><i class="fa-solid fa-minus"></i></button>
                    <input class='input-purchase-amount' type='number' id='purchase-amount' name='purchase-amount' min='1' max='${maxPurchase}' value='1'/>
                    <button class='purchase-amount-button' id='purchase-amount-increase'><i class="fa-solid fa-plus"></i></button>
                </div>
                <button class='button' id='add-to-cart'>Add to Cart</button>
            </div>
        </div>
    </div>
    `
    productSection.append(createReviews(product))
    productSection.append(createRecommended(product))
    wrapper.append(productSection)
    /*
        function calls for dealing with cart functionality
        checkButtonState checkes if a button needs to be disabled or enabled on load.
    */
    const productAmount = productSection.querySelector('#purchase-amount');
    const increaseBtn =  productSection.querySelector('#purchase-amount-increase');
    const decreaseBtn = productSection.querySelector('#purchase-amount-decrease');
    productSection.querySelector('#add-to-cart').onclick = () => addToCart(product.id, parseInt(productAmount.value))
    productAmount.addEventListener('input', () => inputMaxMin(productAmount))
    productAmount.addEventListener('blur', () => inputMaxMin(productAmount))
    increaseBtn.onclick = () => purchaseAmountIncrease(productAmount);
    decreaseBtn.onclick  = () => purchaseAmountDecrease(productAmount)
    checkButtonState(productAmount)
}

const addProductImgs = (product) =>{
    const wrapper = document.querySelector('.product-imgs')
    wrapper.append(createCarousel("store", product))
    carouselButtons(product);
}

const createRecommended = (product) =>{
    const similarProducts = productList.filter(products => products.category === product.category && products.id !== product.id)
    const recommendedProducts = [];
    for(let i = 0; i < 5; i++){
        let randomNum = Math.floor(Math.random() * similarProducts.length)
        recommendedProducts.push(similarProducts[randomNum]);
        similarProducts.splice(randomNum, 1);
    }
    const recommendedDiv = document.createElement('div');
    recommendedDiv.classList = 'flex-col product-info-box margin-top-large';
    recommendedDiv.innerHTML = `
    <h1>Recommended for you:</h1>
    <div class='flex-row flex-col-gap-xlarge flex-content-center'>
        ${recommendedProducts.map(product =>
            `
            <div class='flex-col'>
                <a href='product.html?id=${product.id}'>
                    <img src=${product.img} width ='200px' height='200px' alt="${product.brand} ${product.title}" />
                    <span>${product.brand} ${product.title}</span>
                    <div class='flex-row'>
                        <span>${getStars(product.rating)} (${reviewCount(product.id)})</span>
                    </div>
                    <span>$${product.price}</span>
                </a>
            </div>
            
            `
        ).join(' ')}
    </div>
    `
    return recommendedDiv;
}
const writeReview = () =>{
    createModal(false,'review')
}
const reviewOnSubmit = (event) =>{
    event.preventDefault();
    const product = parseProductInfo()
    const reviewData = new FormData(event.target);
    addReviews(reviewData)
    console.log(reviewData.get('title'))
    console.log('test')
    closeModal();
}
const createReviews = (product) =>{
    const reviews = productReviews.filter(review => review.productId === product.id);
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'reviews'
    reviewDiv.innerHTML = `
    <div class="flex-row box-shadow-gray">
        <h2>Reviews: ${getStars(product.rating)} <span class='reviewNumber'>${reviewCount(product.id)}</span></h2>
        <button class='expandReview' id='expandReview'><i class='fas fa-caret-down'></i></button>
    </div>
    <div id='review-box' class='review-box'>
        <div class='flex-row flex-space-between align-items-center'>
            <div class='flex-row align-items-center flex-content-center'>
                <span class='rating-text'>${product.rating}</span>
                <span class='flex-col'>
                    <span>${getStars(product.rating)}</span>
                    <span>out of ${reviewCount(product.id)} reviews</span>
                </span>
            </div>
            <div class='review-spread-wrapper'>
            </div>
            <button id='writeReview' class='button'>Write a Review</button>
        </div>
        ${reviews.map(review =>`
        <div class='single-review'>
            <h3>${review.reviewTitle}</h3>
            ${getStars(review.rating)}
            <p>${review.review}</p>
        </div>
        `).join('')}
    </div>
    `
    reviewDiv.querySelector('#expandReview').onclick = expandReviews;
    reviewDiv.querySelector('#writeReview').onclick = writeReview;
    return reviewDiv;
}
const addReviews = (review) => {
    console.log(review)
    const newReview = document.createElement('div');
    newReview.className ='single-review';
    newReview.innerHTML=`
        <h3>${review.get('title')}</h3>
        ${getStars(parseInt(review.get('selected-star-rating')))}
        <p>${review.get('review')}</p>
    `
    console.log(newReview)
    document.querySelector('#review-box').append(newReview)
}
const createSpecs = (product) =>{
    
}

const createReviewSpread = (id) =>{
    const reviewSpreadResults = reviewSpread(id);
    const count = reviewCount(id);
    const reviewSpreadWrapper = document.querySelector('.review-spread-wrapper');
    for(let c = 5; c >= 1; c--){
        let tempWrapper = document.createElement('div');
        tempWrapper.className = 'flex-col review-spread';
        tempWrapper.innerHTML = `
        <div class='flex-row align-items-center flex-col-gap'>
            <span>${c}</span>
            <i class="fas fa-star filled-stars"></i>
            <div class='review-spread-box'>
                <span class='spread-fill' style="width:${reviewSpreadResults[c]/count * 100}%"></span>
            </div>
            <span>${reviewSpreadResults[c]}</span>
        </div>
        `
        reviewSpreadWrapper.append(tempWrapper)
    }

}
const expandReviews = () =>{
    const reviewBox = document.querySelector('#review-box');
    reviewBox.style.display = reviewBox.style.display === 'none' ? 'block' : 'none';
}
const onPageLoad = () =>{
    const product = parseProductInfo()
    setPageTitle(product.brand + ' ' + product.title, `Product page for ${product.brand + ' ' + product.title}`)
    createNav().then(() =>{
        isNavSticky();
        createProductPage(product);
        createReviewSpread(product.id)
        addProductImgs(product)
    })
}
window.onload = onPageLoad;
export {reviewOnSubmit}