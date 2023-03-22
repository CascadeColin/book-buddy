import { gql } from "@apollo/client";

export const ME = gql`
query me($userName: String!) {
  me(userName: $userName) {
    books {
      _id
      author
      bookCover
      bookRating
      desc
      isRead
      isReading
      isbn
      title
      toRead
    }
  }
}
`;

// TODO: update this once reducers can be implemented, it works for presentation
export const USER_INFO = gql`
  query getUsers {
    users {
      userName
      goalDate
      email
      books {
        _id
      }
      bookGoal
      bookCompleted
    }
  }
`;

//FIXME:

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

// export const QUERY_USER = gql`
//   {
//     user {
//       firstName
//       lastName
//       orders {
//         _id
//         purchaseDate
//         products {
//           _id
//           name
//           description
//           price
//           quantity
//           image
//         }
//       }
//     }
//   }
// `;
