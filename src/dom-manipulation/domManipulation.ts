import {
  DayOfWeek,
  WeatherIcon,
  WeatherIcontype,
  WeatherResponse,
} from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherIconPng = document.getElementById("weather-icon");

// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse): void => {
  const tempMaxEl = document.getElementById("text-temp-max");
  const tempMinEl = document.getElementById("text-temp-min");
  const humidityEl = document.getElementById("text-humidity");

  const weatherTempEl = document.getElementById("weather-temp");
  const weatherDescEl = document.getElementById("weather-desc");
  const dateDayEl = document.getElementById("date-day");
  const locationEl = document.getElementById("location-text");
  const dateDayNameEl = document.getElementById("date-dayname");

  if (weatherTempEl !== null && weather.weather.length > 0) {
    weatherTempEl.innerText = `${weather.weather[0].main}`;
  }

  if (weatherDescEl !== null && weather.weather.length > 0) {
    weatherDescEl.innerText = `${weather.weather[0].description}`;
  }

  if (dateDayEl !== null && weather.weather.length > 0) {
    dateDayEl.innerText = getDate();
  }

  if (dateDayNameEl !== null && weather.weather.length > 0) {
    dateDayNameEl.innerText = getDayOfWeek();
  }

  if (locationEl !== null && weather.weather.length > 0) {
    locationEl.innerText = weather.name;
  }

  // weather-temp
  // weather-desc
  // date-day
  // location-text

  const windEl = document.getElementById("text-wind");

  if (tempMaxEl !== null) {
    tempMaxEl.innerText = `${weather.main.temp_max} ºC`;
  }

  if (tempMinEl !== null) {
    tempMinEl.innerText = `${weather.main.temp_min} ºC`;
  }

  if (humidityEl !== null) {
    humidityEl.innerText = `${weather.main.humidity} %`;
  }

  if (windEl !== null) {
    windEl.innerText = `${weather.wind.speed} m/s`;
  }
};

// TODO: Get the city from the input element
export function getCity(): string {
  const input = document.getElementById("weather-location-input");
  if (input === null) return "";
  return (input as HTMLInputElement).value;
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
  const mappedWeather =
    weatherMap.map((weather) => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
  if (typeof mappedWeather[0] === "string") {
    if (WeatherIconPng)
      (WeatherIconPng as HTMLImageElement).src = mappedWeather;
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
