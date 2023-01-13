// Style import
import './styles/main.scss';

// Import the API request method
import {getWeatherFromApi} from './networking/weather';

// Import the WeatherResponse Interface
import { WeatherResponse } from './model/weatherResponse';

import { buttonClick, getCity, updateInterface, cleanInterface } from './dom-manipulation/domManipulation';

// Create an async function to call the API method
// Esta funcion se llama al hacer click en el boton, debe ser la que llama el eventListener
const showWeather = async ()  => {
    let city : string;
    let response : WeatherResponse;

    cleanInterface(); // limpiar los datos anteriores

    city = getCity(); // Obtener la ciudad para la cual voy a mostrar el clima
    if (city=="") {
        alert("Debe ingresar una ciudad.");
        return;
    }
    try {
        buttonClick.disabled = true;
        response = await getWeatherFromApi(city); // Obtener datos de la Api
        console.log(response);
        if (response.cod !== 200){
            alert("Ciudad no encontrada");
            return;
        }
        updateInterface(response); 

    }
    catch (err) {
        alert(`No hay datos para ${city}`)
    }
    finally {
        // agrego el disabled = false aqui para que tanto en exito/error se vuelva a habilitar el boton
        buttonClick.disabled = false;
    }
}

// Add an event listener to the button
buttonClick?.addEventListener("click",showWeather)

