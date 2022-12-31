import { TestBed } from '@angular/core/testing';

import { ListeService } from './liste.service';

describe('ListeService', () => {
  let service: ListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
