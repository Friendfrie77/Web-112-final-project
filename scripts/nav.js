"use strict";
const root = document.getElementById('root')
const navBar = () =>{
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <a href="index.html"><img class="logo" src="images/logo.svg" height="200px" width="200px" alt="company logo"></a>
        <input id='mobile-nav-toggle' type='checkbox' />
        <label class ='mobile-nav-container' for='mobile-nav-toggle'>
            <div class='mobile-nav' id = 'mobile-nav'></div>
        </label>
        <ul class="navlinks">
            <li><a class = 'navLink' href="index.html">Home</a></li>
            <li class="dropdown"><button id='navDropdownButton'>Services<span>&#9660;</span></button>
                <ul class="nav-dropdown" id='navDropDown'>
                    <li><a class ='navLink' href="solar.html">Solar</a></li>
                    <li><a class ='navLink' href="lawns.html">Green Lawns</a></li>
                    <li><a class ='navLink' href="rain.html">Rain Collection</a></li>
                </ul>
            </li>
            <li><a class ='navLink' href="shop.html">Store</a></li>
            <li><a class ='navLink' href="about.html">About</a></li>
        </ul>
    `
    root.append(nav)
}
const contentDiv = () =>{
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'mainContent');

    root.append(mainContent)
}
const footer = () =>{
    const footer = document.createElement('footer')
    const year = new Date().getFullYear();
    footer.innerHTML = `
        <div class="footer-wrapper">
        <div class="footer-social">
            <h1>Follow us here!</h1>
            <div class='social-links'>
                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter social"></i></a>
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram social"></i></a>
            </div>
        </div>
        <div class="newsletter">
            <h1>Newsletter</h1>
            <fieldset>
                <form>
                    <span class="newsletter-popup" id="confirm">Thanks for signing up!</span>
                    <input type="email" placeholder="Email" />
                    <button type="button" onclick="popup()">Sign Up!</button>
                </form>
            </fieldset>
        </div>
        <div class="sitemap">
            <h1>Site map</h1>
            <ul class="sitemap-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="lawns.html">Lawns</a></li>
                <li><a href="solar.html">Solar</a></li>
                <li><a href="rain.html">Rain</a></li>
                <li><a href="shop.html">Store</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
    <p class="copyright">&copy; ${year} Green Home Living</p>
    `
    root.append(footer)
}

const createNav = () =>{
    return new Promise((resolve) =>{
        navBar();
        contentDiv();
        footer();
        resolve();
    })
}

export {createNav}

