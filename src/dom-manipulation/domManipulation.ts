import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const cityInput = document.querySelector("#weather-location-input");
const cityText = document.querySelector("#location-text");
const DateDay = document.querySelector("#date-day");
const DatedayName = document.querySelector("#date-dayname");
const humidity = document.querySelector("#text-humidity");
const loadingDiv = document.querySelector("#loading-div");
const maxTemp = document.querySelector("#text-temp-max");
const minTemp = document.querySelector("#text-temp-min");
const spinner = document.querySelector("#spinner");
const temp = document.querySelector("#weather-temp");
const weatherDesc = document.querySelector("#weather-desc");
const WeatherIconPng = document.getElementById("weather-icon");
const wind = document.querySelector("#text-wind");


// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
     
}

// TODO: Get the city from the input element
export function getCity(): string {
    if(cityInput){
        return (cityInput as HTMLInputElement).value;
    }
    return "";
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