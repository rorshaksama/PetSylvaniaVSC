import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarderComponent } from './garder.component';

describe('GarderComponent', () => {
  let component: GarderComponent;
  let fixture: ComponentFixture<GarderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
