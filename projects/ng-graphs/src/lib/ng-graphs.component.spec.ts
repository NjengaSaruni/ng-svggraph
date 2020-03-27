import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGraphsComponent } from './ng-graphs.component';

describe('NgGraphsComponent', () => {
  let component: NgGraphsComponent;
  let fixture: ComponentFixture<NgGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
