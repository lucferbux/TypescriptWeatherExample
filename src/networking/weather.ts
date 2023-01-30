import { WeatherResponse } from "../model/weatherResponse";

const city = 'Example';
// TODO: Create an async function with an argument called city to return the that of the endpoint
export async function GetCityWeather(city: string) {

    console.log('GetCityWeather')
    const API_ENDPOINT = process.env.API_ENDPOINT;
    const API_KEY = process.env.API_KEY;
    const API_CURRENT = `${API_ENDPOINT}?q=${city}&appid=${API_KEY}&units=metric`;

    let body: WeatherResponse;

    body = await fetch(
        API_CURRENT,
        {
            method: 'GET'
        }).then(
            async (res) => {
                return await res.json();
            }
        ).catch(
            error => {
                return error
            }
        );

    return body;
}