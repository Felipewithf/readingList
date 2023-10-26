import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
query Users($userId: ID!) {
    user(id: $userId) {
      username
      savedBooks {
        title
        authors
        description
        image
        link
        _id
        bookId
      }
    }
  }
`;

