// Style import
import './styles/main.scss';

// Import the API request method
import {getWeatherFromApi} from './networking/weather';

// Import the WeatherResponse Interface
import { WeatherResponse } from './model/weatherResponse';

import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// Create an async function to call the API method
// Esta funcion se llama al hacer click en el boton, debe ser la que llama el eventListener
const showWeather = async ()  => {
    let city : string;
    let response : WeatherResponse;

    city = getCity(); // Obtener la ciudad para la cual voy a mostrar el clima
    //alert(`getcity me dio ${city}`)
    if (city=="") {
        alert("Debe ingresar una ciudad.");
        return
    }
    try {
        response = await getWeatherFromApi(city); // Obtener datos de la Api
        console.log(response);
        updateInteface(response); 

    }
    catch (err) {
        alert(`No hay datos para ${city}`)
    }
}

// Add an event listener to the button
buttonClick?.addEventListener("click",showWeather)

