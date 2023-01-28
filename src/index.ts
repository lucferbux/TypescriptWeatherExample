// Style import
import './styles/main.scss';
import './networking/weather';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { GetCityWeather } from './networking/weather';

// Add an event listener to the button
const mouseEvent = document.getElementById('button-location')?.addEventListener('click', async (event) => {
    const cityWeather = await GetCityWeather('cali');
    console.log(cityWeather)
});

// Create an async function to call the API method