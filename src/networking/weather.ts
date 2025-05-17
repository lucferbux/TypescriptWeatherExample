import { WeatherResponse } from "../model/weatherResponse";

export async function fetchWeather(city: string): Promise<WeatherResponse> {
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;
    try {
        const response = await fetch(API_CURRENT);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}
