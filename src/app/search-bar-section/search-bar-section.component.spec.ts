import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarSectionComponent } from './search-bar-section.component';

describe('SearchBarSectionComponent', () => {
  let component: SearchBarSectionComponent;
  let fixture: ComponentFixture<SearchBarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
