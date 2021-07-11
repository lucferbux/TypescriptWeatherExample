// Style import
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface, clearInterface, spinnerPage, spinnerValue, findLocation } from './dom-manipulation/domManipulation';
import { apiCall } from './networking/weather'

// Add an event listener to the button
buttonClick.addEventListener("click", async ()=>{
    try{
        (<HTMLInputElement> buttonClick).disabled = true;
            let city = await getCity();
            if (city !== ""){
                await spinnerValue();
                await spinnerPage('visible','1');
                button(city);
            }
    }catch(err){
        alert("Ha ocurrido un error, favor intente nuevamente.");
    }
}, false);

// Create an async function to call the API method
async function button(city:string){
    
    (<HTMLInputElement> buttonClick).disabled = false;
    try{
        let response:any = await apiCall(city);
            await spinnerValue();
            await updateInteface(response);
            await findLocation();
            await spinnerPage('hidden','0');
    }catch(err){
        await clearInterface();
        await spinnerPage('hidden','0');
        alert("Error no se encontró respuesta, intente con otro valor.");
    }

}

