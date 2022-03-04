import { renderHTML } from "./html.js";
import { getCroatia } from "./croatia/main.js";
import { getFrance } from "./france/main.js";
import { getIndia } from "./india/main.js"
import { getJapan } from "./japan/main.js"
// import { buildNav } from "./navbar.js"


// const croatiaData = croatia;
// const franceData = france;
// const indiaData = india;
// const japanData = japan;
// renderHTML(getIndia())





const franceEl = document.getElementById("france")
franceEl.addEventListener("click", () => {
    // const france = getFrance()
    // renderHTML(france)
    const france = new Promise((resolve, reject) => {
        resolve(getFrance());
    }).then((value) => {renderHTML(value)})
})

const croatiaEl = document.getElementById("croatia")
croatiaEl.addEventListener("click", () => {
    const croatia = new Promise((resolve, reject) => {
        resolve(getCroatia());
    }).then((value) => {renderHTML(value)})
    // renderHTML(getCroatia())
})

// const indiaEl = document.getElementById("india")
// indiaEl.addEventListener("click", () => {renderHTML(getIndia())})

// const japanEl = document.getElementById("japan")
// japanEl.addEventListener("click", () => {renderHTML(getJapan())})