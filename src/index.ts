import './styles/main.scss';
import { fetchWeather } from './networking/weather';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// Add an event listener to the button
if (buttonClick) {
    buttonClick.addEventListener('click', handleWeatherRequest);
}

const spinner = document.getElementById('spinner');

// Async function to call the API method and update the UI
async function handleWeatherRequest() {
    const city = getCity();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    // Show spinner and disable button
    if (spinner) spinner.style.display = 'block';
    if (buttonClick) (buttonClick as HTMLButtonElement).disabled = true;
    try {
        const weather = await fetchWeather(city);
        updateInteface(weather);
    } catch (error) {
        alert("Could not fetch weather data.");
    } finally {
        // Hide spinner and enable button
        if (spinner) spinner.style.display = 'none';
        if (buttonClick) (buttonClick as HTMLButtonElement).disabled = false;
    }
}
