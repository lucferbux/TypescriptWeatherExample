// Style import
import './styles/main.scss';
import {getWeather} from './networking/weather'

// Import the API request method
import { buttonClick, getCity, updateInteface, locationInput, errorDescription, loadingImg } from './dom-manipulation/domManipulation';

locationInput?.addEventListener('keyup', function(e:KeyboardEvent){
  if(this.value.length<=3){
    errorDescription.innerHTML = 'Invalid Length'
  }else{
    errorDescription.innerHTML = ''
    if(e.key =='Enter'){
      buttonClick?.click()
    }
  }
});
// Add an event listener to the button
buttonClick?.addEventListener('click',async (e:MouseEvent) => {
    const city = getCity()
    loadingImg.classList.remove('hide')
    const response = await getWeather(city)
    updateInteface(response)
    loadingImg.classList.add('hide')

  })

// Create an async function to call the API method
