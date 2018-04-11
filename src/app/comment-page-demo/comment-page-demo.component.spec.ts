import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPageDemoComponent } from './comment-page-demo.component';

describe('CommentPageDemoComponent', () => {
  let component: CommentPageDemoComponent;
  let fixture: ComponentFixture<CommentPageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentPageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
