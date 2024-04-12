import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Readnews3Component } from './readnews3.component';

describe('Readnews3Component', () => {
  let component: Readnews3Component;
  let fixture: ComponentFixture<Readnews3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Readnews3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Readnews3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
