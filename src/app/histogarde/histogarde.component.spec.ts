import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogardeComponent } from './histogarde.component';

describe('HistogardeComponent', () => {
  let component: HistogardeComponent;
  let fixture: ComponentFixture<HistogardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistogardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
