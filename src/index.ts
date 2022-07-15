// Style import
import './styles/main.scss';
import './styles/loader.css';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

import { getWeather } from './networking/weather';

const contenedor_carga = document.getElementById('contenedor_carga');

window.onload = function() {
    var contenedor_carga = document.getElementById('contenedor_carga');
    if (contenedor_carga) contenedor_carga.style.visibility = 'hidden';
    if (contenedor_carga) contenedor_carga.style.opacity = '0';
}

let objLoad = {
    start() {
        if (contenedor_carga) {
            contenedor_carga.style.visibility = 'visible';
            contenedor_carga.style.opacity = '15';
        }
    },
    stop() {
        if (contenedor_carga) {
            contenedor_carga.style.visibility = 'hidden';
            contenedor_carga.style.opacity = '0';
        }
    }
}

// Create an async function to call the API method
let getApiWeather = async () => {    

    const city = getCity();
    await getWeather(city)
        .then((res)=>{
            if (res.cod === '404') {
                console.log(res.message);
            }else {
                buttonClick?.setAttribute('disabled', 'disabled');
                updateInteface(res);
                buttonClick?.removeAttribute('disabled');
            }
        })
        .catch((e) => console.log(e));
};


// Add an event listener to the button
buttonClick?.addEventListener('click', getApiWeather);

