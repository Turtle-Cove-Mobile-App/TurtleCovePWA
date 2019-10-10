import { TestBed } from '@angular/core/testing';

import { InAppBrowserService } from './in-app-browser.service';

describe('InAppBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InAppBrowserService = TestBed.get(InAppBrowserService);
    expect(service).toBeTruthy();
  });
});
