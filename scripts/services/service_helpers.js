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


// const serviceSectionImg = (arry) =>{
//     const mainWrapper = document.createElement('div');
//     mainWrapper.classList = 'flex-col'
//     if(arry.length){
//         arry.forEach((e, i) => {
//             const wrapper = document.createElement('div');
//             if(i % 2 === 0){
//                 wrapper.classList = 'flex-row-col margin-bottom-large flex-space-even'
//                 wrapper.append(serviceSectionTextLoop(e))
//                 wrapper.append(serviceSectionImgLoop(e))
//             }else{
//                 wrapper.classList = 'flex-row-col margin-bottom-large flex-space-even img-first'
//                 wrapper.append(serviceSectionImgLoop(e))
//                 wrapper.append(serviceSectionTextLoop(e))
//             }
//             mainWrapper.append(wrapper)
//         })
//     }else{
//         const wrapper = document.createElement('div');
//         wrapper.classList = 'flex-row-col margin-bottom-large flex-space-even'
//         wrapper.append(serviceSectionTextLoop(arry))
//         wrapper.append(serviceSectionImgLoop(arry))
//         mainWrapper.append(wrapper)
//     }
//     return mainWrapper;

// }
const serviceSectionImg = (arry) =>{
    const mainWrapper = document.createElement('div');
    mainWrapper.classList = 'flex-col'
    if(arry.length){
        arry.forEach((e, i) => {
            const wrapper = document.createElement('div');
            if(i % 2 === 0){
                wrapper.classList = 'flex-col margin-bottom-large flex-space-even img-first'
                wrapper.append(serviceSectionTextLoop(e))
                wrapper.append(serviceSectionImgLoop(e))
            }else{
                wrapper.classList = 'flex-col margin-bottom-large flex-space-even img-first'
                wrapper.append(serviceSectionImgLoop(e))
                wrapper.append(serviceSectionTextLoop(e))
            }
            mainWrapper.append(wrapper)
        })
    }else{
        const wrapper = document.createElement('div');
        wrapper.classList = 'flex-row-col margin-bottom-large flex-space-even'
        wrapper.append(serviceSectionTextLoop(arry))
        wrapper.append(serviceSectionImgLoop(arry))
        mainWrapper.append(wrapper)
    }
    return mainWrapper;

}

const serviceSectiontxt = (arry) => {
    const wrapper = document.createElement('div');
    wrapper.classList ='flex-row'
    arry.forEach(e => {
        wrapper.append(serviceSectionTextLoop(e))
    })
    return wrapper
}

const serviceSectionTextLoop = (e) =>{
    const tempWrapper = document.createElement('div');
    tempWrapper.classList = 'text'
    tempWrapper.innerHTML = `
        <h1 class='header'>${e.title}</h1>
        <p>${e.description}</p>
        <ul aria-lable = '${e.ulTitle}'>
            ${e.ulContent.map(e => `<li>${e}</li>`).join('')}
        </ul>
    `
    return tempWrapper
}

const serviceSectionImgLoop = (e) =>{
    const tempWrapper = document.createElement('div');
    if(typeof e.img === 'string'){
        tempWrapper.classList = `service-img`
        tempWrapper.innerHTML = `
            <img src='${e.img}'  />
        `
    }else{
        tempWrapper.classList = `service-img-arry`
        e.img.forEach(img =>{
        const tempImg = document.createElement('img')
        tempImg.setAttribute('src', `${img}`);
        tempImg.setAttribute('width', '200px');
        tempImg.setAttribute('height', 'auto');
        tempWrapper.append(tempImg)
        })
    }

    return tempWrapper
}

const serviceSectionCTA = (e,contact) =>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <hr />
    <h1 class='header'>${e[0].title}</h1>
    <p>${e[0].description}</p>
    `
    contact ? wrapper.appendChild(contact) : null;
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

export {serviceStats, serviceSectionImg, serviceSectiontxt, serviceSectionCTA, customerRatings}