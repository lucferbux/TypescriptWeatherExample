// Style import

import { getWeather } from './networking/weather';
import './styles/main.scss';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';



export const displayWeather = async () => {
    const button = document.getElementById('button-location') as HTMLButtonElement;
    button.disabled =true;
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    } 
    button.disabled = false;
}

if (buttonClick) buttonClick.addEventListener('click', displayWeather);


