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