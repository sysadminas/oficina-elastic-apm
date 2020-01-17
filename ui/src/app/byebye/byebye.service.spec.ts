import { TestBed } from '@angular/core/testing';

import { ByebyeService } from './byebye.service';

describe('ByebyeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ByebyeService = TestBed.get(ByebyeService);
    expect(service).toBeTruthy();
  });
});
