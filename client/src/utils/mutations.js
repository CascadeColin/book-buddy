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

// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
    $bookGoal: Number
    $goalDate: Date
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