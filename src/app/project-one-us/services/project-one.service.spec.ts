import { TestBed } from '@angular/core/testing';

import { ProjectOneService } from './project-one.service';

describe('ProjectOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectOneService = TestBed.get(ProjectOneService);
    expect(service).toBeTruthy();
  });
});
