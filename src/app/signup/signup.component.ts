import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  onSubmit(username: string, email: string, password: string): void {
    this.authService.signup(username, email, password).subscribe(
      (response) => {
        // Handle successful signup response
        console.log('Signup successful:', response);
        // Redirect to login page or perform other actions upon successful signup
      },
      (error) => {
        // Handle signup error
        console.error('Signup error:', error);
      }
    );
  }
}