const typeDefs = `#graphql

type User {
    _id: ID
    userName: String
    email: String
    password: String
    bookGoal: Int
    # "Date" would be a custom type -> easier to use unix timestamp and convert it
    goalDate: Int
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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(userName: String!): User
    books(userName: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    # "Date" would be a custom type -> easier to use unix timestamp and convert it
    addUser(userName: String!, email: String!, password: String!, bookGoal: Int, goalDate: Int): Auth
    login(email: String!, password: String!): Auth
    addBook(title: String!): Book
    addBookComment(bookId: ID!, commentText: String!): Book
    removeBook(title: String!): Book
    removeBookComment(bookId: ID!, commentText: String!): Book
    updateBookRating(bookRating: Int): Book 
  }
`;
//TODO: Need a way to update book boolean fields -  mutation
module.exports = typeDefs;
