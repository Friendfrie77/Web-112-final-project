
//sticky nav
window.onscroll=function(){sticky_nav()};
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
function sticky_nav(){
    if (window.pageYOffset > sticky){
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

// responsive nav
function responsivenav(){
    var nav= document.getElementById("nav-bar");
    if (nav.className === "top-nav"){
        nav.className += " responsive";
    }
    else{
        nav.className = "top-nav";
    }
}

// hero img slide show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}

// newsletter submit message
function popup(){
    var popup = document.getElementById("confirm");
    popup.classList.toggle("show");
}

// store add to cart message
function store(){
    var popup = document.getElementsByClassNamedocument("span");
    popup.classList.toggle("show");
    console.log
}

