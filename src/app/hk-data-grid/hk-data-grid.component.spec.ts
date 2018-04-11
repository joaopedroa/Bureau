import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkDataGridComponent } from './hk-data-grid.component';

describe('HkDataGridComponent', () => {
  let component: HkDataGridComponent;
  let fixture: ComponentFixture<HkDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
