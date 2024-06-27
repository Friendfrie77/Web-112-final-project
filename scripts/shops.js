import { createNav } from "./nav.js";
import { setPageTitle, isNavSticky, getStars, maxPrice} from "./helpers.js";
import {productList, reviewCount, categoryList} from './productInfo.js';
import {createStoreControls} from "./store/shopControls.js";
import { updateRangeLables } from "./store/priceSliderDisplayTag.js";

let checkedFilters = {
  categories: [],
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
    // index.append(test());
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
  checkedFilters.categories = [...document.querySelectorAll('input[name="categories"]:checked')].map(box => Number(box.id))
  checkedFilters.onlyInStock = document.querySelector('#stock').checked
  renderFiliteredProducts(checkedFilters)
}

const createFilters = (checkedFilters) =>{
  let filteredProducts;
  if(checkedFilters.onlyInStock && checkedFilters.categories.length === 0){
    filteredProducts = productList.filter(products => products.stock > 0 && products.rating >= checkedFilters.starRating && products.price >= checkedFilters.priceRangeMin && products.price <= checkedFilters.priceRangeMax)
  }else if(checkedFilters.onlyInStock && checkedFilters.categories.length <= 1){
    filteredProducts = productList.filter(products => products.stock > 0 && checkedFilters.categories.includes(products.category) && products.rating >= checkedFilters.starRating && products.price >= checkedFilters.priceRangeMin && products.price <= checkedFilters.priceRangeMax)
  }else{
    filteredProducts = productList.filter(products => products.rating >= checkedFilters.starRating && products.price >= checkedFilters.priceRangeMin && products.price <= checkedFilters.priceRangeMax)
  }
  return filteredProducts;
}

const renderFiliteredProducts = (checkedFilters) =>{
  const filters = createFilters(checkedFilters)
  console.log(checkedFilters)
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

}
// const createFilters = (checkedFilters) =>{
//   let filteredProducts;
//   if(checkedFilters.onlyInStock && checkedFilters.categories.length === 0){
//     filteredProducts = productList.filter(products => products.stock > 0 && products.rating >= checkedFilters.starRating && products.price >= checkedFilters.priceRangeMin && products.price <= checkedFilters.priceRangeMax)
//   }else if(checkedFilters.onlyInStock && checkedFilters.categories.length <= 1){
//     filteredProducts = productList.filter(products => products.stock > 0 && checkedFilters.categories.includes(products.category) && products.rating >= checkedFilters.starRating && products.price >= checkedFilters.priceRangeMin && products.price <= checkedFilters.priceRangeMax)
//   }else{
//     filteredProducts = productList.filter(products => products.rating >= checkedFilters.starRating && products.price >= checkedFilters.priceRangeMin && products.price <= checkedFilters.priceRangeMax)
//   }
//   if(checkedFilters.categories.length != 0){
//     if(checkedFilters.categories.length === 0){
//       displayProducts(filteredProducts);
//     }else{
//       displayProducts(filteredProducts);
//       createCategories(checkedFilters.categories);
//     }
//   }else{
//     displayProducts(filteredProducts);
//     showAllCategories()
//   }
// }

const onPageLoad = () =>{
    setPageTitle('Shop', 'shop page for Green Home Living');
    createNav().then(() =>{
        isNavSticky();
        createCategories();
        displayProducts(productList);
        checkBoxSelector();
        priceSlider();
        updateRangeLables()
    })
}

window.onload = onPageLoad
