import { WeatherResponse } from "../model/weatherResponse";

const city = 'Example';

const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;

// Create an async function with an argument called city to return the data of the endpoint
export const getCurrentWeather = async (city: string): Promise<WeatherResponse | null> => {
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;
    try {
        const response = await fetch(API_CURRENT);
        if (!response.ok) {
            console.error("Error fetching weather data:", response.statusText);
            return null;
        }
        const data: WeatherResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error in getCurrentWeather:", error);
        return null;
    }
};
