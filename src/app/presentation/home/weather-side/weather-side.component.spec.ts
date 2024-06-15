import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSideComponent } from './weather-side.component';

describe('WeatherSideComponent', () => {
  let component: WeatherSideComponent;
  let fixture: ComponentFixture<WeatherSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
