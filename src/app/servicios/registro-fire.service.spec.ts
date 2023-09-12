import { TestBed } from '@angular/core/testing';

import { RegistroFireService } from './registro-fire.service';

describe('RegistroFireService', () => {
  let service: RegistroFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
