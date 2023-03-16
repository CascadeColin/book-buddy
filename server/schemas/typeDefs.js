const typeDefs = `#graphql

  type Book {
    _id: ID
    title: String
    author: String
    desc: String
    bookCover: String
    isbn: String
    isRead: Boolean
    toRead: Boolean
    isReading: Boolean
    bookRating: Number
    bookComment: String
    }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    bookGoal: Number
    goalDate: Date
    bookCompleted: Number
    Books: [Book]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addBook(products: [ID]!): Order
    updateUser(name: String, email: String, password: String): User
    updateBook(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
