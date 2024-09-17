'use strict'
import {isNavSticky, setPageTitle, heroImgElement} from "../../helpers.js";
import { createNav } from "../../nav.js";
import {solarCustomerTestimony} from "../../../data/customerTestimony.js"
import {createCarousel, carouselButtons} from "../../carousel/carousel.js"
import { serviceStats, serviceSections } from "../service_helpers.js";
import { solarServicesData } from "../../../data/pageCopy/pageCopy.js";

const solarHero = () =>{
   const heroImgLink = 'images/solar/new-solar-hero.jpg'
   const heroCTA = document.createElement('div')
   heroCTA.className='call-to-action'
   heroCTA.innerHTML = `
      <h1 class='hero-text'>Solar Services</h1>
   `
   return heroImgElement(heroImgLink, heroCTA)
}
const createSolarPage = () =>{
   const wrapper = document.querySelector('#mainContent');
   wrapper.append(solarHero())
   wrapper.append(solarInstall())
   wrapper.append(installRatings())
   carouselButtons()
}
const solarInstall = () =>{
   const wrapper = document.createElement('section')
   wrapper.classList = 'content-wrapper'
   const textContent1 = document.createElement('div')
   textContent1.innerHTML = `
   <h1>Solar Installation Services</h1>
   <p>Harness the power of the sun with our state-of-the-art solar panel installation service. Whether you're looking to reduce your electricity bill or take a step towards a more sustainable future, our team of experts will design and install a system tailored to your energy needs.<p>
   <ul aria-label='Solar-benefits'>
      <li>Lower energy bills</li>
      <li>Environmentally friendly energy</li>
      <li>Increase property value</li>
   </ul>

   `
   const test = document.createElement('div')
   solarServicesData.solarServices.forEach( e =>{
      const textContent = document.createElement('div')
      textContent.innerHTML = `
         <h1>${e.title}</h1>
         <p>${e.description}</p>
         ${e["advantages"] || e['key-Benefits'] || e["ideal-For"] || e['key-Features'] ? `
            ${e["advantages"] ? `<ul aria-label = 'Advantages'>${e["advantages"].map(e => `<li>${e}</li>`).join('')}` : ''}
            ${e['key-Benefits'] ? `<ul aria-label = 'Key Benefits'>${e['key-Benefits'].map(e => `<li>${e}</li>`).join('')}` : ''}
            ${e["ideal-For"] ? `<ul aria-label = 'Ideal for'>${e["ideal-For"].map(e => `<li>${e}</li>`).join('')}` : ''}
            ${e['key-Features']  ? `<ul aria-label = 'Key Features'>${e['key-Features'] .map(e => `<li>${e}</li>`).join('')}` : ''}
         ` : ''}
      `
      wrapper.append(serviceSections(true, false, textContent))
   }
   )
   console.log(solarServicesData.solarServices[1][1])
   return wrapper
}

const installRatings = () =>{
   const filteredRatings = solarCustomerTestimony.filter(e => e.serviceUsed === 'Installation')
   const wrapper = document.createElement('div')
   wrapper.classList = 'flex-col customer-testimony'
   wrapper.innerHTML = `
   <div class = 'flex-row-col customer-testimony carousel-wrapper'>
      <div class='customer-wrapper'>
         <h1>Don't just take our word for it, read what our cusomers are saying about our install</h1>
      </div>
   </div>
   <hr class='hr-maxWidth'> 
   <div class='company-stats'>
   </div>
   `
   const test = serviceStats(false, 10, 'test')
   wrapper.querySelector('.customer-wrapper').append(createCarousel('customer', filteredRatings))
   const stats = wrapper.querySelector('.company-stats')
   stats.append(serviceStats(false, 3, 'Years of Install'))
   stats.append(serviceStats(true, 450, 'Homes worth of Pannels Installed'))
   console.log(test)
   return wrapper
}
const onPageLoad = () =>{
   setPageTitle('Solar Services', 'test')
   createNav().then(() =>{
    isNavSticky()
    createSolarPage()
   })
}
window.onload = onPageLoad;