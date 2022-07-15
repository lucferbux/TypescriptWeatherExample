import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");

const dateName = document.getElementById("date-dayname");
const dateDay = document.getElementById("date-day");
const locationText = document.getElementById("location-text");

const weatherTemp = document.getElementById("weather-temp");
const weatherDesc = document.getElementById("weather-desc");

const textTempMax = document.getElementById("text-temp-max");
const textTempMin = document.getElementById("text-temp-min");
const textHumidity = document.getElementById("text-humidity");
const textWind = document.getElementById("text-wind");

const weatherLocationInput = document.getElementById("weather-location-input");

// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {

    if (dateName) dateName.textContent = getDayOfWeek(); 
    if (dateDay) dateDay.textContent = getDate(); 
    if (locationText) locationText.textContent = weather.name; 
    if (weatherTemp) weatherTemp.textContent = Math.floor(weather.main.temp).toString() + "ºC"; 
    if (weatherDesc) weatherDesc.textContent = weather.weather[0].main; 
    if (textTempMax) textTempMax.textContent = Math.floor(weather.main.temp_max).toString() + " ºC"; 
    if (textTempMin) textTempMin.textContent = Math.floor(weather.main.temp_min).toString() + " ºC"; 
    if (textHumidity) textHumidity.textContent = Math.floor(weather.main.humidity).toString() + " %"; 
    if (textWind) textWind.textContent = weather.wind.speed + " m/s";
    changeWeatherIcon(weather.weather[0].icon ?? '01d');
}

// TODO: Get the city from the input element
export function getCity(): string {

    let city = '';
    city = (weatherLocationInput as HTMLInputElement).value;

    return city;
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