import {productList, categoryList} from '../productInfo.js';
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
    <legend style = 'margin-bottom:10px;'>Price Range</legend>
    <div class='slider-container'>
        <div class='price-slider'>
        </div>
    </div>
    <div class='range-input'>
        <input id='min' class='price-input' type = 'range' min = '0' max='${maxPrice()}' step ='1' value ='0' />
        <input id='max' class='price-input' type = 'range' min = '0' max='${maxPrice()}' step ='1' value ='${maxPrice()}' />
    </div>
    <span class='price-lable' id='lable-min'>test</span>
    <span class='price-lable' id='lable-max'>test</span>
    `
    return wrapper
}

const createManufacture = (filteredProducts) =>{
    const wrapper = document.querySelector('#brand-controls') ? document.querySelector('#brand-controls') : createFieldSet('brand-controls');
    let manufactureList = filteredProducts.map(product => product.brand)
    manufactureList = [...new Set(manufactureList)]
    wrapper.innerHTML = `
    <legend>Manufacture</legend>
    <div class='flex-col brand-container' id='brand-div'>
        ${manufactureList.map(brand =>
            `
            <div class='flex-row'>
                <input type='checkbox' name='brand' value='${brand}'/>
                <lable>${brand}</lable>       
            </div>
            `
        ).join('')}
    </div>
    <a class='expand-div-button' id='brand-div-button'>&#8897<span>See more</span></a>
    `
    return wrapper;
}

const expandBrandList = () =>{
    const div = document.querySelector('#brand-div');
    const button = document.querySelector('#brand-div-button');
    div.style.height = div.style.height ==='' ? '100%' : ''
    button.innerHTML = button.innerHTML.includes(`See more`) ? `&#8896<span>Close</span>` : `&#8897<span>See more</span>`
}

const expandRegionList = () =>{
    const div = document.querySelector('#region-div');
    const button = document.querySelector('#region-div-button');
    div.style.height = div.style.height ==='' ? '100%' : ''
    button.innerHTML = button.innerHTML.includes(`See more`) ? `&#8896<span>Close</span>` : `&#8897<span>See more</span>`
}
const expandEventListener = () =>{
    document.querySelector('#brand-div-button').addEventListener('click', expandBrandList)
    document.querySelector('#region-div-button').addEventListener('click', expandRegionList)
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

const createSeedRegion = (productList) =>{
    const wrapper = createFieldSet();
    let filteredList = productList.filter(product => product.category === 1).map(product => product.region);
    filteredList = [...new Set(filteredList)]
    console.log(filteredList)
    wrapper.innerHTML = `
    <legend>Seed Region</legend>
    <div class='flex-col brand-container' id='region-div'>
        ${filteredList.map(region =>
            `
            <div class='flex-row'>
                <input type='checkbox' name='region' value=${region} />
                <lable for='region'>${region}</lable>
            </div>
            `
        ).join(' ')}
    </div>
    <a class='expand-div-button' id='region-div-button'>&#8897<span>See more</span></a>
    `
    return wrapper;
}

const filterBrands = (filteredProducts) =>{
    const storeControls = document.querySelector('#brand-controls');
    storeControls.innerHTML = ``
    storeControls.append(createManufacture(filteredProducts))
    return storeControls;
}

const updateMenuForFilters = (filteredProducts, divID) =>{
    console.log(filteredProducts)
    // const menuToChange = document.querySelector(`#${divID}`);
    // menuToChange.innerHTML = ``;
    // let filterList;
    // let name;
    // if(divID === 'region-div'){
    //     filteredList = filteredProducts.filter(product => product.category === 1).map(product => product.region);
    //     filteredList = [...new Set(filteredList)];
    //     name = 'region'
    // }else if(divID === 'brand-div'){
    //     filterList = filteredProducts.map(product => product.brand);
    //     filterList = [...new Set(manufactureList)];
    //     name = 'brand'
    // }
    // menuToChange.innerHTML = `
    // ${filteredList.map( change =>
    //     `
    //     <div class='flex-row'>
    //         <input type='checkbox' name=${name} value=${change} />
    //         <lable for='region'>${change}</lable>
    //     </div>
    //     `
    // ).join(' ')}
    // `;
}

const createStoreControls = () =>{
     const wrapper = document.createElement('div');
     wrapper.className = 'store-controls'
     wrapper.append(createCategories('categories'));
     wrapper.append(createPriceRange())
     wrapper.append(createManufacture(productList))
     wrapper.append(createSeedRegion(productList))
     wrapper.append(createAvgCustomerReview());
     wrapper.append(createStock());
     return wrapper
}

export {createStoreControls, expandEventListener, updateMenuForFilters};