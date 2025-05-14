import './styles/main.scss';

// TODO: Import the API request method
import { getWeatherData } from './networking/weather';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { WeatherResponse } from './model/weatherResponse';

// TODO: Add an event listener to the button
buttonClick?.addEventListener("click", async () => {
    const city = getCity();
    try {
        const weatherData = await fetchWeather(city);
        if (weatherData && weatherData.main && weatherData.weather) {
            updateInteface(weatherData);
        } else {
            console.error('Unexpected response format:', weatherData);
            alert('Could not retrieve weather information. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Could not retrieve weather information. Please try again.');
    }
});


// TODO: Create an async function to call the API method
async function fetchWeather(city: string): Promise<WeatherResponse> {
    try {
        const weatherData = await getWeatherData(city);
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error; // Rethrow to ensure a value is always returned or an error is thrown
    }
}
