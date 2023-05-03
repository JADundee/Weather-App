import { getWeatherFromCoords } from "./dataFunctions";

export const setPlaceholderText = () => {
    const input = document.getElementById("searchBar__text");
    window.innerWidth < 400 ? (input.placeholder = "City, Province, or Country") : (input.placeholder = "City, Province, Country, or Zip/Postal Code")
};

export const addSpinner = (element) => {
    animateButton(element);
    setTimeout(animateButton, 1000, element);
};

const animateButton = (element) => {
    element.classList.toggle("none");
    element.nextElementSibling.classList.toggle("block");
    element.nextElementSibling.classList.toggle("none");
};

export const displayError = (headerMsg, srMsg) => {
    updateWeatherLocationHeader(headerMsg);
    updateScreenReaderConfirmation(srMsg);
};

export const displayApiError = (statusCode) => {
    const properMsg = toProperCase(statusCode.message);
    updateWeatherLocationHeader(properMsg);
    updateScreenReaderConfirmation(`${properMsg}. Please try again.`);
};

const toProperCase = (text) => {
    const words = text.split(" ");
    const properWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return properWords.join(" ");
};

const updateWeatherLocationHeader = (message) => {
    const h1 = document.getElementById("currentForecast__location");
    h1.textContent = message;
};

export const updateScreenReaderConfirmation = (message) => {
    document.getElementById("confirmation").textContent = message;
};

export const updateDisplay = (weatherJson, locationObj) => {
    fadeDisplay();
    clearDisplay();
    const weatherClass = getWeatherClass(weatherJson.current.weather[0].icon);

    fadeDisplay();
};

const fadeDisplay = () => {
    const cc = document.getElementById("currentForecast");
    cc.classList.toggle("zero-vis");
    cc.classList.toggle("fade-in");
    const sixDay = document.getElementById("dailyForecast");
    sixDay.classList.toggle("zero-vis");
    sixDay.classList.toggle("fade-in");
};

const clearDisplay = () => {
    const currentConditions = document.getElementById("currentForecast__conditions");
    deleteContents(currentConditions);
    const sixDay = document.getElementById("dailyForecast__contents");
    deleteContents(sixDay);
};

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

const getWeatherClass = (icon) => {
    const firstTwoChars = icon.slice(0,2);
    const lastChar = icon.slice(2);
    const weatherLookup = {
        "09": "snow",
        "10": "rain",
        "11": ""
    }
}