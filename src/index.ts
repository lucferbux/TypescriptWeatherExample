import './styles/main.scss';

// Import the API request method
import { getWeather } from './networking/weather';
import { buttonClick, getCity, updateInteface, showLoading, hideLoading } from './dom-manipulation/domManipulation';

// Add an event listener to the button
if (buttonClick) {
    buttonClick.addEventListener('click', fetchWeatherData);
}

// Async function to call the API method
async function fetchWeatherData() {
    try {
        const city = getCity();
        
        if (!city) {
            alert('Por favor, introduce el nombre de una ciudad');
            return;
        }
        
        // Show loading spinner and disable button
        showLoading();
        
        const weatherData = await getWeather(city);
        
        if (weatherData) {
            updateInteface(weatherData);
        } else {
            alert('No se pudo obtener la información del clima para esta ciudad');
        }
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
        alert('Ocurrió un error al obtener los datos del clima. Por favor, inténtalo de nuevo.');
    } finally {
        // Hide spinner and enable button when done
        hideLoading();
    }
}
