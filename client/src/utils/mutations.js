import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeSavedBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      _id
      savedBooks {
        title
        bookId
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook(
    $description: String!
    $bookId: String!
    $title: String!
    $image: String
    $link: String
    $authors: String
  ) {
    addBook(
      description: $description
      bookId: $bookId
      title: $title
      image: $image
      link: $link
      authors: $authors
    ) {
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
      username
    }
  }
`;
