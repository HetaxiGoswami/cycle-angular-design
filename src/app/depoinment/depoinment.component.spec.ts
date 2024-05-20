import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoinmentComponent } from './depoinment.component';

describe('DepoinmentComponent', () => {
  let component: DepoinmentComponent;
  let fixture: ComponentFixture<DepoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepoinmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
