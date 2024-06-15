import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherModel } from '../../../domain/models/weather.model';
import { SearchContainerComponent } from './search-container/search-container.component';

@Component({
  selector: 'app-info-side',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SearchContainerComponent],
  templateUrl: './info-side.component.html',
  styleUrl: './info-side.component.scss',
})
export class InfoSideComponent {
  @Input() public weather!: WeatherModel;
  @Output() public searchCity = new EventEmitter<WeatherModel>();
  @Output() public isSwalFired = new EventEmitter<boolean>();

  public handleSearchCity(searchTerm: WeatherModel): void {
    this.searchCity.emit(searchTerm);
  }

  public handleIsSwalFired(isSwalFired: boolean): void {
    this.isSwalFired.emit(isSwalFired);
  }
}
