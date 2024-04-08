// login.component.ts
import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private graphqlService: GraphqlService) {}

  // Implement login functionality using Apollo Client
}

