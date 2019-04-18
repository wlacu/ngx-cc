import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCcComponent } from './ngx-cc.component';

describe('NgxCcComponent', () => {
  let component: NgxCcComponent;
  let fixture: ComponentFixture<NgxCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
