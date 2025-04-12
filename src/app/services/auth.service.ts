import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl; // API base URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json','Authentication': 'firsttime' });
    const body = { username, password };
    return this.http.post(this.apiUrl+'/Authentication/AuthToken', body, { headers });
  }

  logout(): void {
    localStorage.removeItem('sdAuth');
    console.log('Authentication key removed from localStorage');
  }
  


}
