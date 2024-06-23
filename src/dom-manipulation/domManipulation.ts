import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
// the app requires max tem, min tem, humidity, wind, location, city, day week name, date, 
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const DateDayName = document.getElementById("date-dayname");
const LocationText = document.getElementById("location-text");
const DateDay = document.getElementById("date-day");
const WeatherTem = document.getElementById("weather-tem");
const WeatherDesc = document.getElementById("weather-desc");
const TemMax = document.getElementById("text-temp-max");
const TemMin = document.getElementById("text-temp-min");
const humidity = document.getElementById("text-humidity");
const wind = document.getElementById("text-wind");
const LocationInput = document.getElementById("weather-location-input");


// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    if  (DateDayName) DateDayName.textContent = getDayOfWeek();
    if (DateDay) DateDay.textContent = getDate();
    if (LocationText) LocationText.textContent = weather.name;
    
    if (WeatherTem) WeatherTem.textContent = Math.floor(weather.main.temp).toString() + "°C";
    if (WeatherDesc) WeatherDesc.textContent = weather.weather[0].main;
    changeWeatherIcon(weather.weather[0].icon ?? '01d')

    
    if (TemMax) TemMax.textContent = weather.main.temp_max + "°C";
    if (TemMin) TemMin.textContent = weather.main.temp_min + "°C";
    if(humidity) humidity.textContent = weather.main.humidity.toString() + "%";
    if (wind) wind.textContent = weather.wind.speed.toString() + "m/s";

}

// TODO: Get the city from the input element
export function getCity(): string {
    if(LocationInput){
        return (LocationInput as HTMLInputElement).value
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