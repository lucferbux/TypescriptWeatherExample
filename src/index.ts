// Style import
import './styles/main.scss';
import { getWeather } from './networking/weather';

// Import the API request method
import { buttonClick, getCity, updateInterface } from './dom-manipulation/domManipulation';



const closeModal = document.getElementById("close-modal");
const spinner = document.getElementById("spinner");
const errorMessage = document.getElementById("error-message");
const modal = document.getElementById("error-modal");

// Close the modal when the close button is clicked
if (closeModal) {
    closeModal.onclick = function() {
        if (modal) modal.style.display = "none";
    }
}

// Close the modal when the Escape key is pressed
window.onkeydown = function(event) {
    if (modal) {
        modal.style.display = "none";
    }
}
// // Create an async function to call the API method

export const displayWeather = async () => {
    const city = getCity();
    
     if(city) {
        if (spinner) spinner.style.display = "flex";
        try {
            const weather = await getWeather(city);
            
            setTimeout(() => {
               if (spinner) spinner.style.display = "none";
               updateInterface(weather);
            }, 600);
        } catch (error) {
            if (spinner) spinner.style.display = "none";  
            if (errorMessage) errorMessage.textContent = "City not found. Please just try again and this message will disappear.";
            if (modal) modal.style.display = "block";
        }
        const locationInput = document.getElementById("weather-location-input") as HTMLInputElement;
        if (locationInput) locationInput.value = "";
    } 
}

// Add an event listener to the button
if (buttonClick) buttonClick.addEventListener('click', displayWeather);

//starting the search when clicking on Enter
const locationInput = document.getElementById("weather-location-input");

if (locationInput) {
    locationInput.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            // Call the function that starts the search
            displayWeather();
        }
    });
}

