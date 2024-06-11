import { createNav } from "./nav.js";
import { displayProducts } from "./shop.js";

const createPage = () => {
  createNav();
  displayProducts();
};
window.onload = createPage;
