import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupgardeComponent } from './popupgarde.component';

describe('PopupgardeComponent', () => {
  let component: PopupgardeComponent;
  let fixture: ComponentFixture<PopupgardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupgardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupgardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
