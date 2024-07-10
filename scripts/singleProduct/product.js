"use strict";
import {productMap} from '../../data/productInfo/productInfo.js'
import {productReviews, reviewCount, reviewSpread} from "../../data/productInfo/productReviews.js";
import {getStars, isNavSticky, setPageTitle} from "../helpers.js"
import { createNav } from "../nav.js";

const parseProductInfo = () =>{
    const id = new URLSearchParams(window.location.search).get('id')
    return productMap[id]
}

const createProductPage = (product) =>{
    const wrapper = document.querySelector('#mainContent');
    const productSection = document.createElement('section');
    productSection.className = 'content-wrapper';
    productSection.innerHTML = `
    <h1>${product.brand} ${product.title}</h1>
    <div class='discription'>
        <h2>Discription:</h2>
        <p>${product.discription}</p>
    </div>
    `
    productSection.append(createReviews(product))
    wrapper.append(productSection)
}

const writeReview = () =>{
    console.log('aaaa')
}

const createReviews = (product) =>{
    const reviews = productReviews.filter(review => review.productId === product.id);
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'reviews'
    reviewDiv.innerHTML = `
    <div class="flex-row">
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
    `
    reviewDiv.querySelector('#expandReview').onclick = expandReviews;
    reviewDiv.querySelector('#writeReview').onclick = writeReview;
    return reviewDiv;
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
    })
}
window.onload = onPageLoad;