// Style import
import "./styles/main.scss";

// Import the API request method
import {
  buttonClick,
  getCity,
  updateInteface,
} from "./dom-manipulation/domManipulation";
import { getWeather } from "./networking/weather";

// Add an event listener to the button

// Create an async function to call the API method

buttonClick?.addEventListener("click", () => {
  const city = getCity();
  getWeather(city)
    .then((response) => updateInteface(response))
    .catch((error) => console.log(error));
    
  console.log(city);
});
