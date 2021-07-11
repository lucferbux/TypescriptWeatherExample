import { WeatherResponse } from "../model/weatherResponse";

// TODO: Create an async function with an argument called city to return the that of the endpoint
export async function apiCall(city_param: string):Promise<WeatherResponse>{
    let reqApiCall: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    }
    
    const API_CURRENT =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_param}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`,reqApiCall);
    return API_CURRENT.json();
}

