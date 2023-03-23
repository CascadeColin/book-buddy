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

export const UPDATE_BOOK_RATING = gql`
  mutation Mutation($bookId: ID!, $bookRating: Int) {
    updateBookRating(bookId: $bookId, bookRating: $bookRating) {
      _id
      bookRating
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

export const UPDATE_GOAL_DATE = gql`
  mutation AddGoalDate($userName: String!, $goalDate: String!) {
    addGoalDate(userName: $userName, goalDate: $goalDate) {
      _id
      userName
      bookGoal
      goalDate
    }
  }
`;

export const UPDATE_BOOK_GOAL = gql`
  mutation AddBookGoal($userName: String!, $bookGoal: Int!) {
    addBookGoal(userName: $userName, bookGoal: $bookGoal) {
      _id
      bookGoal
      goalDate
    }
  }
`;

export const UPDATE_TO_READ = gql`
  mutation UpdateToRead($bookId: ID!, $toRead: Boolean) {
    updateToRead(bookId: $bookId, toRead: $toRead) {
      toRead
      _id
    }
  }
`;

export const UPDATE_IS_READING = gql`
  mutation UpdateIsReading($bookId: ID!, $isReading: Boolean) {
    updateIsReading(bookId: $bookId, isReading: $isReading) {
      isReading
      _id
    }
  }
`;

export const UPDATE_IS_READ = gql`
  mutation Mutation($bookId: ID!, $isRead: Boolean) {
    updateIsRead(bookId: $bookId, isRead: $isRead) {
      isRead
      _id
    }
  }
`;
