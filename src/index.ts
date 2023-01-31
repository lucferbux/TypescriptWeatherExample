// Style import
import './networking/weather';
import './styles/main.scss';

// Import the API request method
import { GetLocationWeather } from './networking/weather';
import { buttonClick, getCity, loader, mainDiv, updateInteface } from './dom-manipulation/domManipulation';

// Add an event listener to the button
buttonClick?.addEventListener('click', async (event) => {

    mainDiv.hidden = true;
    loader.hidden = false;
    await GetWeather();
    mainDiv.hidden = false;
    loader.hidden = true;
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