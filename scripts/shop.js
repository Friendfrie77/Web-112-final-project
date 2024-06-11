import { productList, reviewCount } from "../productInfo.js";
import { createNav } from "./nav.js";
const displayProducts = () => {
  const wrapper = document.getElementById("mainContent");
  const toolWrapper = document.createElement("div");
  toolWrapper.className = "store-box";
  toolWrapper.innerHTML = `
        <h1 class='store-header'>Tools</h1>
    `;
  const toolDiv = document.createElement("div");
  toolDiv.className = "product-grid";
  const suppliesDiv = document.createElement("div");
  suppliesDiv.className = "store-box";
  suppliesDiv.innerHTML = `
        <h1 class='store-header'>Supplies</h1>
    `;
  productList.forEach((product) => {
    const productDiv = document.createElement("div");
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
    if (product.category === 1) {
      toolDiv.append(productDiv);
    } else {
      suppliesDiv.append(productDiv);
    }
  });
  toolWrapper.append(toolDiv);
  wrapper.append(toolWrapper);
  wrapper.append(suppliesDiv);
};

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
const onPageLoad = () => {
  createNav();
  displayProducts();
};
window.onload = onPageLoad;

export { getStars, displayProducts };
// export default productList;
