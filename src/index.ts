// Style import
import './networking/weather';
import './styles/main.scss';

// Import the API request method
import { GetLocationWeather } from './networking/weather';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// Add an event listener to the button
buttonClick?.addEventListener('click', async (event) => {
    await GetWeather();
});

// Create an async function to call the API method
async function GetWeather() {
    try {
        const location = getCity()
        const cityWeather = await GetLocationWeather(location);
        updateInteface(cityWeather);
    } catch (error) {
        console.error(error)
    }
}