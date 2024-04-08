
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onSubmit(username: string, password: string): void {
    this.authService.login(username, password).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful:', response);
        // Redirect to another page or perform other actions upon successful login
      },
      (error) => {
        // Handle login error
        console.error('Login error:', error);
      }
    );
  }
}