import { TestBed } from '@angular/core/testing';

import { InstallCounterService } from './install-counter.service';

describe('InstallCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstallCounterService = TestBed.get(InstallCounterService);
    expect(service).toBeTruthy();
  });
});
