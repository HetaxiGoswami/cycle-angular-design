import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSegurosComponent } from './header-seguros.component';

describe('HeaderSegurosComponent', () => {
  let component: HeaderSegurosComponent;
  let fixture: ComponentFixture<HeaderSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSegurosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
