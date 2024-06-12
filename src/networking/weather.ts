import { WeatherResponse } from "../model/weatherResponse";





// TODO: Create an async function with an argument called city to return the that of the endpoint

export async function getWeather(city: string) {  
  const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;
  console.log(API_CURRENT);
  return (await fetch(API_CURRENT)).json();
}
