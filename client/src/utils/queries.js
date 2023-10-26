import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;