import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferncialComponent } from './differncial.component';

describe('DifferncialComponent', () => {
  let component: DifferncialComponent;
  let fixture: ComponentFixture<DifferncialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifferncialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferncialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
