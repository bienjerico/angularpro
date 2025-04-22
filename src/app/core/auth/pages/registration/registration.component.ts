import { Component } from '@angular/core';
import { FormsModule, FormBuilder,FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { AuthService } from './../../auth.service'
import { userRegistrationModel  } from '../../../../shared/models/userRegistration.model';
import { AuthValidatorService } from '../../auth-validator.service';
import { PhonenumberValidatorService } from '../../../../shared/services/validators/phonenumber-validator.service';
import { PhoneNumberFormatterDirective } from '../../../../shared/directives/phone-number-formatter.directive';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, ReactiveFormsModule,PhoneNumberFormatterDirective],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  FormData: FormGroup; // Correctly define FormData as a FormGroup

  constructor(private authService: AuthService, 
    private authValidatorService : AuthValidatorService,
    private phonenumberValidatorService: PhonenumberValidatorService,
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
          [this.authValidatorService.checkEmailIsMatch(
            () => ({
                originalEmail: this.FormData.controls['urgprofessionalemail']?.value, 
                retypeEmail:this.FormData.controls['retypeurgprofessionalemail']?.value
              }))
          ] 
        ], // FormGroup for professional email
        retypeurgprofessionalemail:[
          null, 
          [Validators.required,Validators.email],
          [this.authValidatorService.checkEmailIsMatch(
            () => ({
                originalEmail: this.FormData.controls['urgprofessionalemail']?.value, 
                retypeEmail:this.FormData.controls['retypeurgprofessionalemail']?.value
              }))
          ] 
        ], // FormGroup for retyped professional email
        urgpersonalemail: [
          null, 
          [Validators.required,Validators.email],
          [this.authValidatorService.checkEmailIsMatch(
            () => ({
                originalEmail: this.FormData.controls['urgpersonalemail']?.value, 
                retypeEmail:this.FormData.controls['retypeurgpersonalemail']?.value
              }))
          ] 
        ], // FormGroup for personal email
        retypeurgpersonalemail: [
          null, 
          [Validators.required,Validators.email],
          [this.authValidatorService.checkEmailIsMatch(
            () => ({
                originalEmail: this.FormData.controls['urgpersonalemail']?.value, 
                retypeEmail:this.FormData.controls['retypeurgpersonalemail']?.value
              }))
          ]
        ], // FormGroup for retyped personal email
        urgphone: [
          null, 
          [Validators.required,this.phonenumberValidatorService.checkPhoneNumberIsValid()], // Custom validator to check phone number validity
        ], // FormGroup for phone number
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

  // Function to clear the error when the email is changed
  onEmailChange(controlname: string) {
    const email = this.FormData.controls[controlname]; // Get the retype email control
    if(email.errors?.['isMatchedEmail']){
      email.setErrors(null); // Clear the error if the email is valid
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