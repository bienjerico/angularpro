import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class UsernameRegistrationValidatorService {

  constructor(private authService: AuthService) {}

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

}
