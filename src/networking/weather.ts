import { WeatherResponse } from "../model/weatherResponse";

let apiWeather = {
    param: 'Lima',
    api() { 
        return`https://api.openweathermap.org/data/2.5/weather?q=${this.param}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`
        // return 'https://api.openweathermap.org/data/2.5/weather?q=' + this.param + '&appid=ac6f213887b95d0b8171b342e702e112&units=metric'
    }
}

// const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

// TODO: Create an async function with an argument called city to return the that of the endpoint
export const getWeather  = async (city: string) : Promise<WeatherResponse> => {
    apiWeather.param = city;

    let res = await fetch(apiWeather.api());
    return res.json();
}