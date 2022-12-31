import { TestBed } from '@angular/core/testing';

import { DetailentiteService } from './detailentite.service';

describe('DetailentiteService', () => {
  let service: DetailentiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailentiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
