import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const weatherIconPng = document.getElementById("weather-icon") as HTMLImageElement | null;
const dateDayNameElement = document.getElementById("date-dayname");
const dateDayElement = document.getElementById("date-day");
const locationTextElement = document.getElementById("location-text");
const weatherTempElement = document.getElementById("weather-temp");
const weatherDescElement = document.getElementById("weather-desc");
const tempMaxElement = document.getElementById("text-temp-max");
const tempMinElement = document.getElementById("text-temp-min");
const humidityElement = document.getElementById("text-humidity");
const windElement = document.getElementById("text-wind");
const weatherLocationInput = document.getElementById("weather-location-input") as HTMLInputElement | null;


// Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    if (dateDayNameElement) dateDayNameElement.textContent = getDayOfWeek();
    if (dateDayElement) dateDayElement.textContent = getDate();
    if (locationTextElement) locationTextElement.textContent = weather.name;
    if (weatherTempElement) weatherTempElement.textContent = `${Math.round(weather.main.temp)}°C`;
    if (weatherDescElement) weatherDescElement.textContent = weather.weather[0].main;
    if (tempMaxElement) tempMaxElement.textContent = `${Math.round(weather.main.temp_max)}°C`;
    if (tempMinElement) tempMinElement.textContent = `${Math.round(weather.main.temp_min)}°C`;
    if (humidityElement) humidityElement.textContent = `${weather.main.humidity}%`;
    if (windElement) windElement.textContent = `${weather.wind.speed} m/s`;

    if (weather.weather[0]?.icon) {
        changeWeatherIcon(weather.weather[0].icon);
    }
}

// Get the city from the input element
export function getCity(): string {
    return weatherLocationInput?.value || "";
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
    if(typeof mappedWeather === "string") { // Ensure mappedWeather is a string before assigning
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