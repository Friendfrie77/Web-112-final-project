"use strict";
import { createNav } from "../nav.js";
import { setPageTitle, isNavSticky} from "../helpers.js";

const onPageLoad = () =>{
    setPageTitle('About', 'About Green Home Living')
    createNav()
}

window.onload = onPageLoad