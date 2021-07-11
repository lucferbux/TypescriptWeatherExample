import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location")!; //! muestra que es importante
const WeatherIconPng = document.getElementById("weather-icon")!;
const cityInput = document.getElementById("weather-location-input");
const dayName = document.getElementById("date-dayname");
const datDate = document.getElementById("date-day");
const locationText = document.getElementById("location-text");
const weatherTemp = document.getElementById("weather-temp");
const weatherDesc = document.getElementById("weather-desc");
const tempMax = document.getElementById("text-temp-max");
const tempMin = document.getElementById("text-temp-min");
const textHum = document.getElementById("text-humidity");
const textWind = document.getElementById("text-wind");
const loadSpinner = document.getElementById('loadSpinner')!;
const mapId = document.getElementById("map")!;
const htmlValue = '<div id="carga_spinner">'+ 
'<div id="carga">'+
'</div>'+
'</div>';
let map: google.maps.Map;
let lati: string, longi: string, newLatLng: any, marker: any;
var timeoutSecond = 4, usingMap = false;
// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    porperties(dayName, getDayOfWeek(), 1);
    porperties(datDate, getDate(), 1);
    porperties("", weather.weather[0].icon, 0);
    porperties(weatherTemp, Math.round(parseInt(weather.main.temp)) + " ºC", 1);
    porperties(weatherDesc, weather.weather[0].description, 1);
    porperties(tempMax, Math.round(parseInt(weather.main.temp_max)) + " ºC", 1);
    porperties(tempMin, Math.round(parseInt(weather.main.temp_min)) + " ºC", 1);    
    porperties(textHum, weather.main.humidity + " %", 1);    
    porperties(textWind,  weather.wind.speed + " m/s", 1);    
    porperties(locationText,  weather.name, 1);
    lati = weather.coord.lat;
    longi = weather.coord.lon;   
}

function porperties(param:any, value:string, idx:number){
    if(idx === 1){
        (<HTMLInputElement> param).innerHTML = value;
    }else{
       changeWeatherIcon(value);
    }
}

export function spinnerPage(visibility: string, opacity: string){
    loadSpinner.style.visibility = visibility;
    loadSpinner.style.opacity = opacity;
}

export function spinnerValue(){
    loadSpinner.innerHTML = htmlValue;
}

// TODO: Get the city from the input element
export function getCity(): string {
    let cityNameValue: string = (<HTMLInputElement> cityInput).value;
    if(cityNameValue){
     return cityNameValue;
      }else{
          alert("Campo no puede estar en vacío.");
          return "";
      }
    }

export function clearInterface(): void{
    porperties(dayName, "--", 1);
    porperties(datDate, "--", 1);
    porperties("", "---", 0);
    porperties(weatherTemp, "--", 1);
    porperties(weatherDesc, "-", 1);
    porperties(tempMax, "- ºC", 1);
    porperties(tempMin, "- ºC", 1);    
    porperties(textHum, " %", 1);    
    porperties(textWind, " m/s", 1);    
    porperties(locationText, "--", 1);   
}
    

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
}

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
    }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        alert('Imagen invalida');    
    }
}

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
}

export async function findLocation(){
    map = new google.maps.Map(mapId as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 }, //CAMBIAR
        zoom: 6,
      });
      let timer: ReturnType<typeof setTimeout> = setTimeout(function(){
                                                               searchLocation();}, 
                                                           timeoutSecond * 100);
      console.log(timer);

  google.maps.event.addListener(map, 'tilesloaded', async () => {
      clearTimeout(timer);
      usingMap = true;      
  });
}

function searchLocation() {
      const locationButton = document.createElement("button");
      locationButton.textContent = "Localizar en el Mapa";
      locationButton.classList.add("map-location-button");
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
      locationButton.addEventListener("click", async () => {
        var lat = parseFloat(lati);
        var lon = parseFloat(longi);
        var newLatLng = new google.maps.LatLng(lat, lon);
        if (navigator.geolocation){
            marker = new google.maps.Marker({
                position: newLatLng,
                map: map,   
                animation: google.maps.Animation.DROP, 
                draggable: false
              });
        }
        else {
          // Browser doesn't support Geolocation
          handleLocationError();
        } 
       
        map.setCenter(newLatLng);
      });
}

function handleLocationError() {
    alert("No se pudo localizar en el mapa");
  }