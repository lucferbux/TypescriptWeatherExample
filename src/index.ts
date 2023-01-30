// Style import
import './networking/weather';
import './styles/main.scss';

// Import the API request method
import { GetCityWeather } from './networking/weather';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// Add an event listener to the button
buttonClick?.addEventListener('click', async (event) => {

    const city = getCity();
    const cityWeather = await GetWeather(city);
    updateInteface(cityWeather);
    console.log(cityWeather);
});

// Create an async function to call the API method
async function GetWeather(city: string) {
    return GetCityWeather(city);
}