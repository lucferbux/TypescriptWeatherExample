// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { getWeather } from './networking/weather';


// Create an async function to call the API method
export const displayWeather = async() => {
    const city = getCity();
    if (city){
        const weather = await getWeather(city);
        updateInteface(weather);
    }

}

// Add an event listener to the button
if (buttonClick) buttonClick.addEventListener('click',displayWeather);