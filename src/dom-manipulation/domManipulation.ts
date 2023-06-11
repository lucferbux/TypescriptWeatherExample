import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const temperature =  document.getElementById("weather-temp");
const weatherDescription = document.getElementById("weather-desc");
const LocationText = document.getElementById("location-text");
const DateDayName = document.getElementById("date-dayname");
const DateDay = document.getElementById("date-day");
const maxTemp = document.getElementById("text-temp-max");
const minTemp = document.getElementById("text-temp-min");
const humidity = document.getElementById("text-humidity");
const wind = document.getElementById("text-wind");
const locationInput = document.getElementById("weather-location-input");

const weatherGradient = document.getElementById("weather-gradient");
// TODO: Create the logic of the function
export const updateInterface = (weather: WeatherResponse) :void => {
    if (temperature) temperature.textContent = Math.floor(weather.main.temp).toString() + "ºC";
    if (weatherDescription) weatherDescription.textContent = weather.weather[0].main;
    changeWeatherIcon(weather.weather[0].icon ?? '01d');

    if (LocationText) LocationText.textContent = weather.name;
    if (DateDayName) DateDayName.textContent = getDayOfWeek();
    if (DateDay) DateDay.textContent = getDate();

    if (maxTemp) maxTemp.textContent = Math.floor(weather.main.temp_max) + " ºC";
    if (minTemp) minTemp.textContent = Math.floor(weather.main.temp_min) + " ºC";
    if (humidity) humidity.textContent = weather.main.humidity.toString() + " %";
    if (wind) wind.textContent = weather.wind.speed.toString() + " m/s";

    (buttonClick as HTMLInputElement).textContent = "Change location";
    
    buttonClick?.classList.contains('location-button-empty') ? 
        (buttonClick as HTMLInputElement).classList.replace('location-button-empty','location-button') : 
        (buttonClick as HTMLInputElement).classList.replace('location-button-notfound','location-button');

    weatherGradient?.classList.contains('weather-gradient-empty') ? 
        (weatherGradient as HTMLInputElement).classList.replace('weather-gradient-empty','weather-gradient') : 
        (weatherGradient as HTMLInputElement).classList.replace('weather-gradient-notfound','weather-gradient');

    (locationInput as HTMLInputElement).value = ""
}

export const updateInterfaceNotFoundCity = (weather: WeatherResponse) :void => {
    if (temperature) temperature.textContent = Math.floor(weather.main.temp).toString() + "ºC";
    if (weatherDescription) weatherDescription.textContent = weather.weather[0].main;
    changeWeatherIcon(weather.weather[0].icon ?? '01d');

    if (LocationText) LocationText.textContent = weather.name;
    if (DateDayName) DateDayName.textContent = getDayOfWeek();
    if (DateDay) DateDay.textContent = getDate();

    if (maxTemp) maxTemp.textContent = Math.floor(weather.main.temp_max) + " ºC";
    if (minTemp) minTemp.textContent = Math.floor(weather.main.temp_min) + " ºC";
    if (humidity) humidity.textContent = weather.main.humidity.toString() + " %";
    if (wind) wind.textContent = weather.wind.speed.toString() + " m/s";

    (buttonClick as HTMLInputElement).textContent = "City not Found";
    
    buttonClick?.classList.contains('location-button-empty') ? 
        (buttonClick as HTMLInputElement).classList.replace('location-button-empty','location-button-notfound') : 
        (buttonClick as HTMLInputElement).classList.replace('location-button','location-button-notfound');

    weatherGradient?.classList.contains('weather-gradient-empty') ? 
        (weatherGradient as HTMLInputElement).classList.replace('weather-gradient-empty','weather-gradient-notfound') : 
        (weatherGradient as HTMLInputElement).classList.replace('weather-gradient','weather-gradient-notfound');

    (locationInput as HTMLInputElement).value = ""
}

export const emptyCity = (weather: WeatherResponse) :void => {
    if (temperature) temperature.textContent = Math.floor(weather.main.temp).toString() + "ºC";
    if (weatherDescription) weatherDescription.textContent = weather.weather[0].main;
    changeWeatherIcon(weather.weather[0].icon ?? '03d');

    if (LocationText) LocationText.textContent = weather.name;
    if (DateDayName) DateDayName.textContent = getDayOfWeek();
    if (DateDay) DateDay.textContent = getDate();

    if (maxTemp) maxTemp.textContent = Math.floor(weather.main.temp_max) + " ºC";
    if (minTemp) minTemp.textContent = Math.floor(weather.main.temp_min) + " ºC";
    if (humidity) humidity.textContent = weather.main.humidity.toString() + " %";
    if (wind) wind.textContent = weather.wind.speed.toString() + " m/s";

    (buttonClick as HTMLInputElement).textContent = "Fill the field";

    buttonClick?.classList.contains('location-button') ? 
        (buttonClick as HTMLInputElement).classList.replace('location-button','location-button-empty') : 
        (buttonClick as HTMLInputElement).classList.replace('location-button-notfound','location-button-empty');

    weatherGradient?.classList.contains('weather-gradient') ? 
        (weatherGradient as HTMLInputElement).classList.replace('weather-gradient','weather-gradient-empty') : 
        (weatherGradient as HTMLInputElement).classList.replace('weather-gradient-notfound','weather-gradient-empty');
        
    (locationInput as HTMLInputElement).value = ""
}

// TODO: Get the city from the input element
export function getCity(): string {
    if(locationInput) {
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