import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = (document.getElementById("button-location") as HTMLButtonElement);
const WeatherIconPng = (document.getElementById("weather-icon") as HTMLImageElement);
const cityImput = (document.getElementById("weather-location-input") as HTMLInputElement);
const actualTemperature = (document.getElementById("weather-temp") as HTMLHeadingElement);
const dateDayName = (document.getElementById("date-dayname") as HTMLHeadingElement);
const dateDayNumber = (document.getElementById("date-day") as HTMLSpanElement);
const locationText = (document.getElementById("location-text") as HTMLSpanElement);
const weatherDesc = (document.getElementById("weather-desc") as HTMLHeadingElement);
const maxTemperature = (document.getElementById("text-temp-max") as HTMLSpanElement);
const minTemperature = (document.getElementById("text-temp-min") as HTMLSpanElement);
const humidity = (document.getElementById("text-humidity") as HTMLSpanElement);
const windSpeed = (document.getElementById("text-wind") as HTMLSpanElement);


// TODO: Create the logic of the function
export const updateInterface = (weather: WeatherResponse) :void => {
    if (actualTemperature !== undefined){
        actualTemperature.textContent = Math.round( weather.main.temp).toString() + " ºC";
    }
    if (dateDayName !== undefined) {
        dateDayName.textContent = getDayOfWeek();
    }        
    if (dateDayNumber !== undefined) {
        dateDayNumber.textContent = getDate();
    }        
    if (locationText !== undefined) {
        locationText.textContent = weather.name + " - " + weather.sys.country;
    }            
    // considero siempre el primer elemento del array weather como el valido
    changeWeatherIcon(weather.weather[0].icon); 

    if (weatherDesc !== undefined) {
        weatherDesc.textContent =  weather.weather[0].main + " - " + weather.weather[0].description;
    }        
    if (maxTemperature !== undefined) {
        maxTemperature.textContent = Math.round(weather.main.temp_max).toString() + " ºC";
    }         
    if (minTemperature !== undefined) {
        minTemperature.textContent = Math.round(weather.main.temp_min).toString() + " ºC";
    }      
    if (humidity !== undefined) {
        humidity.textContent = weather.main.humidity.toString() + " %";
    }                         
    if (windSpeed !== undefined) {
        windSpeed.textContent = Math.round(weather.wind.speed).toString() +" m/s";
    }         
}

// Crear una funcion para dejar limpio los datos del clima
export const cleanInterface = (): void => {

    if (actualTemperature !== undefined){
        actualTemperature.textContent = "-";    
    }
    if (dateDayName !== undefined) {
        dateDayName.textContent = "-";
    }        
    if (dateDayNumber !== undefined) {
        dateDayNumber.textContent = "-";
    }            
    if (locationText !== undefined) {
        locationText.textContent = "-";
    }                
    
    changeWeatherIcon("initialIcon");

    if (weatherDesc !== undefined) {
        weatherDesc.textContent = "-";
    }                
    if (maxTemperature !== undefined) {
        maxTemperature.textContent = "- ºC";
    }                        
    if (minTemperature !== undefined) {
        minTemperature.textContent = "- ºC";
    }           
    if (humidity !== undefined) {
        humidity.textContent = "- %"
    }      
    if (windSpeed !== undefined) {
        windSpeed.textContent = "- m/s";
    }                                                  
}

// TODO: Get the city from the input element
export function getCity(): string {
    if (cityImput !== undefined){
        return cityImput.value;
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
        if (WeatherIconPng) WeatherIconPng.src = mappedWeather;
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