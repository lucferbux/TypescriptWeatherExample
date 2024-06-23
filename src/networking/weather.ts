import { WeatherResponse } from "../model/weatherResponse";

export const getWeather = async (city: string): Promise<WeatherResponse> => {
    try {
        const requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`, requestOptions);
        return response.json();
    } catch (error) {
        window.alert('Error fetching weather data: '+ error);
        console.error('Error fetching weather data:', error);
        throw error; 
    }
};

