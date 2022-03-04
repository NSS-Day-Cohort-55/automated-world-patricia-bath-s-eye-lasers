import { getJapanCities } from "./cities.js"
import { getJapanLandmarks } from "./landmarks.js"
import { getJapanCitizens } from "./citizens.js"

const cityList = getJapanCities();
const landmarkList = getJapanLandmarks();
const citizenList = getJapanCitizens();


export const getJapan = () => {
    const japan = {
        countryName: "Japan",
        countryHeadline: "The Land of the Rising Sun",
        cities: cityList,
        landmarks: landmarkList,
        citizens: citizenList
    }

    return japan
}