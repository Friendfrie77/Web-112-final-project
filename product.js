import {productMap, reviewCount, productReviews} from "./productInfo.js";
import { getStars } from "./shop.js";
const expandReviews = () =>{
    const showReview = document.getElementById('review-box');
    showReview.style.display = showReview.style.display === 'none' ? 'block' : 'none';
}

const displaySingleProduct = () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const product = productMap[id]
    document.title = product.brand + ' ' + product.title
    //add meta tag
    const wrapper = document.getElementById('wrapper');
    const productDiv = document.createElement('div');
    const reviewsForProduct = productReviews.filter(review => review.productId === product.id)
    productDiv.innerHTML = `
        <h1>${product.brand} ${product.title}</h1>
        <div class="product-carousel" id='product carousel'>
            ${product.imgList.map(img =>`
            <div class='slide'>
                <picture> 
                    <img class='slide-img' src='${img}' alt='${product.title}' height= 100% width = auto>
                </picture>
            </div>
            `).join('')}
        </div>
        <div class = 'discription'>
            <h2>Discription:</h2>
            <p>${product.discription}</p>
        </div>
        <div class="reviews">
            <div class='flex-row'>
                <h2>Reviews ${getStars(product.rating)} <span class= 'reviewNumber'>${reviewCount(product.id)}</span></h2>
                <button class='expandReview' id='expandReview'><i class="fas fa-caret-down"></i></button>
            </div>
            <div id='review-box' class='review-box'>
                ${reviewsForProduct.map(review => `
                <div class='single-review'>
                    <h3>${review.reviewTitle}</h3>
                    ${getStars(review.rating)}
                    <p>${review.review}</p>
                </div>
                    `
                ).join('')}
            </div>
        </div>
    `
    productDiv.querySelector('.expandReview').onclick = expandReviews;
    wrapper.append(productDiv)
    carouselContorl();
}
const carouselContorl = () =>{
    const slides = document.getElementsByClassName("slide");
    console.log(slides)
}

window.onload = displaySingleProduct;
export {displaySingleProduct}