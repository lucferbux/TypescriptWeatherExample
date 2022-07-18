import { WeatherResponse } from "../model/weatherResponse";
import { removeAlerts, addAlerts } from "../dom-manipulation/alerts";
// TODO: Create an async function with an argument called city to return the that of the endpoint
export const getWeather = async (place:string) : Promise<WeatherResponse> =>  {
    removeAlerts()
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    let city = place
    console.log(city)
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`
    let res = await fetch(API_CURRENT,requestOptions)
    if (res.status != 200){
        addAlerts("City not found, please enter another city")
    }
    return res.json()
}

    
