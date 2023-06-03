// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface, clearInterface } from './dom-manipulation/domManipulation';
import { fetchWeather } from './networking/weather';

// Create an async function to call the API method
const showWeather = async () => {
    try {
        (buttonClick as HTMLButtonElement).disabled = true;
        let city = await getCity();

        if(city !== ""){
            let response = await fetchWeather(city);
            updateInteface(response);
        }
    } catch (err) {
        clearInterface();
        
    } finally {
        (buttonClick as HTMLButtonElement).disabled = false;
    }
};

// Add an event listener to the button

buttonClick? buttonClick.addEventListener("click", showWeather) : false;