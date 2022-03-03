import { getFranceCities } from "./cities.js"
import { getFranceLandmarks } from "./landmarks.js"
import { getFranceCitizens } from "./citizens.js"

const citiesList = getFranceCities()
const landmarkList = getFranceLandmarks()
const citizenList = getFranceCitizens()

export const infoHTML = () => {
    const infoEl = document.querySelector(".info")
    let htmlString = ""
    htmlString += `<section class="info__cities">
        <h2 class="info__headline">
            Famous Cities
        </h2>`
    for (const city of citiesList) {
        htmlString += `
        <h3 class="info__city-name"> ${city.cityName}</h3>
            <ul class="info__list"> 
                <li class="info__info">
                    Population: ${city.cityPopulation}
                </li>
                    <li class="info__info">
                    ${city.cityDescription}
                    </li>
                <li class="info__info">
                    <a class="info__link">
                    ${city.citySiteLink}
                    </a>
                </li>
            </ul> `
    }
htmlString += `</section>

        <section class="info__landmark">
            <h2 class="info__headline">
                Famous Landmark
            </h2>`
        for (const landmark of landmarkList) {
            htmlString += `
            <h3 class="info__landmark-name">
                ${landmark.landmarkName}
            </h3>
            <p class="info__info"> 
                Established: ${landmark.landmarkYearCreated}
            </p>
            <p class="info__info">
            ${landmark.landmarkDescription}
            </p>
            <a class="info__link">
            ${landmark.landmarkSiteLink}
            </a>` 
        }
htmlString += `</section>

        <section class="info__celeb">
            <h2 class="info__headline info--light-text">
                Famous Citizens
            </h2>`
        for (const citizen of citizenList) {
            htmlString += `
            <h3 class="info__celeb-name info--light-text">
                ${citizen.citizenName}
            </h3>
            <p class="info__info info--light-text"> 
                ${citizen.citizenOccupation}
            </p>
            <p class="info__info info--light-text">
                ${citizen.citizenDescription}
            </p>
            <a class="info__link info--light-text">
                 ${citizen.citizenSiteLink}
            </a>`
        } 

       htmlString += '</section>'

    infoEl.innerHTML = htmlString
}