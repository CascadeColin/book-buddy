import { gql } from "@apollo/client";
//TODO: add mutations for other updates like goal update, books etc

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
    $bookGoal: Int
    $goalDate: String
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
      bookGoal: $bookGoal
      goalDate: $goalDate
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation Mutation(
    $title: String!
    $author: String!
    $bookRating: Int!
    $desc: String
    $bookCover: String
    $isbn: String
    $isRead: Boolean
    $toRead: Boolean
    $isReading: Boolean
  ) {
    addBook(
      title: $title
      author: $author
      bookRating: $bookRating
      desc: $desc
      bookCover: $bookCover
      isbn: $isbn
      isRead: $isRead
      toRead: $toRead
      isReading: $isReading
    ) {
      title
      author
      desc
      bookCover
      isbn
      isRead
      toRead
      isReading
      bookRating
    }
  }
`;
