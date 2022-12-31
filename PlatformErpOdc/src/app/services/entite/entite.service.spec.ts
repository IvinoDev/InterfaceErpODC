import { TestBed } from '@angular/core/testing';

import { EntiteService } from './entite.service';

describe('EntiteService', () => {
  let service: EntiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
