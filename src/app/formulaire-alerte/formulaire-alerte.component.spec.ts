import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAlerteComponent } from './formulaire-alerte.component';

describe('FormulaireAlerteComponent', () => {
  let component: FormulaireAlerteComponent;
  let fixture: ComponentFixture<FormulaireAlerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAlerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
