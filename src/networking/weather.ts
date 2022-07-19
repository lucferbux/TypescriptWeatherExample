import { WeatherResponse } from "../model/weatherResponse";

//const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`

// TODO: Create an async function with an argument called city to return the that of the endpoint
export interface ResponseInformation{
    status: number;
    message: string;
    ok:boolean;
    data: any;
}


export const getWeather = async(city:string): Promise<ResponseInformation> =>{
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`
    const dataResponse :ResponseInformation = {
        status : 500,
        message: "Unknown Error",
        ok:false,
        data: null
    } 
    try{
        let response = await fetch(API_CURRENT,{
            method:'GET'
        })
        .then(response =>{
            dataResponse.status = response.status
            dataResponse.message = response.statusText
            dataResponse.ok = response.ok
            return response.json()
        })
        dataResponse.data = dataResponse.ok? response:null
        return dataResponse
    } catch(error){
        if(error instanceof Error) dataResponse.message = error.message
        else dataResponse.message = String(error)
        return dataResponse
    }
}