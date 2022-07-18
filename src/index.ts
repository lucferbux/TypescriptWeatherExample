// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import {getWeather} from './networking/weather'
import { removeAlerts, addAlerts} from './dom-manipulation/alerts';

// Add an event listener to the button

// Create an async function to call the API method
export const updateWeather = async () =>  {
    removeAlerts()
    let city = getCity()
    if (city){
        try{
        const weather = await getWeather(getCity())
        updateInteface(weather)
        }catch(error){
            console.log(error)
        }
    } else{
        addAlerts("No values for city were entered")

    }
}
buttonClick?.addEventListener("click",updateWeather)
