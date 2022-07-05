import { darkMode, colorMode } from "./helpers/switcher.js";
import copiar from "./helpers/copy.js";

const d = document;

d.addEventListener('DOMContentLoaded', ()=>{
    darkMode();
    colorMode();
    copiar();
});