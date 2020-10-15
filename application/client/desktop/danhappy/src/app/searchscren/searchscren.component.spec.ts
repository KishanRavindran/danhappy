import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchscrenComponent } from './searchscren.component';

describe('SearchscrenComponent', () => {
  let component: SearchscrenComponent;
  let fixture: ComponentFixture<SearchscrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchscrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchscrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});