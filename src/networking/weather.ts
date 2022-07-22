import { WeatherResponse } from "../model/weatherResponse";

//const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3bbc7b4f3ca7292a89bfcd6088899c9&units=metric`

// TODO: Create an async function with an argument called city to return the that of the endpoint
export const getWeather = async (city: string) :Promise<any> =>  {
    try{
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3bbc7b4f3ca7292a89bfcd6088899c9&units=metric`, requestOptions);
        if (response.ok){
            console.log('esta ok');
            return response.json();
        }else{
            console.log('Error: ' + response.status);
            return
        }
     
    
    } catch(e) {
        console.log(e);
        
    }
}

export const getLocalWeather = async (latitude :string , longitude :string ) :Promise <any> => {

    try{
        var requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow'
        };
        console.log(latitude,longitude);

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f3bbc7b4f3ca7292a89bfcd6088899c9&units=metric`, requestOptions);
        if (response.ok){
            
            return response.json();
        }else{
            console.log('Error: ' + response.status);
            return;
        }

        } catch(e) {
        console.log(e);
        
        }


}