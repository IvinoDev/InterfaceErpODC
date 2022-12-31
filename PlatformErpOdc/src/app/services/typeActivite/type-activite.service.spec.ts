import { TestBed } from '@angular/core/testing';

import { TypeActiviteService } from './type-activite.service';

describe('TypeActiviteService', () => {
  let service: TypeActiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeActiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
