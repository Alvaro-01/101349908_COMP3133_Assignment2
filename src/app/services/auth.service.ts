import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/graphql'; // Update with your backend API base URL

  constructor(private http: HttpClient) {}

  login(usernameOrEmail: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { usernameOrEmail, password });
  }
  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, { username, email, password });
  }
}