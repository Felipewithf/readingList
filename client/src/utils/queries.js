import { gql } from "@apollo/client";

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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        title
        link
        image
        bookId
        description
        authors
      }
    }
  }
`;
