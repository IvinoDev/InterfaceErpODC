import { TestBed } from '@angular/core/testing';

import { ListeparticipantService } from './listeparticipant.service';

describe('ListeparticipantService', () => {
  let service: ListeparticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeparticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
