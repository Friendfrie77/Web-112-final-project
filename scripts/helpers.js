const setPageTitle = (title, description) =>{
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description)
    
}
const navBarHero = (navBar, navLinks, navDropdownButton, navDropdown) =>{
  return() =>{
    if((window.scrollY >= 120) && navBar.className !== 'sticky'){
      navBar.className += 'sticky';
      navDropdownButton.style.color = 'white';
      navDropdown.style.background = '#31572C';
      navDropdown.style.marginTop = '.6rem';
      for(const a of navLinks){
        a.style.color = 'white';
      }
    }else if(window.scrollY < 100){
      navBar.classList.remove('sticky')
      navDropdownButton.style.color = '';
      navDropdown.style.background = '';
      navDropdown.style.marginTop = '';
      for(const a of navLinks){
        a.style.color = '';
      }
    }
  }
}
const isNavSticky = () =>{
  const navBar = document.querySelector('nav');
  const navLinks = document.getElementsByClassName('navLink');
  const navDropdownButton = document.getElementById('navDropdownButton');
  const navDropdown = document.getElementById('navDropDown');
  if(!document.querySelector('.hero-img-wrapper')){
    navBar.className += 'sticky';
    navDropdownButton.style.color = 'white';
    navDropdown.style.background = '#31572C';
    navDropdown.style.marginTop = '.6rem';
    for( const a of navLinks){
      a.style.color = 'white';
    }
  }else{
    window.addEventListener('scroll', navBarHero(navBar, navLinks, navDropdownButton, navDropdown))
  }
}

export {setPageTitle, isNavSticky}