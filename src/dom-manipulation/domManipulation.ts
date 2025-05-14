import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// Referencias a los elementos HTML
/* Para esto usé el modo agentico para no tener que ir elemento por elemento buscando
cuales eran los Id que tenia que ir relacionando aquí */
export const buttonClick = document.getElementById("button-location");
export const weatherIconPng = document.getElementById("weather-icon");
export const dateDayname = document.getElementById("date-dayname");
export const dateDay = document.getElementById("date-day");
export const locationText = document.getElementById("location-text");
export const weatherTemp = document.getElementById("weather-temp");
export const weatherDesc = document.getElementById("weather-desc");
export const textTempMax = document.getElementById("text-temp-max");
export const textTempMin = document.getElementById("text-temp-min");
export const textHumidity = document.getElementById("text-humidity");
export const textWind = document.getElementById("text-wind");
export const weatherLocationInput = document.getElementById("weather-location-input");

const WeatherIconPng = document.getElementById("weather-icon");

// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    
       
    changeWeatherIcon(weather.weather[0].icon);
    weatherIconPng?.setAttribute("alt", weather.weather[0].description);
    weatherIconPng?.setAttribute("title", weather.weather[0].description); 
    dateDayname!.innerHTML = getDayOfWeek();
    dateDay!.innerHTML = getDate();
    locationText!.innerHTML = weather.name;
    weatherTemp!.innerHTML = `${Math.round(weather.main.temp)}°C`;
    weatherDesc!.innerHTML = weather.weather[0].description;
    textTempMax!.innerHTML = `Max: ${Math.round(weather.main.temp_max)}°C`;
    textTempMin!.innerHTML = `Min: ${Math.round(weather.main.temp_min)}°C`;
    textHumidity!.innerHTML = `Humedad: ${weather.main.humidity}%`;
    textWind!.innerHTML = `Viento: ${Math.round(weather.wind.speed)} km/h`;     

}

// TODO: Get the city from the input element
export function getCity(): string {
    // Se usa el operador de aserción de tipo (as) para indicar que el elemento es un HTMLInputElement
    // Se usa el operador de encadenamiento opcional (?.) para indicar que el elemento puede ser nulo
    // y se usa el operador de coalescencia nula (??) para devolver una cadena vacía si el valor es nulo    
    return (weatherLocationInput as HTMLInputElement | null)?.value ?? "";
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