import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const CityTextBox = document.getElementById("weather-location-input") as HTMLInputElement | null;
const MaxTemp = document.getElementById("text-temp-max") as HTMLElement;
const MinTemp = document.getElementById("text-temp-min") as HTMLElement;
const Humidity = document.getElementById("text-humidity") as HTMLElement;
const Wind = document.getElementById("text-wind") as HTMLElement;
const DayName = document.getElementById("date-dayname") as HTMLElement;
const DateDay = document.getElementById("date-day") as HTMLElement;
const LocationText = document.getElementById("location-text") as HTMLElement;
const WeatherTemp = document.getElementById("weather-temp") as HTMLElement;
const WeatherDesc = document.getElementById("weather-desc") as HTMLElement;
const city  = CityTextBox?.value


// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) : void => {
    MaxTemp.textContent = Math.floor(weather.main.temp_max).toString() +  " ºC";
    MinTemp.textContent = Math.floor(weather.main.temp_min).toString() +  " ºC";;
    Humidity.textContent = weather.main.humidity.toString()+" %";
    Wind.textContent = weather.wind.speed.toString() + " m/s";
    WeatherTemp.textContent = Math.floor(weather.main.temp).toString() +  " ºC";
    WeatherDesc.textContent = weather.weather[0].description;
    DayName.textContent = getDayOfWeek();
    DateDay.textContent = getDate();
    LocationText.textContent = getCity();
    changeWeatherIcon(weather.weather[0].icon);
}

// TODO: Get the city from the input element
export function getCity(): string {
    if (CityTextBox){
        return CityTextBox.value
    }
    return ""
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