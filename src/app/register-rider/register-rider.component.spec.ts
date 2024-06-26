import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRiderComponent } from './register-rider.component';

describe('RegisterRiderComponent', () => {
  let component: RegisterRiderComponent;
  let fixture: ComponentFixture<RegisterRiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRiderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
