const setPageTitle = (title, description) =>{
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute('content', description)
    
}

const navBarNoHero = () =>{
    const navBar = document.querySelector('nav');
    const navLinks = document.getElementsByClassName('navLink');
    const navDropdownButton = document.getElementById('navDropdownButton');
    const navDropdown = document.getElementById('navDropDown');
    navBar.className += 'sticky';
    navDropdownButton.style.color = 'white';
    navDropdown.style.background = '#31572C';
    navDropdown.style.marginTop = '.6rem';
    for( const a of navLinks){
      a.style.color = 'white';
    }
}

// const navBarHero = addEventListener("scroll", (event) =>{
//     const navBar = document.querySelector('nav');
//     const navLinks = document.getElementsByClassName('navLink');
//     const navDropdownButton = document.getElementById('navDropdownButton');
//     const navDropdown = document.getElementById('navDropDown');
//     if((window.scrollY >= 120) && navBar.className !== 'sticky'){
//       navBar.className += 'sticky';
//       navDropdownButton.style.color = 'white';
//       navDropdown.style.background = '#31572C';
//       navDropdown.style.marginTop = '.6rem';
//       for(a of navLinks){
//         a.style.color = 'white';
//       }
//     }else if(window.scrollY < 100){
//       navBar.classList.remove('sticky')
//       navDropdownButton.style.color = '';
//       navDropdown.style.background = '';
//       navDropdown.style.marginTop = '';
//       for(a of navLinks){
//         a.style.color = '';
//       }
//     }
//   })

export {setPageTitle, navBarNoHero}