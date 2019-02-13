import 'dotenv/config';
import 'cross-fetch/polyfill';  // Allows us to use the fetch API in a Node.js environment

// GraphQL client and related libraries
import { client as GitHub } from './github/client'
import { GET_ORGANIZATION } from './github/queries'

// Run the query
GitHub
  .query({
    query: GET_ORGANIZATION,
    variables: {
      organization: 'the-road-to-learn-react',
    }
  })
  .then(console.log);
