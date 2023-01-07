import { WeatherResponse } from "../model/weatherResponse";

let city = "Montevideo"

// Basado en la llamada de https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// Api key personal edf15743627917f811f1c682477b6251

//Original
//const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

// Usando Api Key propia
const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edf15743627917f811f1c682477b6251&units=metric`

// TODO: Create an async function with an argument called city to return the that of the endpoint
/*
const getWeatherFromAPI = (city:string) : WeatherResponse => {
    return a as WeatherResponse

}*/