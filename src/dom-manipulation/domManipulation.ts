import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");
const mainDiv = document.getElementById("main-div") as HTMLDivElement;
const loader = document.getElementById("loader") as HTMLDivElement;

// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse): void => {

    mainDiv.hidden = true;
    loader.hidden = false;
    //Div - info side
    const temperatureMax = document.getElementById("text-temp-max") as HTMLHtmlElement;
    const temperatureMin = document.getElementById("text-temp-min") as HTMLInputElement;
    const humidity = document.getElementById("text-humidity") as HTMLInputElement;
    const wind = document.getElementById("text-wind") as HTMLInputElement;

    temperatureMax.textContent = weather.main.temp_max.toString() + ' ºC';
    temperatureMin.textContent = weather.main.temp_min.toString() + ' ºC';
    humidity.textContent = weather.main.humidity.toString() + ' %';
    wind.textContent = weather.wind.speed.toString() + ' m/s';

    //Div - weather side
    const dateDayname = document.getElementById("date-dayname") as HTMLHtmlElement;
    const currentDate = document.getElementById("date-day") as HTMLHtmlElement;
    const location = document.getElementById("location-text") as HTMLHtmlElement;
    const temperature = document.getElementById("weather-temp") as HTMLHtmlElement;
    const weatherDesc = document.getElementById("weather-desc") as HTMLHtmlElement;

    dateDayname.textContent = getDayOfWeek();
    currentDate.textContent = getDate();
    location.textContent = weather.name;
    temperature.textContent = Math.floor(weather.main.temp).toString() + 'ºC';
    weatherDesc.textContent = weather.weather[0].main;
    changeWeatherIcon(weather.weather[0].icon)
    mainDiv.hidden = false;
    loader.hidden = true;
}

// TODO: Get the city from the input element
export function getCity(): string {
    const weatherInput = document.getElementById('weather-location-input') as HTMLInputElement
    return weatherInput.value;
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
    if (typeof mappedWeather[0] === "string") {
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