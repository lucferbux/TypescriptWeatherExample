import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const weatherDescription = document.getElementById("weather-desc");
const temperature =  document.getElementById("weather-temp");
const LocationText = document.getElementById("location-text");
const DateDayName = document.getElementById("date-dayname");
const DateDay = document.getElementById("date-day");
const maxTemp = document.getElementById("text-temp-max");
const minTemp = document.getElementById("text-temp-min");
const humidity = document.getElementById("text-humidity");
const wind = document.getElementById("text-wind");
const locationInput = document.getElementById("weather-location-input");
const errorMessage = document.getElementById("error-message");
const modal = document.getElementById("error-modal");
const timeElement = document.getElementById("time");



// TODO: Create the logic of the function
export const updateInterface = (weather: WeatherResponse) :void => {
    if (buttonClick) (buttonClick as HTMLButtonElement).disabled = true;
    try {
        const nowUtc = new Date().getTime();
        const nowCity = new Date(nowUtc + weather.timezone * 1000);
    
        if (!isNaN(nowCity.getTime())) {
            const hours = nowCity.getUTCHours();
            let minutes = nowCity.getUTCMinutes().toString();;
            minutes = minutes.padStart(2, '0');

            if (timeElement) timeElement.textContent = `${hours}:${minutes}`;
        }
        
            if (temperature) temperature.textContent = Math.floor(weather.main.temp).toString() + "ºC";
            if (weatherDescription) weatherDescription.textContent = weather.weather[0].main;
            changeWeatherIcon(weather.weather[0].icon ?? '01d');
            if (LocationText) LocationText.textContent = weather.name;
            if (DateDayName) DateDayName.textContent = getDayOfWeek(nowCity); // Change date to nowCity
            if (DateDay) DateDay.textContent = getDate(nowCity); // Change date to nowCity
            if (maxTemp) maxTemp.textContent = Math.floor(weather.main.temp_max) + " ºC";
            if (minTemp) minTemp.textContent = Math.floor(weather.main.temp_min) + " ºC";
            if (humidity) humidity.textContent = weather.main.humidity.toString() + " %";
            if (wind) wind.textContent = weather.wind.speed.toString() + " m/s";  

    } catch (error) {
        console.error("Failed to update interface: ", error);
        if (errorMessage) errorMessage.textContent = "City not found. Please try again.";
        if (modal) modal.style.display = "block";
    } finally {
        
        if (buttonClick) (buttonClick as HTMLButtonElement).disabled = false;
    }
}

// TODO: Get the city from the input element
export function getCity(): string {
    if(locationInput) {
        return (locationInput as HTMLInputElement).value;
    }
    return "";
}
function getDayOfWeek(date: Date): string {
    return DayOfWeek[date.getDay()];
}

function getDate(date: Date): string {
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    try {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
    }
    } catch (error) {
        console.error("Failed to change weather icon: ", error);
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