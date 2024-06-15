import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSideComponent } from './info-side.component';

describe('InfoSideComponent', () => {
  let component: InfoSideComponent;
  let fixture: ComponentFixture<InfoSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
