import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const cityInput = document.querySelector("#weather-location-input");
const cityText = document.querySelector("#location-text");
const dateDay = document.querySelector("#date-day");
const dateDayName = document.querySelector("#date-dayname");
const humidity = document.querySelector("#text-humidity");
const maxTemp = document.querySelector("#text-temp-max");
const minTemp = document.querySelector("#text-temp-min");
const temp = document.querySelector("#weather-temp");
const weatherDesc = document.querySelector("#weather-desc");
const WeatherIconPng = document.getElementById("weather-icon");
const wind = document.querySelector("#text-wind");


// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {

    changeWeatherIcon(weather.weather[0].icon ?? "01d");
    cityText? cityText.textContent = weather.name : "--";
    dateDay? dateDay.textContent = getDate() : "--";
    dateDayName? dateDayName.textContent = getDayOfWeek() : "--";
    humidity? humidity.textContent = weather.main.humidity.toString() + " %" : "-- %";
    maxTemp? maxTemp.textContent = Math.floor(weather.main.temp_max) + " °C" : "-- °C";
    minTemp? minTemp.textContent = Math.floor(weather.main.temp_min) + " °C" : "-- °C";
    temp? temp.textContent = Math.floor(weather.main.temp).toString() + "°C" : "-- °C";
    weatherDesc? weatherDesc.textContent = weather.weather[0].main : "--";
    wind? wind.textContent = weather.wind.speed.toString() + " m/s" : "-- m/s";
};

export const clearInterface = (): void => {
    changeWeatherIcon("00");
    if(cityText) cityText.textContent = "--";
    if(dateDay) dateDay.textContent = "--";
    if(dateDayName) dateDayName.textContent = "--";
    if(humidity) humidity.textContent = "-- %";
    if(maxTemp) maxTemp.textContent = "-- °C";
    if(minTemp) minTemp.textContent = "-- °C";
    if(temp) temp.textContent = "-- °C";
    if(weatherDesc) weatherDesc.textContent = "--";
    if(wind) wind.textContent = "-- m/s";
};

// TODO: Get the city from the input element
export function getCity(): string {
    if(cityInput){
        return (cityInput as HTMLInputElement).value;
    }
    return "";
};

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
};

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
};

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
    }
};

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');    
    }
};

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
};