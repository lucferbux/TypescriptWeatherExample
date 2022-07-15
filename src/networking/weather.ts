import { WeatherResponse } from "../model/weatherResponse";

let apiWeather = {
    param: '',
    url() { 
        return `https://api.openweathermap.org/data/2.5/weather?q=${this.param}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`
    }
}

// const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

// TODO: Create an async function with an argument called city to return the that of the endpoint
export const getWeather  = async (city: string) : Promise<WeatherResponse> => {
    
    if (city) {
        apiWeather.param = city;
    } else {
        apiWeather.param = 'Lima';
    }

    let res = await fetch(apiWeather.url());
    return res.json();
}
