import { TestBed } from '@angular/core/testing';

import { PhonenumberValidatorService } from './phonenumber-validator.service';

describe('PhonenumberValidatorService', () => {
  let service: PhonenumberValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonenumberValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
