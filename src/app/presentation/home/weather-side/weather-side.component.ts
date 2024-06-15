import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherModel } from '../../../domain/models/weather.model';

@Component({
  selector: 'app-weather-side',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './weather-side.component.html',
  styleUrl: './weather-side.component.scss'
})
export class WeatherSideComponent {
  @Input() public weather!: WeatherModel;

}
