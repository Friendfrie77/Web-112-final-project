'use strict'
import {isNavSticky, setPageTitle} from "../../helpers.js";
import { createNav } from "../../nav.js";


const onPageLoad = () =>{
   setPageTitle('Rain Collection', 'test')
   createNav().then(() =>{
    isNavSticky()
   })
}
window.onload = onPageLoad;