"use strict";
function responsivenav(){
  const nav = document.getElementById("nav-bar");
  if (nav.className === "top-nav"){
      nav.className += " responsive";
  }
  else{
      nav.className = "top-nav";
  }
}

