import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPageDemoComponent } from './blank-page-demo.component';

describe('BlankPageDemoComponent', () => {
  let component: BlankPageDemoComponent;
  let fixture: ComponentFixture<BlankPageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankPageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankPageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
