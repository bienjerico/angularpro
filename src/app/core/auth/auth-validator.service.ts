import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthValidatorService {

  constructor(private authService: AuthService) {}

  // Function to check if the username exists in UserRegEmployee and SQL
  checkUserNameExistInUserRegEmployeeAndSQL(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const username: string = control.value;

      // If the username is empty, return null immediately (no error)
      if (!username) {
        return of(null);
      }

      // Avoid direct modification of the form group
      const requestData = {
        ...control.parent?.value,
        urgUsername: username,
      };

      // Perform the HTTP request to validate the username
      return this.authService.checkUserNameExistInUserRegEmployeeAndSQL(requestData).pipe(
        map((response: any) => {
          return response.usernameIstaken === 1 ? { usernameTaken: true } : null;
        }),
        catchError((error) => {
          return of({ serverError: true }); // Handle errors gracefully
        })
      );
    };
  }

  // Function to check if the professional email matches the retyped professional email
  validateEmail(orginalemail: string, retypeemail: string): any {
    // Check if the original and retyped emails match
     if (!orginalemail || !retypeemail) {
      return of(null);
    }
    // Check if the original and retyped emails match
    return of(orginalemail !== retypeemail ? { isMatchedEmail: true } : null);
  }

  // Function to check if the oringal professional email matches the retyped professional email
  checkProfessionalEmailIsMatch(): AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const urgprofessionalemail: string = control.value;

      if(!urgprofessionalemail) {
        return of(null); // If the email is empty, return null immediately (no error) 
      }
      
      // Avoid direct modification of the form group
      const FormData = {
        ...control.parent?.value,
        urgprofessionalemail: urgprofessionalemail,
      };

      // Check if the professional emails match
      return this.validateEmail(FormData.urgprofessionalemail, FormData.retypeurgprofessionalemail);
    };
  }

  // Function to check if the retyped professional email matches the original professional email
  checkReTypeProfessionalEmailIsMatch(): AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const retypeurgprofessionalemail: string = control.value;

      if(!retypeurgprofessionalemail) {
        return of(null); // If the email is empty, return null immediately (no error) 
      }
      
      // Avoid direct modification of the form group
      const FormData = {
        ...control.parent?.value,
        retypeurgprofessionalemail: retypeurgprofessionalemail,
      };
      // Check if the professional emails match
      return this.validateEmail(FormData.urgprofessionalemail, FormData.retypeurgprofessionalemail);
    };
  }

  // Function to check if the personal email matches the retyped personal email
  checkPersonalEmailIsMatch(): AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const urgpersonalemail: string = control.value;

      if(!urgpersonalemail) {
        return of(null); // If the email is empty, return null immediately (no error) 
      }
      
      // Avoid direct modification of the form group
      const FormData = {
        ...control.parent?.value,
        urgpersonalemail: urgpersonalemail,
      };
      /// Check if the personal emails match
      return this.validateEmail(FormData.urgpersonalemail, FormData.retypeurgpersonalemail);
    };
  }

  // Function to check if the retyped personal email matches the original personal email
  checkReTypePersonalEmailIsMatch(): AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const retypeurgpersonalemail: string = control.value;

      if(!retypeurgpersonalemail) {
        return of(null); // If the email is empty, return null immediately (no error) 
      }
      
      // Avoid direct modification of the form group
      const FormData = {
        ...control.parent?.value,
        retypeurgpersonalemail: retypeurgpersonalemail,
      };
      /// Check if the personal emails match
      return this.validateEmail(FormData.urgpersonalemail, FormData.retypeurgpersonalemail);
    };
  }


}
