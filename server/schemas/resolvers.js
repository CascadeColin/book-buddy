// const {AuthenticationError} = require("apollo-server-express");
const { GraphQLError } = require("graphql");
const {User, Book} = require("../models");
const {signToken} = require ("../utils/auth")

const resolvers = {
  Query: {
    // Do we need a query for multiple users, or even user if we just need to Auth "me"? I'll add to make sure it doesnt cause issues
      users: async () => {
        return User.find().populate("books");
      },
      user: async (parent, {name}) => {
        return User.findOne({name}).populate("books");
      },
      books: async (parent, {name}) => {
        const params = name ? {name} : {};
        return Book.find(params).sort({ title: asc});//how to sort via alpha or whatever the group wants//
      },
      book: async (parent, {bookId}) => {
        return Book.findOne({_id: bookId});
      },
      me: async (parent, args, context) => {
        if (context.user) {
        return User.findOne({_id: context.user_id }).populate("books");
        }
        throw new GraphQLError("Please log in to view your Bookcase!", {
          extensions: {
            code: "UNAUTHENTICATED"
          }
        })
      },

    },

  Mutation:  {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("Sorry, No User found with the Email Provided!", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError("Incorrect password or Username. Haha! Get some Prevagen Fool!", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const token = signToken(user);

      return { token, user };
    },
    addBook: async (parent, {  title, author, desc, bookCover, isbn, isRead, toRead, isReading,bookRating, bookComment }, context) => {
      if (context.user) {
        const book = await Book.create({
          createdBy: context.user.name,
          title,
          author,
          desc,
          bookCover,
          isbn,
          isRead,
          toRead,
          isReading,
          bookRating,
          bookComment,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { books: book._id } }
        );

        return book;
      }
      throw new GraphQLError("Please log in to Add/Remove to your Bookcase!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    addBookComment: async (parent, { bookId, commentText }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $addToSet: {
              bookComment: {commentText, bookCommentCreator: context.user.name},
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new GraphQLError("Please log in to Add/Remove to your Bookcase!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await Book.findOneAndDelete({
          _id: bookId,
          createdBy: context.user.name,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { books: book._id } }
        );

        return book;
      }
      throw new GraphQLError("Please log in to Add/Remove to your Bookcase!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
    removeBookComment: async (parent, { bookId, bookcommentId }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $pull: {
              bookComments: {
                _id: bookcommentId,
                bookCommentCreator: context.user.name,
              },
            },
          },
          { new: true }
        );
      }
      throw new GraphQLError("Please log in to Add/Remove to your Bookcase!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    },
  },
}

module.exports = resolvers;
  

