import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkBlankFormComponent } from './hk-blank-form.component';

describe('HkBlankFormComponent', () => {
  let component: HkBlankFormComponent;
  let fixture: ComponentFixture<HkBlankFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkBlankFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkBlankFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
