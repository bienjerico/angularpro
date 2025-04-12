import { Component } from '@angular/core';
import { LogoutComponent } from '../../../auth/components/logout/logout.component';

@Component({
  selector: 'app-dashboard',
  imports: [LogoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
