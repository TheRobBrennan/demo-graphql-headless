import 'dotenv/config';
import 'cross-fetch/polyfill'; // Allows us to use the fetch API in a Node.js environment

// GraphQL client and related libraries
import { client as GitHub } from './github/client';
import { ADD_STAR, REMOVE_STAR } from './github/mutations';

// Run the mutation
GitHub.mutate({
  mutation: ADD_STAR,
  variables: {
    repositoryId: 'MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw==',
  },
}).then(result => console.log(JSON.stringify(result, null, 2)));

GitHub.mutate({
  mutation: REMOVE_STAR,
  variables: {
    repositoryId: 'MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw==',
  },
}).then(result => console.log(JSON.stringify(result, null, 2)));
