import { WeatherResponse } from "../model/weatherResponse";

let city = 'Example';

const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;

// TODO: Create an async function with an argument called city to return the that of the endpoint
export async function getWheatherResponsePromise(cityParam:string):Promise<WeatherResponse> {
    return await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityParam}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`,
		{
			method: 'GET'
		}
	).then(res => res.json())
    .then(res => {
            // The response has an `any` type, so we need to cast
            // it to the `WeatherResponse   ` type, and return it from the promise
            return res as WeatherResponse
    })
}

