"use strict"
import {randomNum} from "../helpers.js"
import {createCarousel, carouselButtons} from "../carousel/carousel.js"

const serviceStats = (isRandom,maxNum,bottomText) =>{
    const num = isRandom ? randomNum(maxNum) : maxNum
    const wrapper = document.createElement('div')
    wrapper.classList = 'stats'
    wrapper.innerHTML = `
        <span>${num}</span>
        <hr />
        <span>${bottomText}</span>
    `
    return wrapper
}

const serviceSections = (i, isImgArray, textContent, img) =>{
    const wrapper = document.createElement('div');
    wrapper.classList = 'flex-row-col flex-row-gap-xlarge flex-space-even'
    const isEven = i % 2 === 0;
    wrapper.innerHTML = `
        ${!isEven ? `
           <div class='text'></div>
           ${!isImgArray ? `
           <div><img src=${img} /></div>
        `: null}

        `: `
        ${!isImgArray ? `
        <div><img src=${img} /></div>
        `: null}
        <div class='text'></div>
        `}

    
    `
    wrapper.querySelector('.text').appendChild(textContent)

    return wrapper;
}

const customerRatings = (testimony, service, serviceCTA) =>{
    const filteredTestimony = testimony.filter(e => e.serviceUsed === `${service}`)
    const wrapper = document.createElement('div')
    wrapper.classList = 'flex-col customer-testimony'
    wrapper.innerHTML = `
    <div class = 'flex-row-col customer-testimony carousel-wrapper'>
        <div class='customer-wrapper'>
            <h1>${serviceCTA}</h1>
        </div>
    </div>
    <hr class='hr-maxWidth'> 
    <div class='company-stats'>
    </div>
    `
    wrapper.querySelector('.customer-wrapper').append(createCarousel('customer', filteredTestimony))
    return wrapper
}

export {serviceStats, serviceSections, customerRatings}