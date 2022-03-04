import { getIndiaCities } from "./cities.js"
import { getIndiaLandmarks } from "./landmarks.js"
import { getIndiaCitizens } from "./citizens.js"

const cityList = getIndiaCities();
const landmarkList = getIndiaLandmarks();
const citizenList = getIndiaCitizens();

export const india = {
    countryName: "India",
    countryHeadline: "The Country of Spice",
    cities: cityList,
    landmarks: landmarkList,
    citizens: citizenList
}