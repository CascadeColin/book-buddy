import { gql } from '@apollo/client';

//TODO:

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