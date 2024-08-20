"use strict";
import {productList} from '../data/productInfo/productInfo.js'

const setPageTitle = (title, description) =>{
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description)
    
}
const navBarHero = (navBar, navLinks, navDropdownButton, navDropdown) =>{
  return() =>{
    if((window.scrollY >= 120) && navBar.className !== 'sticky'){
      navBar.className += 'sticky';
      navDropdownButton.style.color = 'white';
      navDropdown.style.background = '#31572C';
      navDropdown.style.marginTop = '.6rem';
      for(const a of navLinks){
        a.style.color = 'white';
      }
    }else if(window.scrollY < 100){
      navBar.classList.remove('sticky')
      navDropdownButton.style.color = '';
      navDropdown.style.background = '';
      navDropdown.style.marginTop = '';
      for(const a of navLinks){
        a.style.color = '';
      }
    }
  }
}
const isNavSticky = () =>{
  const navBar = document.querySelector('nav');
  const navLinks = document.getElementsByClassName('navLink');
  const navDropdownButton = document.getElementById('navDropdownButton');
  const navDropdown = document.getElementById('navDropDown');
  if(!document.querySelector('.hero-img-wrapper')){
    navBar.className += 'sticky';
    navDropdownButton.style.color = 'white';
    navDropdown.style.background = '#31572C';
    navDropdown.style.marginTop = '.6rem';
    for( const a of navLinks){
      a.style.color = 'white';
    }
  }else{
    window.addEventListener('scroll', navBarHero(navBar, navLinks, navDropdownButton, navDropdown))
  }
}

const getStars = (productRating) => {
  const fullStars = Math.floor(productRating);
  const halfStar = productRating - fullStars >= 0.5 ? 1 : 0;
  const emptyStar = 5 - fullStars - halfStar;
  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star filled-stars"></i>';
  }
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt filled-stars"></i>';
  }
  for (let i = 0; i < emptyStar; i++) {
    starsHTML += '<i class="far fa-star empty-star"></i>';
  }
  return starsHTML;
};

const starRating = () =>{
  let starHtml = document.createElement('div')
  starHtml.classList = 'flex-row';
  starHtml.setAttribute('id','rating-button-div')
  starHtml.innerHTML = `
  <button class='' id='star-1'><i class="far fa-star empty-star"></i></button>
  <button class='' id='star-2'><i class="far fa-star empty-star"></i></button>
  <button class='' id='star-3'><i class="far fa-star empty-star"></i></button>
  <button class='' id='star-4'><i class="far fa-star empty-star"></i></button>
  <button class='' id='star-5'><i class="far fa-star empty-star"></i></button>
  `
  return starHtml
}

const starRattingEventListner = (div) =>{
  Array.from(div.children).forEach((button, index) =>{
    button.onclick = () => starRatingButtonOnClick(index)
  })
}
const starRatingButtonOnClick = (id) =>{

  console.log(document.querySelector(`#star-${id+1}`))
  console.log(id)
}
const maxPrice = (filterdproductList) =>{
  let maxPrice = 0;
  if(filterdproductList){
    console.log(filterdproductList)
    if(filterdproductList.categories.length != 0){
      filterdproductList.forEach(product =>{
        maxPrice = product.price > maxPrice ? product.price : maxPrice;
      })
    }else{
      maxPrice = filterdproductList.priceRangeMax;
    }
  }else{
    productList.forEach(product =>{
      maxPrice = product.price > maxPrice ? product.price : maxPrice;
    })
  }
  return maxPrice;
}

export {setPageTitle, isNavSticky, getStars, maxPrice, starRating, starRattingEventListner}