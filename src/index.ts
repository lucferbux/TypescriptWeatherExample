// Style import
import './styles/main.scss';
import { getWeather } from './networking/weather';

// Import the API request method
import { buttonClick, getCity, updateInterface, emptyCity, updateInterfaceNotFoundCity } from './dom-manipulation/domManipulation';
import { WeatherResponse } from './model/weatherResponse';

// Create an async function to call the API method
export const displayWeather = async () => {
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        //console.log(weather)
        if(weather.cod == 200){
            updateInterface(weather);
        } else{
            let noCity:WeatherResponse = {
                "weather": [
                  {
                    "id": 0,
                    "main": "city not found",
                    "description": "few clouds",
                    "icon": "02n"
                  }
                ],
                "base": "stations",
                "main": {
                  "temp": 0,
                  "feels_like": 0,
                  "temp_min": 0,
                  "temp_max": 0,
                  "pressure": 0,
                  "humidity": 0
                },
                "visibility": 10000,
                "wind": {
                  "speed": 0,
                  "deg": 0
                },
                "name": "city not found",
                "cod": 404
              }
            updateInterfaceNotFoundCity(noCity);
        }
        
    } else{
        let noCity:WeatherResponse = {
            "weather": [
              {
                "id": 0,
                "main": "Fill he field",
                "description": "few clouds",
                "icon": "03n"
              }
            ],
            "base": "stations",
            "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "humidity": 0
            },
            "visibility": 10000,
            "wind": {
              "speed": 0,
              "deg": 0
            },
            "name": "Fill he field",
            "cod": 404
          }
        emptyCity(noCity)
    }
}

// Add an event listener to the button
if (buttonClick) buttonClick.addEventListener('click', displayWeather);