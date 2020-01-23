import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairegarderComponent } from './fairegarder.component';

describe('FairegarderComponent', () => {
  let component: FairegarderComponent;
  let fixture: ComponentFixture<FairegarderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairegarderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairegarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
