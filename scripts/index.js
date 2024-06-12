import { createNav } from "./nav.js";
import { setPageTitle } from "./helpers.js";
// const wrapper = document.getElementById("mainContent");


const heroImg = (wrapper) =>{
    return new Promise((resolve) =>{
        const heroImg = document.createElement('div');
        heroImg.className = 'hero-img-wrapper';
        heroImg.innerHTML = `
            <img class='hero-img' src ='images/index-heros/test-hero1.webp' />
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
    const index = document.createElement('div');
    index.className = 'test';
    index.innerHTML =`

    `
    wrapper.append(index)
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
        createIndexPage(wrapper)
    });
}
window.onload = onPageLoad;
