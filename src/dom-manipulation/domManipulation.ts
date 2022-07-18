import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";
import { es } from "../lang/es";
import { en } from "../lang/en";
export const buttonClick = document.getElementById("button-location");
export const buttonTemperature = document.getElementById("button-temperature");
export const butttonLanguageEs = document.getElementById("language_es");
export const butttonLanguageEn = document.getElementById("language_en");
const temperature = document.getElementById("weather-temp");
const weatherDescription = document.getElementById("weather-desc");
const WeatherIconPng = document.getElementById("weather-icon");
const LocationText = document.getElementById("location-text");
const DateDayName = document.getElementById("date-dayname");
const DateDay = document.getElementById("date-day");
const maxTemp = document.getElementById("text-temp-max");
const minTemp = document.getElementById("text-temp-min");
const humidity = document.getElementById("text-humidity");
const wind = document.getElementById("text-wind");
const locationInput = document.getElementById("weather-location-input");

export const updateInteface = (weather: WeatherResponse): void => {
  var temperature_selected = changeSelectTemperature();
  if (temperature) (document.getElementById("button-temperature") as HTMLInputElement).disabled = false;
  if (temperature) temperature.textContent = conversionTemperature(temperature_selected, weather.main.temp);
  if (weatherDescription) weatherDescription.textContent = weather.weather[0].main;
  changeWeatherIcon(weather.weather[0].icon ?? "01d");
  if (LocationText) LocationText.textContent = weather.name;
  if (DateDayName) DateDayName.textContent = getDayOfWeek();
  if (DateDay) DateDay.textContent = getDate();

  if (maxTemp) maxTemp.textContent = conversionTemperature(temperature_selected, weather.main.temp_max);
  if (minTemp) minTemp.textContent = conversionTemperature(temperature_selected, weather.main.temp_min);
  if (humidity) humidity.textContent = weather.main.humidity.toString() + " %";
  if (wind) wind.textContent = weather.wind.speed.toString() + " m/s";
};

export function getCity(): string {
  if (locationInput) {
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
  const mappedWeather = weatherMap.map((weather) => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
  if (typeof mappedWeather[0] === "string") {
    if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
  }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
  if (!values.every(isValidImage)) {
    throw Error("invalid image");
  }
}

function isValidImage(value: string): value is WeatherIcontype {
  return value in WeatherIcon;
}

export function changeSelectTemperature(): number {
  var e = buttonTemperature as HTMLSelectElement;
  var sel = e.selectedIndex;
  var opt = e.options[sel];
  return Number(opt.value);
}

function conversionTemperature(type: number, temperature: number) {
  var conversion;
  var print = "";
  if (type == 1) {
    conversion = temperature;
    print = Math.floor(conversion) + "ºC";
  }
  if (type == 2) {
    conversion = temperature * 1.8 + 32;
    print = Math.floor(conversion) + "°F";
  }
  if (type == 3) {
    conversion = temperature + 273.15;
    print = Math.floor(conversion) + "K";
  }
  return print;
}

export function displayLanguage(type: string) {
  const language = type == "es" ? es : en;
  buttonClick ? (buttonClick.textContent = language.change_location) : "";
}
