//builds the html for the header based on country provied as argument.
//returns the html string

const buildHeaderString = (country) => {
    let headerHTMLString = '';

    headerHTMLString += `
        <article class="country__info">
            <h1 class="country__headline">
                ${country.countryName}
            </h1>
            <p class="country__dscr">
                ${country.countryHeadline}
            </p>
        </article>
        <div class="country__container">
            <img class="country__image" src="./images/${country.countryName}/${country.countryName}.jpg" alt="country">   
        </div>
    `
    return headerHTMLString;
}


//buildMainString constructs the HTML string for the three columns 
//in the main section for the country provided as an argument
//returns the html string

const buildMainString = (country) => {
    let htmlString = ""

    //Column 1 - Cities
    htmlString += `
        <section class="info__cities">
            <h2 class="info__headline">
                Famous Cities
            </h2>`
    for (const city of country.cities) {
        htmlString += `
            <h3 class="info__city-name">
                ${city.cityName}</h3>
            <p class="info__info"> 
                Population: ${city.cityPopulation}</p>
            <p class="info__info">
                ${city.cityDescription}</p>
            <a class="info__link" href="${city.citySiteLink}">${city.cityName}</a>
         `
    }
    //Column 2 - Landmarks
    htmlString += `
        </section>

        <section class="info__landmark">
            <h2 class="info__headline">
                Famous Landmark
            </h2>`
    for (const landmark of country.landmarks) {
        htmlString += `
            <h3 class="info__landmark-name">
                ${landmark.landmarkName}</h3>
            <p class="info__info"> 
                Established: ${landmark.landmarkYearCreated}</p>
            <p class="info__info">
                ${landmark.landmarkDescription}</p>
            <a class="info__link" href="${landmark.landmarkSiteLink}">${landmark.landmarkName}</a>
        `
    }
    //Column 3 - Citizens
    htmlString += `
        </section>

        <section class="info__celeb">
            <h2 class="info__headline info--light-text">
                Famous Citizens
            </h2>`
    for (const citizen of country.citizens) {
        htmlString += `
            <h3 class="info__celeb-name info--light-text">
                ${citizen.citizenName}</h3>
            <p class="info__info info--light-text"> 
                ${citizen.citizenOccupation}</p>
            <p class="info__info info--light-text">
                ${citizen.citizenDescription}</p>
            <a class="info__link info--light-text" href="${citizen.citizenSiteLink}">${citizen.citizenName}</a>
        `
    }
    htmlString += '</section>'

    return htmlString
}

//updates the inner html of the header and main sections
export const renderHTML = (country) => {
    const headerEl = document.querySelector(".country")
    const infoEl = document.querySelector(".info")
    
    headerEl.innerHTML = buildHeaderString(country)
    infoEl.innerHTML = buildMainString(country)
}