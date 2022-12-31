import { TestBed } from '@angular/core/testing';

import { SalleServiceService } from './salle-service.service';

describe('SalleServiceService', () => {
  let service: SalleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
