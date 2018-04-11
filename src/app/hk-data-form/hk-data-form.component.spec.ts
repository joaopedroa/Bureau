import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkDataFormComponent } from './hk-data-form.component';

describe('HkDataFormComponent', () => {
  let component: HkDataFormComponent;
  let fixture: ComponentFixture<HkDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
