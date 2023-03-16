const typeDefs = `#graphql

type User {
    _id: ID
    name: String
    email: String
    password: String
    bookGoal: Int
    goalDate: String
    bookCompleted: Int
    Books: [Book]
  }
  
  type Book {
    _id: ID
    createdBy: String
    title: String
    author: String
    desc: String
    bookCover: String
    isbn: String
    isRead: Boolean
    toRead: Boolean
    isReading: Boolean
    bookRating: Int
    bookComment: [bookComment]
    }

  type bookComment {
    _id: ID
    commentText: String
    bookCommentCreator: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(name: String!): User
    books(name: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(title: String!): Book
    addBookComment(bookId: ID!, commentText: String!): Book
    removeBook(title: String!): Book
    removeBookComment(bookId: ID!, commentText: String!): Book
  }
`;

module.exports = typeDefs;
