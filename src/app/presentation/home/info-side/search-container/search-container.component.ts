import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IWeather } from '../../../../domain/interfaces/open-weather.interface';
import { HomeService } from '../../../../use_cases/home.service';
import { WeatherModel } from '../../../../domain/models/weather.model';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, SweetAlert2Module],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.scss',
})
export class SearchContainerComponent {
  @Input() public foundCity!: WeatherModel;
  @Output() public searchCity = new EventEmitter<WeatherModel>();
  @Output() public isSwalFired = new EventEmitter<boolean>();

  public searchForm = new FormGroup({
    searchTerm: new FormControl('') as FormControl<string>,
  });

  private readonly service: HomeService = inject(HomeService);

  public filterCity(filer: string | undefined): void {
    if (filer) {
      this.service.getWeatherByCity(filer).subscribe({
        next: (city) => {
          this.foundCity = city;
          this.searchCity.emit(city);
          this.isSwalFired.emit(false);
        },
        error: (error) => {
          console.error(error);
          this.isSwalFired.emit(true);
          Swal.fire({title: 'Error', text: 'City not found', icon: 'error'});
        },
      });
    } else {
      this.isSwalFired.emit(true);
      Swal.fire({
        title: 'Error', 
        text: 'Please enter a city', 
        icon: 'error', 
        didClose: () => {
          this.isSwalFired.emit(false);
        },
      });
    }
  }
}
