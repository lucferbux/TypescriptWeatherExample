import cloudy from '../images/cloudy.png';
import sunny from '../images/sunny.png';
import mostlyCloudy from '../images/mostly-cloudy.png';
import clearCloudy from '../images/clear-cloudy.png';
import showers from '../images/showers.png';
import drizzle from '../images/drizzle.png';
import thunderstroms from '../images/thunderstroms.png';
import snow from '../images/snow.png';
import foggy from '../images/foggy.png';
import empty from '../images/empty.png'

// TODO: Create the interface of Weather Response

export interface WeatherResponse {
    "wind": Wind,
    "weather": [Weather],
    "main": Main,
    "name": string,
    "coord": Coord
}

interface Coord{
    "lon": string,
    "lat": string
}

interface Wind {
    "speed": string,
    "deg": number,
    "gust": string
}

interface Weather
{
    "id": number,
    "main": string,
    "description": string,
    "icon": string,
}

interface Main {
    "temp": string,
    "feels_like": string,
    "temp_min": string,
    "temp_max": string,
    "pressure": number,
    "humidity": string
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
    "---": empty,
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