"use strict";
function responsivenav(){
  const nav = document.getElementById("nav-bar");
  if (nav.className === "top-nav"){
      nav.className += " responsive";
  }
  else{
      nav.className = "top-nav";
  }
  console.log('test')
}

// const navBarHero = addEventListener("scroll", (event) =>{
//   const navBar = document.querySelector('nav');
//   const navLinks = document.getElementsByClassName('navLink');
//   const navDropdownButton = document.getElementById('navDropdownButton');
//   const navDropdown = document.getElementById('navDropDown');
//   if((window.scrollY >= 120) && navBar.className !== 'sticky'){
//     navBar.className += 'sticky';
//     navDropdownButton.style.color = 'white';
//     navDropdown.style.background = '#31572C';
//     navDropdown.style.marginTop = '.6rem';
//     for(a of navLinks){
//       a.style.color = 'white';
//     }
//   }else if(window.scrollY < 100){
//     navBar.classList.remove('sticky')
//     navDropdownButton.style.color = '';
//     navDropdown.style.background = '';
//     navDropdown.style.marginTop = '';
//     for(a of navLinks){
//       a.style.color = '';
//     }
//   }
// })
