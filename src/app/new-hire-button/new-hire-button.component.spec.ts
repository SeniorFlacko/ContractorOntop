import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHireButtonComponent } from './new-hire-button.component';

describe('NewHireButtonComponent', () => {
  let component: NewHireButtonComponent;
  let fixture: ComponentFixture<NewHireButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHireButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHireButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
