'use strict'
import {isNavSticky, setPageTitle, heroImgElement} from "../../helpers.js";
import { createNav } from "../../nav.js";
import {solarCustomerTestimony} from "../../../data/customerTestimony.js"
import {createCarousel, carouselButtons} from "../../carousel/carousel.js"
import { serviceStats, serviceSectionImg, customerRatings, serviceSectiontxt, serviceSectionCTA} from "../service_helpers.js";
import { solarServicesData } from "../../../data/pageCopy/pageCopy.js";
//need to fix buttons to work with all the sections
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
   // wrapper.append(solarCleaning())
   // wrapper.append(cleaningRatings())
   // wrapper.append(repairRatings())
   carouselButtons()
}
const solarInstall = () =>{
   const wrapper = document.createElement('section')
   wrapper.classList = 'content-wrapper'
   const gridType =  solarServicesData.solarServices.filter(e => e.category === 'gridType')
   const defaultCatagory = solarServicesData.solarServices.filter(e => e.category === 'default')
   wrapper.append(serviceSectionImg(defaultCatagory))
   wrapper.append(serviceSectiontxt(gridType))
   wrapper.append(installCTA())
   return wrapper
}

const installRatings = () =>{
   const wrapper = customerRatings(solarCustomerTestimony, "Installation", "Don't just take our word for it, read what our customers are saying about our install")
   const stats = wrapper.querySelector('.company-stats')
   stats.append(serviceStats(false, 3, 'Years of Install'))
   stats.append(serviceStats(true, 450, 'Homes worth of Pannels Installed'))
   
   return wrapper
}

const installCTA = () =>{
   const e = solarServicesData.solarServices.filter(e => e.category === 'CTA');
   return serviceSectionCTA(e);
}
const solarCleaning = () =>{
   const wrapper = document.createElement('section')
   wrapper.classList = 'content-wrapper'
   const solarCleaning =  solarServicesData.solarCleaning
   const placeholder = 'images/headshots/placeholder-headshot-300x300.png'
   const textContent = document.createElement('div')
   textContent.innerHTML = `
         <h1>${solarCleaning.title}</h1>
         <p>${solarCleaning.description}</p>
         ${solarCleaning['key-Benefits'] ? `<ul aria-label = 'Key Benefits'>${solarCleaning['key-Benefits'].map(e => `<li>${e}</li>`).join('')}` : ''}

      `
   wrapper.append(serviceSections(2, false, textContent, placeholder))

   return wrapper
}

const cleaningRatings = () =>{
   const wrapper = customerRatings(solarCustomerTestimony, 'Cleaning', 'See what our customers are saying about our cleaning service')
   const stats = wrapper.querySelector('.company-stats')
   stats.append(serviceStats(false, 6, 'Years of Cleaning expertise'))
   stats.append(serviceStats(true, 15000, "Homes worth of Pannels Cleaned"))
   return wrapper
}

const solarRepair = () =>{

}

const repairRatings = () =>{
   const wrapper = customerRatings(solarCustomerTestimony, 'Repair', 'Placeholder CTA')
   const stats = wrapper.querySelector('.company-stats')
   stats.append(serviceStats(false, 3, 'Years of Repair expertise'))
   stats.append(serviceStats(true, 9000, "Home System Repaired"))
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