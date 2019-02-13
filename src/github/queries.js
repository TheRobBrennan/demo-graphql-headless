import { gql } from 'apollo-boost'

export const GET_ORGANIZATION = gql`
  query ($organization: String!) {
    organization(login: $organization) {
      name
      url
    }
  }
`;
