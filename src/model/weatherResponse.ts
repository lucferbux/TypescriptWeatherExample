import cloudy from '../images/cloudy.png';
import sunny from '../images/sunny.png';
import mostlyCloudy from '../images/mostly-cloudy.png';
import clearCloudy from '../images/clear-cloudy.png';
import showers from '../images/showers.png';
import drizzle from '../images/drizzle.png';
import thunderstroms from '../images/thunderstroms.png';
import snow from '../images/snow.png';
import foggy from '../images/foggy.png';
import initialIcon from '../images/empty.png';

// TODO: Create the interface of Weather Response

export interface WeatherResponse {
    cod: number | string,
    base : string,
    dt: number,
    id: number,
    clouds : Clouds,
    coord : Coord,
    main : Main,
    name : string,
    sys: Sys,
    timezone : number,
    visibility : number,
    weather : Weather[],
    wind : Wind
}

interface Coord {
    lat : number,
    lon : number
}

interface Wind {
    deg : number,
    speed : number
}

interface Weather {
    description : string,
    icon : string,
    id  : number,
    main : string
}

interface Main {
    temp : number,
    temp_max : number,
    temp_min : number,
    feels_like : number,
    humidity : number,
    pressure : number
}

interface Sys {
    country : string,
    id: number,
    sunrise : number,
    sunset : number,
    type: number
}

interface Clouds {
    all : number
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
    "initialIcon": initialIcon,
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