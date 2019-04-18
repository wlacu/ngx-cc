import { TestBed } from '@angular/core/testing';

import { NgxCcService } from './ngx-cc.service';

describe('NgxCcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCcService = TestBed.get(NgxCcService);
    expect(service).toBeTruthy();
  });
});
