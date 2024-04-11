import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Readnews2Component } from './readnews2.component';

describe('Readnews2Component', () => {
  let component: Readnews2Component;
  let fixture: ComponentFixture<Readnews2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Readnews2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Readnews2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
