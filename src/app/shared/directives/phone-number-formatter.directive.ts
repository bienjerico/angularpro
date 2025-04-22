import { Directive, HostListener, ElementRef } from '@angular/core';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

@Directive({
  selector: '[appPhoneNumberFormatter]'
})
export class PhoneNumberFormatterDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const inputValue = this.el.nativeElement.value;
    try {
      const parsedNumber = parsePhoneNumberFromString(inputValue);
      if (parsedNumber?.isValid()) {
        this.el.nativeElement.value = parsedNumber.formatInternational(); // Formats phone number
      } else {
        console.error('Invalid phone number!');
      }
    } catch (error:any) {
      console.error('Error formatting phone number:', error.message);
    }
  }
}
