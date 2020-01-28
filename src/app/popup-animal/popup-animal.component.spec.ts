import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAnimalComponent } from './popup-animal.component';

describe('PopupAnimalComponent', () => {
  let component: PopupAnimalComponent;
  let fixture: ComponentFixture<PopupAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
