import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBienvenueComponent } from './page-bienvenue.component';

describe('PageBienvenueComponent', () => {
  let component: PageBienvenueComponent;
  let fixture: ComponentFixture<PageBienvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBienvenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBienvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
