import { Observable } from "rxjs";
import { OpenWeatherResponse } from "../models/open-weather.response.model";
import { IIcon } from "../interfaces/weather.interface";

export abstract class WeatherDataSource {
  abstract getWeatherByCity(city: string): Observable<OpenWeatherResponse>;
  abstract getIcon(weatherIconId: string): Observable<IIcon[]>;
}