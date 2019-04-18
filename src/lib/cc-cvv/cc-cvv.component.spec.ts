import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcCvvComponent } from './cc-cvv.component';

describe('CcCvvComponent', () => {
  let component: CcCvvComponent;
  let fixture: ComponentFixture<CcCvvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcCvvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcCvvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
