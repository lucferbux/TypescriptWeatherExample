import { WeatherResponse } from "../model/weatherResponse";

//comentada la variable para evitar errores pues no se usa
//let city: string = 'Example';

//Se convierte API_CURRENT en una función para que reciba el nombre de la ciudad
const API_CURRENT = (city: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;

//Function to get the weather data
export async function getWeatherData(pcity: string): Promise<WeatherResponse> {
        const response = await fetch(API_CURRENT(pcity));
            
        if (!response.ok) {
                throw new Error('Network response was not ok');
        }
        const data: WeatherResponse = await response.json();
            

        return data;
}
