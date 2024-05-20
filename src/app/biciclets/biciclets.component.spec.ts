import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletsComponent } from './biciclets.component';

describe('BicicletsComponent', () => {
  let component: BicicletsComponent;
  let fixture: ComponentFixture<BicicletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BicicletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BicicletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
