import {productList, reviewCount, categoryList} from '../productInfo.js';
import { getStars, maxPrice} from '../helpers.js';

const createFieldSet = (id) =>{
    const wrapper = document.createElement('fieldset')
    wrapper.className = 'store-control-fieldset'
    if(id){
        wrapper.setAttribute('id', id)
    }
    return wrapper;
}

const createCategories = (id) =>{
    let wrapper;
    if(id){
        wrapper = createFieldSet(id)
    }else{
        wrapper = createFieldSet();
    }
    wrapper.innerHTML = `
    <legend>Categories</legend>
     ${Object.entries(categoryList).map(([key, value]) =>
      `<div>
        <input type='checkbox' id=${key} name='categories' value=${key}/>
        <lable for=${key}>${value}</lable>
      </div>`
     ).join('')}
    `
    return wrapper
}

const createPriceRange = () =>{
    const wrapper = createFieldSet();
    wrapper.style.marginBottom = '10px'
    wrapper.innerHTML = `
    <legend>Price Range</legend>
    <div class='slider-container'>
        <div class='price-slider'>
        </div>
    </div>
    <div class='range-input'>
        <input id='min' class='price-input' type = 'range' min = '0' max='${maxPrice()}}' step ='1' value ='0' />
        <input id='max' class='price-input' type = 'range' min = '0' max='${maxPrice()}' step ='1' value ='${maxPrice()}' />
    </div>
    <span class='price-lable' id='lable-min'>test</span>
    <span class='price-lable' id='lable-max'>test</span>
    `
    return wrapper
}

const createManufacture = () =>{


}

const createAvgCustomerReview = () =>{
    const wrapper = createFieldSet();
    wrapper.innerHTML = `
    <legend>Avg. Customer Review</legend>
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
    `
    return wrapper;
}
const createStock = () =>{
    const wrapper = createFieldSet();
    wrapper.innerHTML = `
    <legend>Stock</legend>
    <div>
        <input type='checkbox' name = 'stock' id='stock'/>
        <lable for='stock'>In Stock</lable>
    </div>
    `
    return wrapper;
}
const createStoreControls = () =>{
     const wrapper = document.createElement('div');
     wrapper.className = 'store-controls'
     wrapper.append(createCategories('categories'));
     wrapper.append(createPriceRange())
     wrapper.append(createAvgCustomerReview());
     wrapper.append(createStock());
     return wrapper
}

export {createStoreControls};