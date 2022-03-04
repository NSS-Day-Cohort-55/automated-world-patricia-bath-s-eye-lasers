import { renderHTML } from "./html.js";
import { france } from "./france/main.js";

import { injectURL } from "./btn-randomLink.js"

const randomButton = document.querySelector(".btn")
randomButton.addEventListener('click', injectURL(randomButton));

renderHTML(france)