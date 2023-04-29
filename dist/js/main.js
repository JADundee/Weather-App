import { setLocationObject } from "./dataFunctions.js";
import { addSpinner, displayError } from "./domFunctions.js" 
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();


const initApp = () => {
    // Add listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoWeather);
    // Set up

    // Load weather
};

document.addEventListener("DOMContentLoaded", initApp)

const getGeoWeather = (event) => {
    if (event) {
        if (event.type === "click") {
            const mapIcon = document.querySelector(".fa-map-marker-alt");
            addSpinner(mapIcon);
        }
    }
    if (!navigator.geolocation) return geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
};

const geoError = (errObj) => {
    const errMsg = errObj ? errObj : "Geolocation not supported";
    displayError(errMsg, errMsg);
};

const geoSuccess = (position) => {
    const myCoordsObj = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        name: `lat:${position.coords.latitude} long:${position.coords.longitude}`
    };
    setLocationObject(currentLoc, myCoordsObj);
    updateDataAndDisplay(currentLoc);
};

const updateDataAndDisplay = async (locationObj) => {
   /*  const weatherJson = await getWeatherFromCoords(location);
    if (weatherJson) updateDisplay(weatherJson, locationObj); */
}