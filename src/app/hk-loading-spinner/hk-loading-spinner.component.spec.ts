import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkLoadingSpinnerComponent } from './hk-loading-spinner.component';

describe('HkLoadingSpinnerComponent', () => {
  let component: HkLoadingSpinnerComponent;
  let fixture: ComponentFixture<HkLoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkLoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
