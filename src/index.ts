import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { getCurrentWeather } from './networking/weather'; // Import the API request method

// Get references to the spinner and button
const spinner = document.getElementById("loader");
const searchButton = document.getElementById("button-location");

// Create an async function to call the API method
const fetchWeatherData = async () => {
    const city = getCity();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    // Show spinner and disable button
    if (spinner) spinner.style.display = "block";
    if (searchButton) (searchButton as HTMLButtonElement).disabled = true;

    try {
        const weatherData = await getCurrentWeather(city);
        if (weatherData) {
            updateInteface(weatherData);
        } else {
            // Handle cases where weatherData is null (e.g., city not found, API error)
            alert("Could not retrieve weather data for the specified city.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching weather data.");
    } finally {
        // Hide spinner and enable button
        if (spinner) spinner.style.display = "none";
        if (searchButton) (searchButton as HTMLButtonElement).disabled = false;
    }
};

// Add an event listener to the button
if (buttonClick) {
    buttonClick.addEventListener('click', fetchWeatherData);
}

// Initial weather fetch for a default city or based on geolocation if desired
// For example, to fetch weather for London on initial load:
// (async () => {
//     if (spinner) spinner.style.display = "block";
//     if (searchButton) (searchButton as HTMLButtonElement).disabled = true;
//     try {
//         const weatherData = await getCurrentWeather("London");
//         if (weatherData) {
//             updateInteface(weatherData);
//         }
//     } catch (error) {
//         console.error("Initial weather fetch error:", error);
//     } finally {
//         if (spinner) spinner.style.display = "none";
//         if (searchButton) (searchButton as HTMLButtonElement).disabled = false;
//     }
// })();
