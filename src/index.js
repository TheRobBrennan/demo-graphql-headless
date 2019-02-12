import 'dotenv/config';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.GITHUB_GRAPHQL_ENDPOINT,

  // Use the request property to define a function which has access to
  // the context of each request made through the Apollo client.
  //
  // This is where we will pass our authorization header and personal access token
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.GITHUB_PERSONAL_ACCESS_TOKEN
        }`,
      },
    });
  },
});

// GraphQL query
const GET_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
    }
  }
`;

// Run the query
client
  .query({
    query: GET_ORGANIZATION,
  })
  .then(console.log);

/* Sample output
{ data:
   { organization:
      { name: 'The Road to learn React',
        url: 'https://github.com/the-road-to-learn-react',
        __typename: 'Organization' } },
  loading: false,
  networkStatus: 7,
  stale: false }
*/