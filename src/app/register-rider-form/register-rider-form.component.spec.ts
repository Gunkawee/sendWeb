import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRiderFormComponent } from './register-rider-form.component';

describe('RegisterRiderFormComponent', () => {
  let component: RegisterRiderFormComponent;
  let fixture: ComponentFixture<RegisterRiderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRiderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterRiderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
