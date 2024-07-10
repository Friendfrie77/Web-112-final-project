"use strict";
import { createNav } from "../nav.js";
import { setPageTitle, isNavSticky} from "../helpers.js";
import {customerTestimony} from "../../data/customerTestimony.js"
import { createCarousel, carouselButtons} from "../carousel/carousel.js";
const heroImg = (wrapper) =>{
    return new Promise((resolve) =>{
        const heroImg = document.createElement('div');
        heroImg.className = 'hero-img-wrapper';
        heroImg.setAttribute('id', 'hero-img-wrapper')
        heroImg.innerHTML = `
            <img class='hero-img' src ='images/index/index-heros/test-hero1.webp' />
            <div class='call-to-action'>
                <h1 class='hero-text'>A greener planet starts from home</h1>
                <span><a href='index.html' class='hero-link'>Find out</a> how you can help make the plant greener</span>
            </div>
        `
        const heroImgElement = heroImg.querySelector('.hero-img');
        heroImgElement.onload = () =>{
            resolve()
        }
        wrapper.append(heroImg);
        if (heroImgElement.complete){
            resolve();
        }
    })
}
const index = (wrapper) =>{
    const index = document.createElement('section');
    index.className = 'content-wrapper';
    index.innerHTML =`
        <div>
            <h1>Placeholder Placeholder</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis justo tortor. Aliquam tincidunt, sapien a laoreet sollicitudin, felis metus condimentum justo, et malesuada elit tellus eu ex. In accumsan ligula sapien, at iaculis arcu consequat nec. In non cursus est. Suspendisse vitae semper velit. Donec eu justo luctus, sollicitudin lacus ut, dignissim turpis. Ut commodo lectus sed justo egestas commodo. Vestibulum suscipit tellus eget arcu elementum, ac vestibulum magna consectetur. Aliquam sit amet faucibus est. Aliquam pellentesque orci nec ultricies finibus. Ut porttitor vulputate urna, in fringilla ipsum sagittis vel.</p>
        </div>
        <div class='card-container'>
            <h1 class='card-container-title'>How can we help</h1>
            <div class='card'>
                <div class='flex-row-col'>
                    <img class='card-img' src='images/index/service-imgs/clover-grass.webp' height='auto' width='500px' />
                    <div class='flex-col'>
                        <h2 class='card-header'>Green Lawns</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis justo tortor. Aliquam tincidunt, sapien a laoreet sollicitudin, felis metus condimentum justo, et malesuada elit tellus eu ex. In accumsan ligula sapien, at iaculis arcu consequat nec. In non cursus est. Suspendisse vitae semper velit. Donec eu justo luctus, sollicitudin lacus ut, dignissim turpis. Ut commodo lectus sed justo egestas commodo. Vestibulum suscipit tellus eget arcu elementum, ac vestibulum magna consectetur. Aliquam sit amet faucibus est. Aliquam pellentesque orci nec ultricies finibus. Ut porttitor vulputate urna, in fringilla ipsum sagittis vel.</p>
                        <a class='button-link'>Find out more</a>
                    </div>
                </div>
            </div>
            <hr>
            <div class='card'>
                <div class='flex-row-col'>
                    <div class='flex-col'>
                        <h2 class='card-header'>Rainwater harvesting</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis justo tortor. Aliquam tincidunt, sapien a laoreet sollicitudin, felis metus condimentum justo, et malesuada elit tellus eu ex. In accumsan ligula sapien, at iaculis arcu consequat nec. In non cursus est. Suspendisse vitae semper velit. Donec eu justo luctus, sollicitudin lacus ut, dignissim turpis. Ut commodo lectus sed justo egestas commodo. Vestibulum suscipit tellus eget arcu elementum, ac vestibulum magna consectetur. Aliquam sit amet faucibus est. Aliquam pellentesque orci nec ultricies finibus. Ut porttitor vulputate urna, in fringilla ipsum sagittis vel.</p>
                        <a class='button-link'>Find out more</a>
                    </div>
                    <img class='card-img' src='images/index/service-imgs/rain-tank.webp' height='auto' width='500px' />
                </div>
            </div>
            <hr>
            <div class='card'>
                <div class='flex-row-col'>
                    <img class='card-img' src='images/index/service-imgs/clover-grass.jpg' height='auto' width='500px' />
                    <div class='flex-col'>
                        <h2 class='card-header'>Solar</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis justo tortor. Aliquam tincidunt, sapien a laoreet sollicitudin, felis metus condimentum justo, et malesuada elit tellus eu ex. In accumsan ligula sapien, at iaculis arcu consequat nec. In non cursus est. Suspendisse vitae semper velit. Donec eu justo luctus, sollicitudin lacus ut, dignissim turpis. Ut commodo lectus sed justo egestas commodo. Vestibulum suscipit tellus eget arcu elementum, ac vestibulum magna consectetur. Aliquam sit amet faucibus est. Aliquam pellentesque orci nec ultricies finibus. Ut porttitor vulputate urna, in fringilla ipsum sagittis vel.</p>
                        <a class='button-link'>Find out more</a>
                    </div>
                </div>
            </div>
        </div>
    `
    wrapper.append(index)
    createCustomerSection(wrapper)
    createStoreCta(wrapper)
}

const createCustomerSection = (wrapper) =>{
    const customerWrapper = document.createElement('div');
    customerWrapper.classList = 'flex-row-col customer-testimony carousel-wrapper'
    customerWrapper.innerHTML =`
    <div class='customer-wrapper'>
        <h1>Find out what our customers are saying</h1>
    </div>
    `
    wrapper.append(customerWrapper)
}

const createCustomerTestimony = () =>{
    const wrapper = document.querySelector('.customer-wrapper');
    wrapper.append(createCarousel('customer', customerTestimony))
    // const testimony = document.createElement('div')
    // testimony.classList = 'flex-row-col testimony'
    // testimony.innerHTML = `
    // ${customerTestimony.map(customer =>
    // `
    // <div class='flex-col align-items-center'>
    //     <img src=${customer.headshot} width='200px' height='200px' alt='${customer.headshot}' />
    //     <span><p>${customer.name}</p></span>
    //     <p>${customer.testimony}</p>
    // </div>
    // `
    // ).join(' ')}
    // `
    // wrapper.append(testimony)
    carouselButtons();
}
const createStoreCta = (wrapper) =>{
    const storeCta = document.createElement('div');
    storeCta.classList ='content-wrapper'
    storeCta.innerHTML = `
    <h1>Need some supplies?</hi>
    `
    wrapper.append(storeCta)
}
const createIndexPage = (wrapper) =>{
    return heroImg(wrapper).then(() =>{
        index(wrapper)
    })
}
const onPageLoad = () =>{
    setPageTitle('Green Home Living', 'Landing page for Green Home Living');
    createNav().then(()=>{
        const wrapper = document.getElementById("mainContent");
        createIndexPage(wrapper).then(()=>{
            createCustomerTestimony();
        });
        isNavSticky();
    });
}
window.onload = onPageLoad;
