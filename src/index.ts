// Style import
import './styles/main.scss';


// Import the API request method
import { getWeather ,getLocalWeather } from './networking/weather';
import './styles/main.scss';
import { buttonClick, buttonGetClick, getCity, updateInteface, spinner , spinner2 , noSpinner, noSpinner2 } from './dom-manipulation/domManipulation';

const scity :any =localStorage.getItem('city');


if (scity) {
    (async () => {
        const weather = await getWeather(scity);
        updateInteface(weather);
    })()

}

// Create an async function to call the API method

export const displayWeather = async () => {
    spinner();  
    
    try{
    const city = getCity();
    if(city) {
       
        const weather = await getWeather(city);
        updateInteface(weather);
        console.log(weather);
        console.log(weather.name)
        localStorage.setItem('city',weather.name);
        
    }
    } catch(e) {
        
        console.log(e);
        alert('Location not found')
        

    }

    noSpinner();
}

export const getGpsWeather = async ()=> {
    spinner2();  
    try{
        if (!navigator.geolocation) {
            alert(`Your browser doesn't support Geolocation`);
            return ;
        }else {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude.toString();
                    const longitude =position.coords.longitude.toString()

                const local = await getLocalWeather(latitude, longitude);
                updateInteface(local);
                console.log(local);
                console.log(local.name)
                localStorage.setItem('city',local.name);
              });
            }
        } catch(e) {
            console.log(e);
            alert('Location Not Founded')
    
        }
        noSpinner2();
}
// Add an event listener to the button
if (buttonClick) buttonClick.addEventListener('click', displayWeather);
if (buttonGetClick) buttonGetClick.addEventListener('click', getGpsWeather);



