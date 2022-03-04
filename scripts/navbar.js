import { renderHTML } from "./html.js"
// import { croatia } from "./croatia/main.js"
import { france } from "./france/main.js"
// import { india } from "./india/main.js"
// import { japan } from "./japan/main.js"


document.addEventListener("click", (x) => { console.log(x) })

export const buildNav = () => {
    const nav = document.querySelectorAll(".navbar__link")
    
    for (const navEl of nav) {
        console.log(navEl)
        navEl.addEventListener("click", function () {
            switch (navEl.id) {
                case "croatia":
                    renderHTML(croatia)
                    break;
                case "france":
                    renderHTML(france)
                    break;
                case "india":
                    renderHTML(india)
                    break;
                case "japan":
                    renderHTML(japan)
                    break;

            }
            


        })
    }


}


