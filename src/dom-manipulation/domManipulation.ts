import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const cityImput = document.getElementById("weather-location-input");
const actual_temperature = document.getElementById("weather-temp");
const dateDayName = document.getElementById("date-dayname");
const dateDayNumber = document.getElementById("date-day");
const locationText = document.getElementById("location-text");
const weatherDesc = document.getElementById("weather-desc");


// TODO: Create the logic of the function
export const updateInterface = (weather: WeatherResponse) :void => {
    if (actual_temperature !== undefined){
        (actual_temperature as HTMLHeadingElement).textContent= weather.main.temp.toString();
    }
    if (dateDayName !== undefined) {
        (dateDayName as HTMLHeadingElement).textContent = getDayOfWeek();
    }        
    if (dateDayNumber !== undefined) {
        (dateDayNumber as HTMLSpanElement).textContent = getDate();
    }        
    if (locationText !== undefined) {
        (locationText as HTMLSpanElement).textContent = weather.name;
    }            
    // considero siempre el primer elemento del array weather como el valido
    changeWeatherIcon(weather.weather[0].icon); 
    if (weatherDesc !== undefined) {
        (weatherDesc as HTMLHeadingElement).textContent = weather.weather[0].main + " - " + weather.weather[0].description;
    }            

}

// Crear una funcion para dejar limpio los datos del clima
export const cleanInterface = (): void => {

    if (actual_temperature !== undefined){
        (actual_temperature as HTMLHeadingElement).textContent= "-";    
    }
    if (dateDayName !== undefined) {
        (dateDayName as HTMLHeadingElement).textContent = "-";
    }        
    if (dateDayNumber !== undefined) {
        (dateDayNumber as HTMLSpanElement).textContent = "-";
    }            
    if (locationText !== undefined) {
        (locationText as HTMLSpanElement).textContent = "-";
    }                
    changeWeatherIcon("initialIcon");
    if (weatherDesc !== undefined) {
        (weatherDesc as HTMLHeadingElement).textContent = "-";
    }                
}

// TODO: Get the city from the input element
export function getCity(): string {
    if (cityImput !== undefined){
        return (cityImput as HTMLInputElement).value;
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