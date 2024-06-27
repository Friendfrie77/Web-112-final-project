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
        price = maxPrice(filteredPrice)
        console.log(price)
        maxVal = price;
        minVal = filteredPrice.priceRangeMin;
    }
    minSlider.value = minVal;
    maxSlider.value = maxVal
    if(minVal > maxVal - 10){
        minSlider.value = maxVal - 10;
    }
    if (maxVal < minVal + 10){
        maxSlider.value = minVal + 10;
    }
    const percentMin = (minSlider.value / price) * 100;
    const percentMax = (maxSlider.value / price) * 100;
    priceSlider.style.left = percentMin + '%';
    priceSlider.style.width = (percentMax - percentMin) + '%';
    minLable.innerText = `$${minSlider.value}`;
    maxLable.innerText = `$${maxSlider.value}`;
    minLable.style.left = percentMin + '%';
    maxLable.style.left = percentMax + '%';
    console.log(maxVal, minVal,percentMin, percentMax)
}

export {updateRangeLables}