"use strict"
import {randomNum} from "../helpers.js"

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

const serviceSections = (textRight, isImgArray, textContent, img) =>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        ${textRight ? `
           <div class='text'>

           </div>
           ${!isImgArray ? `
           <div>

           </div>
        `: null}
        
        `: null}
    
    `
    wrapper.querySelector('.text').appendChild(textContent)

    return wrapper;
}
export {serviceStats, serviceSections}