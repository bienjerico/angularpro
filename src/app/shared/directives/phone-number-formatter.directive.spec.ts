import { PhoneNumberFormatterDirective } from './phone-number-formatter.directive';
import { ElementRef } from '@angular/core';

describe('PhoneNumberFormatterDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(null);
    const directive = new PhoneNumberFormatterDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
