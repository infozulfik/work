import { TestBed } from '@angular/core/testing';

import { DmtService } from './dmt.service';

describe('DmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DmtService = TestBed.get(DmtService);
    expect(service).toBeTruthy();
  });
});
