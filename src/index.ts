// Style import

import { getWeather } from './networking/weather';
import './styles/main.scss';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';



export const displayWeather = async () => {
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    } 
}

if (buttonClick) buttonClick.addEventListener('click', displayWeather);


