import { TestBed } from '@angular/core/testing';

import { UsernameRegistrationValidatorService } from './username-registration-validator.service';

describe('UsernameRegistrationValidatorService', () => {
  let service: UsernameRegistrationValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameRegistrationValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
