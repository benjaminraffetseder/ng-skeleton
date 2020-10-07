import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSkeletonComponent } from './ng-skeleton.component';

describe('NgSkeletonComponent', () => {
  let component: NgSkeletonComponent;
  let fixture: ComponentFixture<NgSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
