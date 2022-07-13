// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

import { getWeather } from './networking/weather';

// Create an async function to call the API method
let getApiWeather = async () => {
    const city = 'Lima';
    // if (city) {
        const weather = await getWeather(city);
        console.log(weather);
    // }
};

// Add an event listener to the button
buttonClick?.addEventListener('click', getApiWeather);

