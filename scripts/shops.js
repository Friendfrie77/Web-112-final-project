"use strict";
import { createNav } from "./nav.js";
import { setPageTitle, isNavSticky, getStars, maxPrice} from "./helpers.js";
import {createStoreControls, expandEventListener, updateMenuForFilters} from "./store/shopControls.js";
import { updateRangeLables } from "./store/priceSliderDisplayTag.js";
import {reviewCount} from "../data/productInfo/productReviews.js";
import {productList, categoryList} from '../data/productInfo/productInfo.js'

let checkedFilters = {
  categories: [],
  brand: [],
  seedRegion: [],
  onlyInStock: false,
  starRating: 1,
  priceRangeMin: 0,
  priceRangeMax: maxPrice(),
}

const createCategories = (id) =>{
  const wrapper = document.getElementById("mainContent");
  if(!document.querySelector('.content-wrapper')){
    const index = document.createElement('section');
    index.className = 'content-wrapper store-wrapper';
    index.append(createStoreControls());
    const storeWrapper = document.createElement('div')
    Object.entries(categoryList).forEach(([key, value]) => {
      const tempWrapper = document.createElement('div');
      tempWrapper.className = 'store-box';
      tempWrapper.setAttribute('id', `${key}`)
      const tempBox = document.createElement('div');
      tempBox.className = 'product-grid'
      tempBox.setAttribute('id', `${value}`);
      tempWrapper.innerHTML = `
        <h1 class='header-text'>${value}</h1>
      `; 
      tempWrapper.append(tempBox);
      storeWrapper.append(tempWrapper);
    })      
    index.append(storeWrapper)
    wrapper.append(index)
  }else if(id){
    const categoriesDivs = document.querySelectorAll('.store-box');
    categoriesDivs.forEach(div =>{
      const divId = Number(div.id);
      if(!id.includes(divId)){
        div.style.display = 'none'
      }if(id.includes(divId) && div.style.display === 'none'){
        div.style.display = 'block'
      }
    })
  }
}

const showAllCategories = () =>{
  const categoryDivs = document.querySelectorAll('.store-box');
  categoryDivs.forEach(div =>{
    if(div.style.display ==='none'){
      div.style.display ='block'
    }
  })
}

const addAdditionalControls = () =>{
  //adding in controls based off what categories are selected
}

const displayProducts=(filteredProducts) =>{
  Object.values(categoryList).forEach(category => {
    const tempWrapper = document.getElementById(category);
    tempWrapper.innerHTML = '';
  });
  filteredProducts.forEach((product) =>{
      const tempWrapper = document.getElementById(`${categoryList[product.category]}`)
      const productDiv = document.createElement('div');
      productDiv.className = "store-product-flex";
      productDiv.innerHTML = `
                  <a href='product.html?id=${product.id}'">
                    <img class='store-img' width='350px' height='350px' alt='${product.title}'>
                  </a>
                  <div class='product-text'>
                      <h1 class='sub-header'>${product.brand}</h1>
                      <p>${product.title}</p>
                  </div>
                  <div class='product-price flex-col'>
                      <h2>$${product.price}</h2>
                      <div>
                          <span>${product.rating}</span> 
                          <span>${getStars(product.rating)}</span>
                          <span>${reviewCount(product.id)}</span>
                      </div>
                        ${product.stock != 0
                          ? `<button class='product-button'>Add to Cart</button>`
                          : `<button class='product-button no-stock' disabled>Out of Stock</button>`
                        }
                  </div>
          `;
      tempWrapper.append(productDiv)
  })
}

const priceSlider = () =>{
  const slider = document.querySelectorAll('.price-input')
  slider.forEach(slide =>{
    slide.addEventListener('input', (event) =>{
      if(event.target.id === 'min'){
        checkedFilters.priceRangeMin = event.target.value
      }else{
        checkedFilters.priceRangeMax = event.target.value
      }
      const sliderVal = updateRangeLables(checkedFilters)
      checkedFilters.priceRangeMin = sliderVal.minVal;
      checkedFilters.priceRangeMax = sliderVal.maxVal;
      renderFiliteredProducts(checkedFilters)
    })
  })
}

const checkBoxSelector = () =>{
  document.querySelectorAll('input[type="checkbox"').forEach(box =>{
    box.addEventListener('change', (updateCheckBoxState))
  })
  document.querySelectorAll('.star-rating-button').forEach(button =>{
    button.addEventListener('click', (event) =>{
      checkedFilters.starRating = event.currentTarget.getAttribute('data-rating')
      renderFiliteredProducts(checkedFilters)
    })
  })
}

const updateCheckBoxState = () =>{
  checkedFilters.categories = [...document.querySelectorAll('input[name="categories"]:checked')].map(box => Number(box.id));
  checkedFilters.brand = [...document.querySelectorAll('input[name="brand"]:checked')].map(box => box.value);
  checkedFilters.seedRegion = [...document.querySelectorAll('input[name="region"]:checked')].map(box => box.value);
  checkedFilters.onlyInStock = document.querySelector('#stock').checked;
  renderFiliteredProducts(checkedFilters)
}

const createFilters = (checkedFilters) =>{
  const stockNum = checkedFilters.onlyInStock ? 1 : 0;
  const {brand, categories, seedRegion, starRating, priceRangeMin, priceRangeMax} = checkedFilters
  return productList.filter( product =>{
        const filterConditions = [
          brand.length === 0 || brand.includes(product.brand),
          categories.length === 0 || categories.includes(product.category),
          !(product.category === 1 && seedRegion.length > 0)|| seedRegion.includes(product.region),
          product.price >= priceRangeMin,
          product.price <= priceRangeMax,
          product.rating >= starRating,
          product.stock >= stockNum
        ]
        return filterConditions.every(condition => condition)
  })
}

const renderFiliteredProducts = (checkedFilters) =>{
  const filters = createFilters(checkedFilters)
  if(checkedFilters.categories.length != 0){
    if(checkedFilters.categories.length === 0){
      displayProducts(filters);
    }else{
      displayProducts(filters);
      createCategories(checkedFilters.categories);
    }
  }else{
    displayProducts(filters);
    showAllCategories()
  }
  updateMenuForFilters(filters)
}

const onPageLoad = () =>{
    setPageTitle('Shop', 'Shop page for Green Home Living');
    createNav().then(() =>{
        isNavSticky();
        createCategories();
        displayProducts(productList);
        checkBoxSelector();
        priceSlider();
        updateRangeLables();
        expandEventListener();
    })
}

window.onload = onPageLoad
