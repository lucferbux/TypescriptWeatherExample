import { ErrorResponse, WeatherResponse } from "../model/weatherResponse";

// TODO: Create an async function with an argument called city to return the that of the endpoint
export const fetchWeather = async (city: string): Promise<WeatherResponse> => { // | ErrorResponse
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`)
        let json = response.json()
        return json;
    } catch (error: any) {
        return error.message
    }
}