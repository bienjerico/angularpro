import { Component } from '@angular/core';
import { FormsModule, FormBuilder,FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { wvsdUserRegistration } from '../../../../models/wvsdUserRegistration';
import { UsernameRegistrationValidatorService } from '../../../../services/validators/username-registration-validator.service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  FormData: FormGroup; // Correctly define FormData as a FormGroup

  constructor(private authService: AuthService, 
    private usernameRegistrationValidatorService : UsernameRegistrationValidatorService,
    private fb: FormBuilder) {
      this.FormData = this.fb.group({
        urgUsername: [
          null,
          [Validators.required,Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]{1,10}$')], // FormGroup for username
          [this.usernameRegistrationValidatorService.checkUserNameExistInUserRegEmployeeAndSQL()] // Custom validator to check username existence
        ],
        urgName: [null, [Validators.required]], // FormGroup for name
        urgprofessionalemail: [null, [Validators.email]], // FormGroup for professional email
        retypeurgprofessionalemail: [null, [Validators.email]], // FormGroup for retyped professional email
        urgpersonalemail: [null, [Validators.email]], // FormGroup for personal email
        retypeurgpersonalemail: [null, [Validators.email]], // FormGroup for retyped personal email
        urgphone: [null, [Validators.required]], // FormGroup for phone number
        urgsecretq1: [null, [Validators.required]], // FormGroup for secret question 1
        urgsecreta1: [null, [Validators.required]], // FormGroup for secret answer 1
        urgsecretq2: [null, [Validators.required]], // FormGroup for secret question 2
        urgsecreta2: [null, [Validators.required]] // FormGroup for secret answer 2
      });
  }

  // FormData: FormGroup = new FormGroup({
  //   urgUsername: new FormControl("",
  //     Validators.compose([
  //       // Validators.required, // FormGroup for username
  //       // Validators.pattern('^[a-zA-Z0-9]{1,10}$'),
  //       this.usernameRegistrationValidatorService.checkUserNameExistInUserRegEmployeeAndSQL() // Custom validator to check username existence
  //     ])
  //   ), // FormGroup for username
  //   urgName: new FormControl("", [Validators.required]), // FormGroup for name
  //   urgprofessionalemail: new FormControl("", [Validators.email]), // FormGroup for professional email
  //   retypeurgprofessionalemail: new FormControl("", [Validators.email]), // FormGroup for retyped professional email
  //   urgpersonalemail: new FormControl("", [Validators.email]), // FormGroup for personal email
  //   retypeurgpersonalemail: new FormControl("", [Validators.email]), // FormGroup for retyped personal email
  //   urgphone: new FormControl("", [Validators.required]), // FormGroup for phone number
  //   urgsecretq1: new FormControl("", [Validators.required]), // FormGroup for secret question 1
  //   urgsecreta1: new FormControl("", [Validators.required]), // FormGroup for secret answer 1
  //   urgsecretq2: new FormControl("", [Validators.required]), // FormGroup for secret question 2
  //   urgsecreta2: new FormControl("", [Validators.required]) // FormGroup for secret answer 2
  // }); // FormGroup for registration form


  // checkUserNameExistInUserRegEmployeeAndSQL(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors => {
  //     const username: string = control.value;
  //    // If username is empty, return null immediately (no validation error)
  //    if (!username) {
  //     return of(null); // Return no validation error
  //   }

  //   // Avoid modifying the parent form data
  //   const wvsdUserRegistrationData = {
  //     ...control.parent?.value,
  //     urgUsername: username, // Include the username in the data object
  //   };

  //     return this.authService.checkUserNameExistInUserRegEmployeeAndSQL(wvsdUserRegistrationData).subscribe({
  //       next: (response: any) => {
  //         console.log('Username check successful:', response);
  //         return response.usernameIstaken===1 ? { usernameTaken: true } : null; // Return validation error if username is taken
  //       }, 
  //       error: (err: any) => {
  //         console.error('Validation error:', err);
  //         return of({ serverError: true }); // Handle server errors gracefully
  //       }
  //     });

  //   };
  // };


  // checkUserNameExistInUserRegEmployeeAndSQL(control: any): ValidatorFn {

  //   console.log(control.value); // Log the username value
  //   const value = control.value;
  //   if (!value) {
  //     return false;
  //   }
  //   const hasUpperCase = /[A-Z]/.test(value);
  //   const hasLowerCase = /[a-z]/.test(value);
  //   const hasNumber = /\d/.test(value);
  //   const isValid = hasUpperCase && hasLowerCase && hasNumber;
  //   console.log('isValid:', isValid); // Log the validity of the username
  //   return !isValid;

  //   // const wvsdUserRegistrationData: wvsdUserRegistration = this.FormData.value; // Get the form data
  //   // this.authService.checkUserNameExistInUserRegEmployeeAndSQL(wvsdUserRegistrationData).subscribe({
  //   //   next: (response: any) => {
  //   //     console.log('Username check successful:', response);
  //   //     // Handle successful username check (e.g., show success message)
  //   //   },
  //   //   error: (err: any) => {  
  //   //     console.log('Username Error:', err);
  //   //   }
  //   // })
  // }

  onUsernameChange(event: any) {
    // console.log(event)
    // console.log(this.FormData); // Log the username value
  }

  // Function to save registration data
  saveRegistration() {
    if (this.FormData.valid) {
      console.log("this.FormData",this.FormData);
      const wvsdUserRegistrationData: wvsdUserRegistration = this.FormData.value; // Get the form data

      console.log('FormData:', wvsdUserRegistrationData); // Log the FormData object
      // this.authService.registerUser(this.FormData).subscribe({
      //   next: (response: any) => {
      //     console.log('Registration successful:', response);
      //     // Handle successful registration (e.g., navigate to login page)
      //   },
      //   error: (err: any) => {
      //     console.error('Registration failed:', err);
      //     // Handle registration error (e.g., show error message)
      //   }
      // });
    }
  }
}