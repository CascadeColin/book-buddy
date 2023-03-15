const typeDefs = `#graphql

TODO:
  type Book {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
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

TODO: why do they have this? what is it for
  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

TODO:
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

TODO:
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addBook(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateBook(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
