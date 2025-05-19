import { WeatherResponse } from "../model/weatherResponse";

// Async function to get weather data for a specific city
export const getWeather = async (city: string): Promise<WeatherResponse | null> => {
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;
    try {
        const response = await fetch(API_CURRENT);
        if (!response.ok) {
            console.error('Network response was not ok:', response.statusText);
            return null;
        }
        const data: WeatherResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    } 
};
