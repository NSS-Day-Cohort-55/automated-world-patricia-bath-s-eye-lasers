import { renderHTML } from "./html.js";
import { getCroatia } from "./croatia/main.js";
import { getFrance } from "./france/main.js";
import { getIndia } from "./india/main.js"
import { getJapan } from "./japan/main.js"

import { injectURL } from "./btn-randomLink.js"

const randomButton = document.querySelector(".btn")
randomButton.addEventListener('click', injectURL(randomButton));




const croatiaEl = document.getElementById("croatia")
croatiaEl.addEventListener("click", () => {
    const croatia = new Promise((resolve, reject) => {
        resolve(getCroatia());
    }).then((value) => {renderHTML(value)})
})

const franceEl = document.getElementById("france")
franceEl.addEventListener("click", () => {
    const france = new Promise((resolve, reject) => {
        resolve(getFrance());
    }).then((value) => {renderHTML(value)})
})


const indiaEl = document.getElementById("india")
indiaEl.addEventListener("click", () => {
    const india = new Promise((resolve, reject) => {
        resolve(getIndia());
    }).then((value) => {renderHTML(value)})
})

const japanEl = document.getElementById("japan")
japanEl.addEventListener("click", () => {
    const japan = new Promise((resolve, reject) => {
        resolve(getJapan());
    }).then((value) => {renderHTML(value)})
})