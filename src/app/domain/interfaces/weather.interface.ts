export interface IWeather {
  maxTemp: number;
  minTemp: number;
  temp: number;
  humidity: number;
  dayOfTheWeek: string;
  date: string;
  city: string;
  windSpeed: number;
  weather: string;
  icon: IIcon;
}

export interface IIcon {
  id: string;
  name: string;
}
