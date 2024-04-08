// signup.component.ts
import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private graphqlService: GraphqlService) {}

  // Implement signup functionality using Apollo Client
}
