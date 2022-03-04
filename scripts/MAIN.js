import { renderHTML } from "./html.js";
import { france } from "./france/main.js";
import { buildNav } from "./navbar.js"


const franceData = france;
renderHTML(franceData)

buildNav()