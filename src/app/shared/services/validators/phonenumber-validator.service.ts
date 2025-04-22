import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';

@Injectable({
  providedIn: 'root'
})
export class PhonenumberValidatorService {

  constructor() { }

  checkPhoneNumberIsValid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null; // Don't validate if the field is empty
      }

      const phoneNumber = parsePhoneNumberFromString(control.value);
      const isValid = phoneNumber?.isValid();

      return isValid ? null : { invalidPhoneNumber: { value: control.value } };
    }
  }

}
