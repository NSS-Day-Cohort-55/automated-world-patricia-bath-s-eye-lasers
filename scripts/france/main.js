import { getFranceCities } from "./cities.js"
import { getFranceLandmarks } from "./landmarks.js"
import { getFranceCitizens } from "./citizens.js"

const citiesList = getFranceCities()
const landmarkList = getFranceLandmarks()
const citizenList = getFranceCitizens()

export const france = {
    cities: citiesList,
    landmarks: landmarkList,
    citizens: citizenList
}