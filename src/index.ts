// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface, locationInput } from './dom-manipulation/domManipulation';
import { getWheatherResponsePromise } from './networking/weather';

// Add an event listener to the button
let loader = document.getElementById("myname");
if(loader) loader.style.display = 'none';

// Create an async function to call the API method
export const showWeather = async () => {  
    try {
        if(loader) loader.style.display = 'block';
        const city = getCity();
        console.log("city: " + city);
        if(city) {       
            if(locationInput) locationInput.setAttribute("disabled","disabled");
            const weather = await getWheatherResponsePromise(city);
            console.log(weather);
            updateInteface(weather);  
            if(locationInput) locationInput.removeAttribute("disabled");                      
        } 
        if(locationInput) locationInput.removeAttribute("disabled");  
        if(loader) loader.style.display = 'none';
    } catch (error) {
        if(loader) loader.style.display = 'none';
        if(locationInput) locationInput.removeAttribute("disabled"); 
        alert("Ocurrio un error al obtener los datos de la ciudad ingresada. Asegurese de que este escrito correctamente");        
    }
    
}

if (buttonClick) buttonClick.addEventListener('click', showWeather);