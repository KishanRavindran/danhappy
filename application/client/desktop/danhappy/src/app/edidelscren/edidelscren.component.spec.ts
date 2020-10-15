import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidelscrenComponent } from './edidelscren.component';

describe('EdidelscrenComponent', () => {
  let component: EdidelscrenComponent;
  let fixture: ComponentFixture<EdidelscrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdidelscrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdidelscrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});