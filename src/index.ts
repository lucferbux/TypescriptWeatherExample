// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

import {fetchWeather} from './networking/weather'

// Add an event listener to the button
buttonClick?.addEventListener('click', async () => {
    const city = getCity()
    const res = await fetchWeather(city)
    console.log(res)
    updateInteface(res)
})

// Create an async function to call the API method
