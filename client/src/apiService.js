import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from "apollo-boost";
import { HttpLink } from 'apollo-link-http';


const client = new ApolloClient({
  link:new HttpLink(
    {
      uri: "http://localhost:4000/graphql",

      credentials: 'include'
    }),
    cache: new InMemoryCache()
});

export default {

  fetchdata: () => {
    return client
      .query({
        query: gql`
      {
        headline {
          newspaper
          headline
          locale
          url
        }
      }`
      }, {
        errorPolicy: "all"
      })
  }
}