import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailPageDemoComponent } from './comment-detail-page-demo.component';

describe('CommentDetailPageDemoComponent', () => {
  let component: CommentDetailPageDemoComponent;
  let fixture: ComponentFixture<CommentDetailPageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDetailPageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailPageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
