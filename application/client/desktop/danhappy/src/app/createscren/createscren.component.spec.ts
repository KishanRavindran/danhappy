import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatescrenComponent } from './createscren.component';

describe('CreatescrenComponent', () => {
  let component: CreatescrenComponent;
  let fixture: ComponentFixture<CreatescrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatescrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatescrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});