import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscrenComponent } from './viewscren.component';

describe('ViewscrenComponent', () => {
  let component: ViewscrenComponent;
  let fixture: ComponentFixture<ViewscrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewscrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewscrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});