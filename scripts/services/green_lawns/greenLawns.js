'use strict'
import {isNavSticky, setPageTitle} from "../../helpers.js";
import { createNav } from "../../nav.js";


const onPageLoad = () =>{
   setPageTitle('Lawns', 'test')
   createNav().then(() =>{
    isNavSticky()
   })
}
window.onload = onPageLoad;