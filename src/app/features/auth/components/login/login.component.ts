import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public apiUrl: string = environment.apiUrl; // Use the environment variable
  username: string = '';
  password: string = '';


  constructor(private authService: AuthService, private router:Router) {
    console.log('API URL:', this.apiUrl); // Example usage
    console.log('username:', this.username); // Example usage
    console.log('password:', this.password); // Example usage
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('sdAuth', response);

        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']);
        // Handle successful login (e.g., navigate to dashboard)
      },
      error: (err) => {
        console.error('Login failed:', err);
        // Handle login error (e.g., show error message)
      }
    });
  }




}
