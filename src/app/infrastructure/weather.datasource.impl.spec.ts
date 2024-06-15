import { TestBed } from '@angular/core/testing';

import { WeatherDataSourceImpl } from './weather.datasource.impl';

describe('WeatherService', () => {
  let service: WeatherDataSourceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDataSourceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
