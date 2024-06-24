import { createNav } from "./nav.js";
import { setPageTitle, isNavSticky} from "./helpers.js";
import {productList, reviewCount, categoryList} from './productInfo.js';

const createCategories = (id) =>{
    const wrapper = document.getElementById("mainContent");
    const index = document.createElement('section');
    index.className = 'content-wrapper store-wrapper';
    if(!document.querySelector('.store-controls')){
      const controls = createStoreControls()
      index.append(controls)
    }
    const storeWrapper = document.createElement('div')
    if(id){
      const categoryDivs = document.querySelectorAll('.store-box')
      categoryDivs.forEach(div =>{
        const divID = Number(div.id);
        if(!id.includes(divID)){
          div.style.display = 'none'
        }if(id.includes(divID) && div.style.display === 'none'){
          div.style.display ='block'
        }
      })
    }else{
      Object.entries(categoryList).forEach(([key, value]) => {
        const tempWrapper = document.createElement('div');
        tempWrapper.className = 'store-box';
        tempWrapper.setAttribute('id', `${key}`)
        const tempBox = document.createElement('div');
        tempBox.className = 'product-grid'
        tempBox.setAttribute('id', `${value}`);
        tempWrapper.innerHTML = `
          <h1 class='store-header'>${value}</h1>
      `; 
        tempWrapper.append(tempBox);
        storeWrapper.append(tempWrapper);
      })
    }
    index.append(storeWrapper)
    wrapper.append(index)
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
      <input type='checkbox' id=${key} name=${value} value=${key} />
      <lable for=${value}>${value}</lable>
    </div>`
   ).join('')}
   </fieldset>
  <fieldset class='store-control-fieldset'>
    <legend>Stock</legend>
    <div>
      <input type='radio' />
      <lable>In Stock</lable>
    </div>
  </fieldset>
  `
  return wrapper
}
const createFilters = (id, categories) =>{
  const filteredProducts = productList.filter(products => id.includes(products.category))
  displayProducts(filteredProducts);
  createCategories(id ,categories);
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
    starsHTML += '<i class="far fa-star"></i>';
  }
  return starsHTML;
};
const stockRadioChange = () =>{
  
}
const checkBoxCatChange = () =>{
  const fieldsets = document.querySelector('#categories');
  const checkbox = fieldsets.querySelectorAll("input[type = 'checkbox']")
  let productId = []
  checkbox.forEach(box =>{
    box.addEventListener('change', (event) =>{
      if(event.target.type === 'checkbox'){
        const id = Number(event.target.value)
        if(event.target.checked){
          productId.push(id)
        }else{
          const index = productId.indexOf(id)
          productId.splice(index, 1)
        }
        productId = productId.filter((item) => item !== undefined && item !== null);
        if(productId.length === 0){
          displayProducts(productList)
          showAllCategories();
        }else{
          createFilters(productId)
        }
      }
    })
  })
}
const onPageLoad = () =>{
    setPageTitle('Shop', 'shop page for Green Home Living');
    createNav().then(() =>{
        isNavSticky();
        createCategories();
        displayProducts(productList);
        checkBoxCatChange();
    })
}

window.onload = onPageLoad
