import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// References for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const weatherTemp = document.getElementById("weather-temp");
const weatherDesc = document.getElementById("weather-desc");
const dateDayname = document.getElementById("date-dayname");
const dateDay = document.getElementById("date-day");
const locationText = document.getElementById("location-text");
const textTempMax = document.getElementById("text-temp-max");
const textTempMin = document.getElementById("text-temp-min");
const textHumidity = document.getElementById("text-humidity");
const textWind = document.getElementById("text-wind");
const cityInput = document.getElementById("weather-location-input") as HTMLInputElement;

// Update the UI with weather data
export const updateInteface = (weather: WeatherResponse): void => {
    if (!weather) return;
    if (weatherTemp) weatherTemp.textContent = `${Math.round(weather.main.temp)}ºC`;
    if (weatherDesc) weatherDesc.textContent = weather.weather[0].description;
    if (dateDayname) dateDayname.textContent = getDayOfWeek();
    if (dateDay) dateDay.textContent = getDate();
    if (locationText) locationText.textContent = `${weather.name}, ${weather.sys.country}`;
    if (textTempMax) textTempMax.textContent = `${Math.round(weather.main.temp_max)} ºC`;
    if (textTempMin) textTempMin.textContent = `${Math.round(weather.main.temp_min)} ºC`;
    if (textHumidity) textHumidity.textContent = `${weather.main.humidity} %`;
    if (textWind) textWind.textContent = `${weather.wind.speed} m/s`;
    if (WeatherIconPng) changeWeatherIcon(weather.weather[0].icon);
};

// Get the city from the input element
export function getCity(): string {
    return cityInput?.value.trim() || "";
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
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
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