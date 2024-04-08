// graphql.service.ts
import { Injectable } from '@angular/core';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  private apolloClient: ApolloClient<any>;

  constructor() {
    const httpLink = createHttpLink({
      uri: 'http://localhost:4000/graphql' // Update with your GraphQL server URL
    });

    this.apolloClient = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
    });
  }

  public getApolloClient(): ApolloClient<any> {
    return this.apolloClient;
  }
}
