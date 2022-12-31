import { TestBed } from '@angular/core/testing';

import { TachedesignationService } from './tachedesignation.service';

describe('TachedesignationService', () => {
  let service: TachedesignationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TachedesignationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
