// Style import

import { getWeather } from './networking/weather';
import './styles/main.scss';

// Import the API request method
import { buttonClick, getCity, updateInteface, Spinner } from './dom-manipulation/domManipulation';

export const displayWeather = async () => {
   //const Spinner = () =>  `<div className="loader"></div>;`

    const city = getCity();


    if(city) {
        const weather = await getWeather(city);
       

        setTimeout(()=>{ 
           
            
            updateInteface(weather);
        },600);
        
    }




    // try{
       
    // } catch(e) {
    //    // result = e.mesagge;
    //     if (typeof e === "string"){
    //         e.toUpperCase() // works, `e` narrowed to string
    //     } else if (e instanceof Error) {
    //         e.message // works `e` narrowed to error

    //     } 
    // } 


    /* ()=>{
    setTimeout(
        ()=>{ 

        
        
    },600);
    
}) */

}

if (buttonClick) buttonClick.addEventListener('click', displayWeather);

// Add an event listener to the button
// document.getElementById("button").addEventListener("click",()=>{
//     setTimeOut(()=>{
//         document.getElementById("spinner").classList.toggle("invisible")
//     },600)
//     dataProcess();
//     document.getElementById("spinner").classList.toggle("invisible")
// });
// Create an async function to call the API method
