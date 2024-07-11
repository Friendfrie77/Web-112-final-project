"use strict";
import {customerTestimony} from "../../data/customerTestimony.js"
import { productList } from "../../data/productInfo/productInfo.js";
const testImg = ['images/headshots/placeholder-headshot-300x300.png', 'images/headshots/placeholder-headshot-300x300.png', 'images/headshots/placeholder-headshot-300x300.png','images/headshots/placeholder-headshot-300x300.png','images/headshots/placeholder-headshot-300x300.png','images/headshots/placeholder-headshot-300x300.png']
const product = productList[0]
const test = document.querySelector('#root')
console.log(productList[0])
const createCarousel = (carouselType, imgSrc) =>{
    const carouselWrapper = document.createElement('div');
    if(carouselType === 'customer'){
        carouselWrapper.classList = 'carousel-wrapper'
        carouselWrapper.innerHTML = `
        <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
        <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>
        <div class='carousel-inner' id='carousel-inner'>
        ${imgSrc.map(imgSrc =>
            `
            <div class='slide flex-row flex-space-even slide-customer testimony'>
                <div class='flex-col customer-slide-headshot align-items-center'>
                    <img src=${imgSrc.headshot} width='200px' height='200px' alt='${imgSrc.name}'/>
                    <span><p>${imgSrc.name}</p></span>
                </div>
                <p>${imgSrc.testimony}</p>
            </div>
            `
        ).join(' ')}
        </div>
        `
    }else if(carouselType === 'store'){
        carouselWrapper.classList = 'flex-row'
        carouselWrapper.innerHTML =`
        <div class = 'flex-col store-img-thumbnail'>
            ${imgSrc.imgList.map(imgSrc =>
                `
                <div class='store-img-thumbnail-box'>
                    <img class ='' src='${imgSrc}' width ='200px' height='200px' />
                </div>
                `
            ).join(' ')}
        </div>
        <div class='carousel-wrapper'>
            <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
            <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>
            <div class='carousel-inner' id='carousel-inner'>
                ${imgSrc.imgList.map(imgSrc =>
                `
                <div class='slide' style="background-color:red">
                    <img src=${imgSrc} width='400px' height='400px' style="margin:auto"/>
                </div>
                `
                ).join(' ')}
            </div>
        </div>
        `
    }
    return carouselWrapper
}

const carouselButtons = () =>{
    const container = document.getElementById('carousel-inner');
    const slides = document.querySelector('.slide');
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    
    nextButton.addEventListener('click', () =>{
        const slideWidth = slides.clientWidth;
        container.scrollLeft += slideWidth
    })
    prevButton.addEventListener('click', () =>{
        const slideWidth = slides.clientWidth;
        container.scrollLeft -= slideWidth
    });
}


// test.append(createCarousel('store', product));
// carouselButtons()
export {createCarousel, carouselButtons}