const typeDefs = `#graphql

type User {
    _id: ID
    userName: String
    email: String
    password: String
    bookGoal: Int
    goalDate: String
    bookCompleted: Int
    books: [Book]
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
    me(userName:String!): User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!, bookGoal: Int, goalDate: String , books:[ID]): Auth
    addBookGoal(userName:String!, bookGoal:Int!): User
    addGoalDate(userName:String!, goalDate:String!): User
    login(email: String!, password: String!): Auth
    addBook(title: String!, author:String!, desc: String, bookCover:String, isbn:String, isRead:Boolean, toRead:Boolean, isReading:Boolean, bookRating:Int!): Book
    addBookComment(bookId: ID!, commentText: String!): Book
    removeBook(bookID:ID!): User
    removeBookComment(bookId: ID!, commentText: String!): Book
    updateBookRating(bookId: ID!, bookRating:Int): Book 
    updateIsRead(bookId:ID!, isRead:Boolean): Book
    updateIsReading(bookId:ID!, isReading:Boolean): Book
    updateToRead(bookId:ID!, toRead:Boolean): Book
  }
`;

//FIXME: probably should make DATE a string and validate it using REGEX
module.exports = typeDefs;
