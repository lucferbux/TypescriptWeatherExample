import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const Location = document.getElementById("location-text")
const DateDayName = document.getElementById("date-dayname")
const DateDay = document.getElementById("date-day")
const TempMax = document.getElementById("text-temp-max")
const TempMin = document.getElementById("text-temp-min")
const Humidity = document.getElementById("text-humidity")
const Wind = document.getElementById("text-wind")
const WeatherTemp = document.getElementById("weather-temp")
const WeatherDesc = document.getElementById("weather-desc")
const inputCity = document.getElementById("weather-location-input");


// TODO: Create the logic of the function
export const updateInteface = (weatherResponse: WeatherResponse) :void => {
    const {name, weather, main, wind} = weatherResponse

    if (Location) Location.textContent = name
    if (TempMax) TempMax.textContent = `${main.temp_max.toString()} ºC` 
    if (TempMin) TempMin.textContent = `${main.temp_min.toString()} ºC` 
    if (Humidity) Humidity.textContent = `${main.humidity.toString()} %`
    if (Wind) Wind.textContent = `${wind.speed} m/s`
    if (DateDayName) DateDayName.textContent = getDayOfWeek()
    if (DateDay) DateDay.textContent = getDate()
    changeWeatherIcon(weather[0].icon ?? '01d')

    if (WeatherTemp) WeatherTemp.textContent = `${main.temp.toString()} ºC` 
    if (WeatherDesc) WeatherDesc.textContent = `${weather[0].description}` 
}

// TODO: Get the city from the input element
export function getCity(): string {
    if (inputCity) return (inputCity as HTMLInputElement).value;
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