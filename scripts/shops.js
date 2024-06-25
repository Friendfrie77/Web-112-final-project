import { createNav } from "./nav.js";
import { setPageTitle, isNavSticky} from "./helpers.js";
import {productList, reviewCount, categoryList} from './productInfo.js';

let checkedFilters = {
  categories: [],
  onlyInStock: false,
  starRating: 1,
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
const createStoreControls = () =>{
  const wrapper = document.createElement('div');
  wrapper.className = 'store-controls'
  wrapper.innerHTML = `
  <fieldset class='store-control-fieldset' id='categories'>
    <legend>Categories</legend>
   ${Object.entries(categoryList).map(([key, value]) =>
    `<div>
      <input type='checkbox' id=${key} name='categories' value=${key}/>
      <lable for=${key}>${value}</lable>
    </div>`
   ).join('')}
   </fieldset>
  <fieldset class='store-control-fieldset'>
   <legend>Price Range</legend>

  </fieldset>
  <fieldset class='store-control-fieldset'>
   <lengend>Avg. Customer Review</legend>
   <div class='star-ratings'>
      <button class='star-rating-button' data-rating=4><span>${getStars(4)} & up<span></button>
   </div>
   <div class='star-ratings'>
      <button class='star-rating-button' data-rating=3><span>${getStars(3)} & up<span></button>
   </div>
   <div class='star-ratings'>
      <button class='star-rating-button' data-rating=2><span>${getStars(2)} & up<span></button>
   </div>
   <div class='star-ratings'>
      <button class='star-rating-button' data-rating=1><span>${getStars(1)} & up<span></button>
   </div>
  </fieldset>
  <fieldset class='store-control-fieldset'>
    <legend>Stock</legend>
    <div>
      <input type='checkbox' name = 'stock' id='stock'/>
      <lable for='stock'>In Stock</lable>
    </div>
  </fieldset>
  `
  return wrapper
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
                    <img class='store-img' src=${product.img} width='350px' height='350px' alt='${product.title}'>
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

const checkBoxSelector = () =>{
  document.querySelectorAll('input[type="checkbox"').forEach(box =>{
    box.addEventListener('change', (updateCheckBoxState))
  })
  document.querySelectorAll('.star-rating-button').forEach(button =>{
    button.addEventListener('click', (event) =>{
      checkedFilters.starRating = event.currentTarget.getAttribute('data-rating')
      createFilters(checkedFilters)
    })
  })
}

const updateCheckBoxState = () =>{
  checkedFilters.categories = [...document.querySelectorAll('input[name="categories"]:checked')].map(box => Number(box.id))
  checkedFilters.onlyInStock = document.querySelector('#stock').checked
  createFilters(checkedFilters);
}

const createFilters = (checkedFilters) =>{
  let filteredProducts;
  if(checkedFilters.onlyInStock && checkedFilters.categories.length === 0){
    filteredProducts = productList.filter(products => products.stock > 0 && products.rating >= checkedFilters.starRating)
  }else if(checkedFilters.onlyInStock && checkedFilters.categories.length <= 1){
    filteredProducts = productList.filter(products => products.stock > 0 && checkedFilters.categories.includes(products.category) && products.rating >= checkedFilters.starRating)
  }else{
    filteredProducts = productList.filter(products => products.rating >= checkedFilters.starRating)
  }
  if(checkedFilters.categories.length != 0){
    if(checkedFilters.categories.length === 0){
      displayProducts(filteredProducts);
    }else{
      displayProducts(filteredProducts);
      createCategories(checkedFilters.categories);
    }
  }else{
    displayProducts(filteredProducts);
    showAllCategories()
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

const onPageLoad = () =>{
    setPageTitle('Shop', 'shop page for Green Home Living');
    createNav().then(() =>{
        isNavSticky();
        createCategories();
        displayProducts(productList);
        checkBoxSelector();
    })
}

window.onload = onPageLoad
