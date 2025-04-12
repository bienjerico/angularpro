import { Component } from '@angular/core';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { wvsdUserRegistration } from '../../../../models/wvsdUserRegistration';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  FormData: FormGroup = new FormGroup({
    urgUsername: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]{1,10}$')]), // FormGroup for username
    urgName: new FormControl("",[Validators.required]), // FormGroup for name
    urgprofessionalemail: new FormControl("",[Validators.email]), // FormGroup for professional email
    retypeurgprofessionalemail: new FormControl("",[Validators.email]), // FormGroup for retyped professional email
    urgpersonalemail: new FormControl("",[Validators.email]), // FormGroup for personal email
    retypeurgpersonalemail: new FormControl("",[Validators.email]), // FormGroup for retyped personal email
    urgphone: new FormControl("",[Validators.required]), // FormGroup for phone number
    urgsecretq1: new FormControl("",[Validators.required]), // FormGroup for secret question 1
    urgsecreta1: new FormControl("",[Validators.required]), // FormGroup for secret answer 1
    urgsecretq2: new FormControl("",[Validators.required]), // FormGroup for secret question 2
    urgsecreta2: new FormControl("",[Validators.required]) // FormGroup for secret answer 2
  }); // FormGroup for registration form
  
  retypeurgprofessionalemail: string = ''; // Variable to hold retyped professional email
  retypeurgpersonalemail: string = ''; // Variable to hold retyped personal email
    

  constructor(private authService: AuthService) {} 

    // Function to save registration data
    saveRegistration() {
      if (this.FormData.valid) {

      console.log('FormData:', this.FormData); // Log the FormData object
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