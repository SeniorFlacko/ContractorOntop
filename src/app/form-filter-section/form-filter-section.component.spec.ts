import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilterSectionComponent } from './form-filter-section.component';

describe('FormFilterSectionComponent', () => {
  let component: FormFilterSectionComponent;
  let fixture: ComponentFixture<FormFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFilterSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
