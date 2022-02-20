import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorLabelComponent } from './contractor-label.component';

describe('ContractorLabelComponent', () => {
  let component: ContractorLabelComponent;
  let fixture: ComponentFixture<ContractorLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
