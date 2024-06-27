import { maxPrice} from "../helpers.js";

const updateRangeLables = (filteredPrice) =>{
    let price;
    const minSlider = document.querySelector('#min');
    const minLable = document.querySelector('#lable-min');
    const maxSlider = document.querySelector('#max');
    const maxLable = document.querySelector('#lable-max');
    const priceSlider = document.querySelector('.price-slider')
    let minVal;
    let maxVal;
    if(!filteredPrice){
        price = parseInt(maxSlider.value);
        maxVal = price;
        minVal = 0
    }else{
        console.log(filteredPrice)
        price = maxPrice(filteredPrice)
        maxVal = parseInt(price);
        minVal = parseInt(filteredPrice.priceRangeMin);
    }
    if(minVal > maxVal - 100){
        minVal = maxVal - 100;
    }
    if (maxVal < minVal + 100){
        maxVal = minVal + 100;
    }
    minSlider.value = minVal;
    maxSlider.value = maxVal;
    const percentMin = (minSlider.value / maxPrice()) * 100;
    const percentMax = (maxSlider.value / maxPrice()) * 100;
    priceSlider.style.left = percentMin + '%';
    priceSlider.style.width = (percentMax - percentMin) + '%';
    minLable.innerText = `$${minSlider.value}`;
    maxLable.innerText = `$${maxSlider.value}`;
    minLable.style.left = percentMin + '%';
    maxLable.style.left = percentMax + '%';
    return {minVal, maxVal}
}

export {updateRangeLables}