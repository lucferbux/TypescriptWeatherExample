import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const temperature = document.getElementById("weather-temp");
const weatherDescription = document.getElementById("weather-desc");
const WeatherIconPng = document.getElementById("weather-icon");
const locationText = document.getElementById("location-text");
const DateDayName = document.getElementById("date-dayname");
const DateDay = document.getElementById("date-day");
const maxTemp = document.getElementById("text-temp-max");
const minTemp = document.getElementById("text-temp-min");
const humidity = document.getElementById("text-humidity");
const wind = document.getElementById("text-wind");
const locationInput = document.getElementById("weather-location-input");

// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    if (temperature) temperature.textContent = Math.floor(weather.main.temp).toString() + "°C";
    if (weatherDescription) weatherDescription.textContent = weather.weather[0].description;
    changeWeatherIcon(weather.weather[0].icon ?? "01d");

    if (locationText) locationText.textContent = weather.name;
    if (DateDayName) DateDayName.textContent = getDayOfWeek();
    if (DateDay) DateDay.textContent = getDate();
    if (maxTemp) maxTemp.textContent = Math.floor(weather.main.temp_max).toString() + "°C";
    if (minTemp) minTemp.textContent = Math.floor(weather.main.temp_min).toString() + "°C";
    if (humidity) humidity.textContent = weather.main.humidity.toString() + "%";
    if (wind) wind.textContent = weather.wind.speed.toString() + "km/h";
    
}

// TODO: Get the city from the input element
export function getCity(): string {
    if (locationInput) {
        return (locationInput as HTMLInputElement).value;
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