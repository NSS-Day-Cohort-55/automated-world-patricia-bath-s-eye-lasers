import { getCroatiaCities } from "./cities.js"
import { getCroatiaLandmarks } from "./landmarks.js"
import { getCroatiaCitizens } from "./citizens.js"

const cityList = getCroatiaCities();
const landmarkList = getCroatiaLandmarks();
const citizenList = getCroatiaCitizens();

export const croatia = {
    countryName: "Croatia",
    countryHeadline: "The Country of 1000 Islands",
    cities: cityList,
    landmarks: landmarkList,
    citizens: citizenList
}