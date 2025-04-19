import { Component } from '@angular/core';
import { FormsModule, FormBuilder,FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { AuthService } from './../../auth.service'
import { userRegistrationModel  } from '../../../../models/userRegistration.model';
import { AuthValidatorService } from '../../auth-validator.service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  FormData: FormGroup; // Correctly define FormData as a FormGroup

  constructor(private authService: AuthService, 
    private authValidatorService : AuthValidatorService,
    private fb: FormBuilder) {
      this.FormData = this.fb.group({
        urgUsername: [
          null,
          [Validators.required,Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]{1,10}$')], // FormGroup for username
          [this.authValidatorService.checkUserNameExistInUserRegEmployeeAndSQL()] // Custom validator to check username existence
        ],
        urgName: [null, [Validators.required]], // FormGroup for name
        urgprofessionalemail: [
          null, 
          [Validators.required,Validators.email],
          [this.authValidatorService.checkProfessionalEmailIsMatch()] // Custom validator to check professional email
        ], // FormGroup for professional email
        retypeurgprofessionalemail:[
          null, 
          [Validators.required,Validators.email],
          [this.authValidatorService.checkReTypeProfessionalEmailIsMatch()] // Custom validator to check if professional email matches
        ], // FormGroup for retyped professional email
        urgpersonalemail: [
          null, 
          [Validators.required,Validators.email],
          [this.authValidatorService.checkPersonalEmailIsMatch()]
        ], // FormGroup for personal email
        retypeurgpersonalemail: [
          null, 
          [Validators.required,Validators.email],
          [this.authValidatorService.checkReTypePersonalEmailIsMatch()] // Custom validator to check if personal email matches
        ], // FormGroup for retyped personal email
        urgphone: [null, [Validators.required]], // FormGroup for phone number
        urgsecretq1: [null, [Validators.required]], // FormGroup for secret question 1
        urgsecreta1: [null, [Validators.required]], // FormGroup for secret answer 1
        urgsecretq2: [null, [Validators.required]], // FormGroup for secret question 2
        urgsecreta2: [null, [Validators.required]] // FormGroup for secret answer 2
      });
  }

  onUsernameChange(event: any) {
    // console.log(event)
    // console.log(this.FormData); // Log the username value
  }

  onEmailChange(controlname: string) {
    const email = this.FormData.controls[controlname]; // Get the retype professional email control
    if(email.errors?.['isMatchedEmail']){
      email.setErrors(null); // Clear the error if the professional email is valid
      email.updateValueAndValidity();
    }
  }

  // Function to save registration data
  saveRegistration() {
    if (this.FormData.valid) {
      console.log("this.FormData",this.FormData);
      const userRegistrationModel: userRegistrationModel = this.FormData.value; // Get the form data

      console.log('FormData:', userRegistrationModel); // Log the FormData object
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