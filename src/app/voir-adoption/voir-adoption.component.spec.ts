import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirAdoptionComponent } from './voir-adoption.component';

describe('VoirAdoptionComponent', () => {
  let component: VoirAdoptionComponent;
  let fixture: ComponentFixture<VoirAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
