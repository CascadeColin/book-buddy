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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    books(category: ID, name: String): [BOOK]
    book(_id: ID!): BOOK
    user: User
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
