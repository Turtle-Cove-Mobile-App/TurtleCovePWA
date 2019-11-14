import { TestBed } from '@angular/core/testing';

import { ImageViewService } from './image-view.service';

describe('ImageViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageViewService = TestBed.get(ImageViewService);
    expect(service).toBeTruthy();
  });
});
