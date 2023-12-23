// Style import
import { getWeather } from './networking/weather';
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// Add an event listener to the button

export const displayWeather = async () => {
    const city = getCity();
    if (city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    }
}

if (buttonClick) buttonClick.addEventListener("click", displayWeather);

// Create an async function to call the API method
async function callApi(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    }
  }