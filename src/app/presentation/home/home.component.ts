import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { HomeService } from '../../use_cases/home.service';
import { IWeather } from '../../domain/interfaces/open-weather.interface';
import { WeatherModel } from '../../domain/models/weather.model';
import { WeatherSideComponent } from './weather-side/weather-side.component';
import { InfoSideComponent } from './info-side/info-side.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WeatherSideComponent, InfoSideComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public weather = signal<WeatherModel>({} as WeatherModel);
  public isSwalFired = signal<boolean>(false);
  private homeService = inject(HomeService);
  ngOnInit(): void {
    this.getWeatherByCity('Lautaro');
  }

  public refreshCity(searchTerm: WeatherModel) {
    this.weather.set(searchTerm);
  }

  public handleIsSwalFired(isSwalFired: boolean) {
    console.log('isSwalFired', isSwalFired);
    this.isSwalFired.set(isSwalFired);
  }

  private getWeatherByCity(city: string): void {
    this.homeService.getWeatherByCity(city).subscribe({
      next: (weather) => {
        this.weather.set(weather);
      },
      error: (error) => {
        console.error('Error getting weather by city', error);
      },
    });
  }
}
