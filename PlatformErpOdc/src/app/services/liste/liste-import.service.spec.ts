import { TestBed } from '@angular/core/testing';

import { ListeImportService } from './liste-import.service';

describe('ListeImportService', () => {
  let service: ListeImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
