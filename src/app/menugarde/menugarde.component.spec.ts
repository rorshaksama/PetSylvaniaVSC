import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugardeComponent } from './menugarde.component';

describe('MenugardeComponent', () => {
  let component: MenugardeComponent;
  let fixture: ComponentFixture<MenugardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
