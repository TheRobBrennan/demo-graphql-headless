import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
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
