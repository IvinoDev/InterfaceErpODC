import { TestBed } from '@angular/core/testing';

import { DetailListPostService } from './detail-list-post.service';

describe('DetailListPostService', () => {
  let service: DetailListPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailListPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
