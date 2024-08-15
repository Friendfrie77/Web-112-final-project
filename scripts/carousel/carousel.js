"use strict";
import { createModal } from "../modal/modal.js";
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
        carouselWrapper.classList = 'flex-col'
        carouselWrapper.innerHTML =`
        <div class='carousel-wrapper flex-content-center flex-col'>
            <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
            <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>
            <div class='carousel-inner' id='carousel-inner'>
                ${imgSrc.imgList.map(imgSrc =>
                `
                <div class='slide'>
                    <img src=${imgSrc} width='400px' height='400px' style="margin:auto"/>
                </div>
                `
                ).join(' ')}
            </div>
        </div>
        <div class ='flex-row store-img-thumbnail flex-space-even'>
            ${imgSrc.imgList.map((imgSrc, index) =>
                `
                <button class='button-no-border store-img-thumbnail-box thumbnail-button-${index + 1}'>
                    <img class ='' src='${imgSrc}' width ='100px' height='100px' />
                </button>
                `
            ).join(' ')}
        </div>
        `
        pagination();
    }
    return carouselWrapper
}

const carouselButtons = (product) =>{
    const container = document.getElementById('carousel-inner');
    const slides = document.querySelector('.slide');
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    container.onclick = () => createModal(product, 'pictureModal');
    nextButton.addEventListener('click', () =>{
        const slideWidth = slides.clientWidth;
        container.scrollLeft += slideWidth
    })
    prevButton.addEventListener('click', () =>{
        const slideWidth = slides.clientWidth;
        container.scrollLeft -= slideWidth
    });
}

const pagination = () =>{
    
}

// test.append(createCarousel('store', product));
// carouselButtons()
export {createCarousel, carouselButtons}