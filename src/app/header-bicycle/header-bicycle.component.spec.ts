import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBicycleComponent } from './header-bicycle.component';

describe('HeaderBicycleComponent', () => {
  let component: HeaderBicycleComponent;
  let fixture: ComponentFixture<HeaderBicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBicycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
