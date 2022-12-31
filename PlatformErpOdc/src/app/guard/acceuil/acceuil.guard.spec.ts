import { TestBed } from '@angular/core/testing';

import { AcceuilGuard } from './acceuil.guard';

describe('AcceuilGuard', () => {
  let guard: AcceuilGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AcceuilGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
