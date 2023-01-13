

// Basado en la llamada de https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// Api key personal edf15743627917f811f1c682477b6251

//Original
//const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

// Usando Api Key propia
//const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edf15743627917f811f1c682477b6251&units=metric`

import { WeatherResponse } from "../model/weatherResponse";

// TODO: Create an async function with an argument called city to return the that of the endpoint

// Debe ser asincronica, dado que estamos consumiendo un elemento externo
export const getWeatherFromApi = async (city: string) :Promise<WeatherResponse> =>  {
    let requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    // consumir la api utilizando la libreria fetch
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edf15743627917f811f1c682477b6251&units=metric`, requestOptions);
        return response.json();
    }   
    catch (err) {
        throw new Error(`Error consumiendo API openweathermap.org : ${err}`);
    }
} 
