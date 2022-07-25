import cloudy from '../images/cloudy.png';
import sunny from '../images/sunny.png';
import mostlyCloudy from '../images/mostly-cloudy.png';
import clearCloudy from '../images/clear-cloudy.png';
import showers from '../images/showers.png';
import drizzle from '../images/drizzle.png';
import thunderstroms from '../images/thunderstroms.png';
import snow from '../images/snow.png';
import foggy from '../images/foggy.png';

// TODO: Create the interface of Weather Response

export interface WeatherResponse {
    weather: [Weather];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    name: string;
    coord: Coord;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

interface Coord {
    lat: number;
    lon: number;
}

 


export const WeatherIcon = {
    "01d": sunny,
    "01n": sunny,
    "02d": clearCloudy,
    "02n": clearCloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": mostlyCloudy,
    "04n": mostlyCloudy,
    "09d": showers,
    "09n": showers,
    "10d": drizzle,
    "10n": drizzle,
    "11d": thunderstroms,
    "11n": thunderstroms,
    "13d": snow,
    "13n": snow,
    "50d": foggy,
    "50n": foggy,
} as const;

export const DayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    
];

export type WeatherIcontype = keyof typeof WeatherIcon;

export function winDir(deg:number):(any) {
    if (deg > 348.76  || deg < 11.25){
        return 'N';
    }
    if (deg >= 11.26 && deg <= 33.75 ){
        return 'NNE';
    }
    if (deg >= 33.76 && deg <= 56.25 ){
        return 'NE';
    }
    if (deg >= 56.27 && deg <= 78.75 ){
        return 'ENE';
    }
    if (deg >= 78.76 && deg <= 101.25 ){
        return 'E';
    }
    if (deg >= 101.26 && deg <= 123.75 ){
        return 'ESE';
    }
    if (deg >= 123.76 && deg <= 146.25 ){
        return 'SE';
    }
    if (deg >= 146.26 && deg <= 168.75 ){
        return 'SSE';
    }
    if (deg >= 168.76 && deg <= 191.25 ){
        return 'S';
    }
    if (deg >= 191.26 && deg <= 213.75 ){
        return 'SSW';
    }
    if (deg >= 213.76 && deg <= 236.25 ){
        return 'SW';
    }
    if (deg >= 263.26 && deg <= 258.75 ){
        return 'WSW';
    }
    if (deg >= 258.76 && deg <= 281.25 ){
        return 'W';
    }
    if (deg >= 281.26 && deg <= 303.75 ){
        return 'WNW';
    }
    if (deg >= 303.76 && deg <= 326.25 ){
        return 'NW';
    }
    if (deg >= 326.26 && deg <= 348.75 ){
        return 'NNW';
    }else{
        console.log('error');
        
    }

}