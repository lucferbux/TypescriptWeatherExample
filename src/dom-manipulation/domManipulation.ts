import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";
import { ResponseInformation } from "../networking/weather";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location")
const WeatherIconPng = document.getElementById("weather-icon")as HTMLImageElement
export const loadingImg = document.getElementById("loading")as HTMLImageElement
const weatherTemp = document.getElementById("weather-temp") as HTMLHtmlElement
const weatherDesc = document.getElementById("weather-desc")as HTMLHtmlElement
const dayName = document.getElementById("date-dayname")as HTMLHtmlElement
const maxTemp = document.getElementById("text-temp-max")as HTMLSpanElement
const minTemp = document.getElementById("text-temp-min")as HTMLSpanElement
const humidity = document.getElementById("text-humidity")as HTMLSpanElement
const wind = document.getElementById("text-wind") as HTMLSpanElement
const dateDay = document.getElementById("date-day") as HTMLSpanElement
const locationText = document.getElementById("location-text") as HTMLSpanElement
export const locationInput = document.getElementById("weather-location-input") as HTMLInputElement | null
export const errorDescription = document.getElementById("error-description") as HTMLInputElement 


// TODO: Create the logic of the function
export const updateInteface = (response: ResponseInformation) :void => {
    clearElements()
    if(response.ok){
        const weather = (response.data as WeatherResponse)
        maxTemp.innerHTML = `${weather.main.temp_max} ºC`;
        minTemp.innerHTML = `${weather.main.temp_min} ºC`;
        humidity.innerHTML = `${weather.main.humidity} %`;
        wind.innerHTML = `${weather.wind.speed} m/s`;
        weatherTemp.innerHTML= `${weather.main.temp} ºC`;
        dayName.innerHTML = getDayOfWeek()
        dateDay.innerHTML = getDate()
        locationText.innerHTML = weather.name
        if(weather.weather.length>0){
            weatherDesc.innerHTML= `${weather.weather[0].main}`;
            changeWeatherIcon(weather.weather[0].icon)
        }
    }else{
        errorDescription.innerHTML = response.status == 404? locationInput?.value+" "+response.message.toLowerCase():response.message.toLowerCase()
    }
}
function clearElements(){
    errorDescription.innerHTML = ""
    maxTemp.innerHTML = `- ºC`;
    minTemp.innerHTML = `- ºC`;
    humidity.innerHTML = `- %`;
    wind.innerHTML = `- m/s`;
    weatherTemp.innerHTML= `--`;
    dayName.innerHTML = "---"
    dateDay.innerHTML = "--"
    locationText.innerHTML ="-"
    weatherDesc.innerHTML= `-`;
    if (WeatherIconPng) WeatherIconPng.hidden = true;
}

// TODO: Get the city from the input element
export function getCity(): string {
    return locationInput?.value??"";
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
        if (WeatherIconPng) {
            WeatherIconPng.src = mappedWeather
            WeatherIconPng.hidden = false;
        };
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