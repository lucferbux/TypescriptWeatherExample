import {
  ICoord,
  IMain,
  IWind,
  IClouds,
  ISys,
  IOpenWeatherResponse,
  IWeather,
} from '../interfaces/open-weather.interface';

export class OpenWeatherResponse {
  constructor(
    public coord: ICoord,
    public weather: IWeather[],
    public base: string,
    public main: IMain,
    public visibility: number,
    public wind: IWind,
    public clouds: IClouds,
    public dt: number,
    public sys: ISys,
    public timezone: number,
    public id: number,
    public name: string,
    public cod: number
  ) {}

  static fromJson(json: IOpenWeatherResponse): OpenWeatherResponse {
    return new OpenWeatherResponse(
      json.coord,
      json.weather,
      json.base,
      json.main,
      json.visibility,
      json.wind,
      json.clouds,
      json.dt,
      json.sys,
      json.timezone,
      json.id,
      json.name,
      json.cod
    );
  }
}
