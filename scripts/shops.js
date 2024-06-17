import { createNav } from "./nav.js";
import { setPageTitle, navBarNoHero} from "./helpers.js";
import {productList, reviewCount, categoryList} from './productInfo.js';

const createCategories = () =>{
    const wrapper = document.getElementById("mainContent");
    const index = document.createElement('section');
    index.className = 'content-wrapper';
    Object.entries(categoryList).forEach(([key, value]) => {
        const tempWrapper = document.createElement('div');
        tempWrapper.className = 'store-box';
        const tempBox = document.createElement('div');
        tempBox.className = 'product-grid'
        tempBox.setAttribute('id', `${value}`);
        tempWrapper.innerHTML = `
          <h1 class='store-header'>${value}</h1>
      `; 
        tempWrapper.append(tempBox);
        index.append(tempWrapper);
    })
    wrapper.append(index)
}
const displayProducts =() =>{
    productList.forEach((product) =>{
        const tempWrapper = document.getElementById(`${categoryList[product.category]}`)
        const productDiv = document.createElement('div');
        productDiv.className = "store-product-flex";
        productDiv.innerHTML = `
                    <a href='product.html?id=${
                    product.id
                    }'"><img class='store-img' src=${
        product.img
        } width='350px' height='350px' alt='${product.title}'/></a>
                    <div class='product-text'>
                        <p>${product.brand}</p>
                        <p>${product.title}</p>
                    </div>
                    <div class='product-price'>
                        <h2>$${product.price}</h2>
                        <div>
                            <span>${product.rating}</span> <span>${getStars(
        product.rating
        )}</span> <link>${reviewCount(product.id)}</link>
                        </div>
                        <button>Add to Cart</button>
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

const onPageLoad = () =>{
    setPageTitle('Shop', 'shop page for Green Home Living');
    createNav().then(() =>{
        createCategories();
        displayProducts();
    })
    if(document.getElementsByClassName('hero-img-wrapper').length === 0){
        navBarNoHero()
    }

}

window.onload = onPageLoad