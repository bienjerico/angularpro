import { Component } from '@angular/core';
import { LogoutComponent } from './../../../../core/auth/pages/logout/logout.component'; // Import the LogoutComponent

@Component({
  selector: 'app-dashboard',
  imports: [LogoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
