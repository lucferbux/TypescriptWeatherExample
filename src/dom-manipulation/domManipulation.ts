import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// References for all the HTML elements
export const buttonClick = document.getElementById("button-location") as HTMLButtonElement;
const weatherIconPng = document.getElementById("weather-icon") as HTMLImageElement;
const dateDayName = document.getElementById("date-dayname") as HTMLHeadingElement;
const dateDay = document.getElementById("date-day") as HTMLSpanElement;
const locationText = document.getElementById("location-text") as HTMLSpanElement;
const weatherTemp = document.getElementById("weather-temp") as HTMLHeadingElement;
const weatherDesc = document.getElementById("weather-desc") as HTMLHeadingElement;
const textTempMax = document.getElementById("text-temp-max") as HTMLSpanElement;
const textTempMin = document.getElementById("text-temp-min") as HTMLSpanElement;
const textHumidity = document.getElementById("text-humidity") as HTMLSpanElement;
const textWind = document.getElementById("text-wind") as HTMLSpanElement;
const locationInput = document.getElementById("weather-location-input") as HTMLInputElement;
const loadingSpinner = document.getElementById("loading-spinner") as HTMLDivElement;


// Function to update the interface with weather data
export const updateInteface = (weather: WeatherResponse): void => {
    // Update location and date information
    locationText.textContent = weather.name;
    dateDayName.textContent = getDayOfWeek();
    dateDay.textContent = getDate();
    
    // Update weather information
    weatherTemp.textContent = `${Math.round(weather.main.temp)}°C`;
    weatherDesc.textContent = weather.weather[0].description;
    
    // Update additional weather data
    textTempMax.textContent = `${Math.round(weather.main.temp_max)}°C`;
    textTempMin.textContent = `${Math.round(weather.main.temp_min)}°C`;
    textHumidity.textContent = `${weather.main.humidity}%`;
    textWind.textContent = `${weather.wind.speed} m/s`;
    
    // Update weather icon
    changeWeatherIcon(weather.weather[0].icon);
}

// Get the city from the input element
export function getCity(): string {
    return locationInput.value.trim();
}

// Show loading spinner and disable button
export function showLoading(): void {
    if (loadingSpinner) {
        loadingSpinner.classList.remove('hidden');
    }
    if (buttonClick) {
        buttonClick.disabled = true;
    }
}

// Hide loading spinner and enable button
export function hideLoading(): void {
    if (loadingSpinner) {
        loadingSpinner.classList.add('hidden');
    }
    if (buttonClick) {
        buttonClick.disabled = false;
    }
}

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
}

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather === "string") {
        if (weatherIconPng) weatherIconPng.src = mappedWeather;
    }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');    
    }
}

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
}