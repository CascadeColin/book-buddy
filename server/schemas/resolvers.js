// const {AuthenticationError} = require("apollo-server-express");
const { GraphQLError } = require("graphql");
const {User, Book} = require("../models");
const {signToken} = require ("../utils/auth")

const resolvers = {
  // Query: {
  //   // Do we need a query for multiple users, or even user if we just need to Auth "me"? I'll add to make sure it doesnt cause issues
  //     users: async () => {
  //       return User.find().populate(
          
  //       "books"
  //       );
  //     },
  //     user: async (parent, {userName}) => {
  //       return User.findOne({userName}).populate("books");
  //     },
  //     books: async (parent, {userName}) => {
  //       const params = userName ? {userName} : {};
  //       return Book.find(params);//how to sort via alpha or whatever the group wants//
  //     },
  //     book: async (parent, {bookId}) => {
  //       return Book.findOne({_id: bookId});
  //     },
  //     me: async (parent, args, context) => {
  //       if (context.user) {
  //       return User.findOne({_id: context.user_id }).populate("books");
  //       }
  //       throw new GraphQLError("Please log in to view your Bookcase!", {
  //         extensions: {
  //           code: "UNAUTHENTICATED"
  //         }
  //       })
  //     },

  //   },

    Query: {
      // Do we need a query for multiple users, or even user if we just need to Auth "me"? I'll add to make sure it doesnt cause issues
        users: async () => {
          return await User.find().populate("books");
        },

        user: async (parent, {userName}) => {
          return User.findOne({userName}).populate("books");
        },

        books: async (parent, {userName, createdBy}) => {
        const params = userName ? {userName} : {};
        return await Book.find(params);
        },
        //how to sort via alpha or whatever the group wants//
        // books: async (parent, {user, userName}) => {
        //   console.log(user, userName)
        //   const params = {};
        //   if (user) {
        //     params.createdBy = userName;
        //   }

        //   if (userName) {
        //     params.createdBy = {
        //       $regex: userName,
        //     };
        //   }

        //   return await Book.find(params).populate("books")
        // },

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
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
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
        throw new GraphQLError("Incorrect password or email. Haha! Get some Prevagen Fool!", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const token = signToken(user);

      return { token, user };
    },


    addBookGoal: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        })
    }
    },

    addGoalDate: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        })
    }
    },

    // updateToRead: async (parent, args, content) => {
    //   Book.find({"book._id": id}).where("isReading").equals(false).updateOne(
    //     {
    //       $set {
    //         "isReading": true,
    //       }
    //     },(err,msg) => {
    //       if(err) throw err;
    //       res.send(msg);
    //     }
    //   )

    // }

    updateBookStatus: async (parent, {bookId, bookStatusValue }, context) => {
      if (context.user) {
        const updateBook = { 
          toRead: true,
          isReading: false,
          isRead: false,
        }
        if (bookStatusValue==="isReading"){
          updateBook.toRead=false
          updateBook.isRead=false
          updateBook.isReading=true
        }
        if (bookStatusValue==="isRead"){
          updateBook.isReading=false
          updateBook.toRead=false
          updateBook.isRead=true
        }
        return Book.findOneAndUpdate(
          { _id: bookId },
          {},
          {
            $Set: {
              updateBook
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

      throw new GraphQLError("Please log in to Add/Remove to your Bookcase!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    }
  },

  
  

        updateBookRating: async (parent, {bookRating }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $addToSet: {
              bookRating: {},
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

    addBook: async (parent, {  title, author, desc, bookCover, isbn, isRead, toRead, isReading,bookRating, bookComment }, context) => {
      if (context.user) {
        const book = await Book.create({
          createdBy: context.user.userName,
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
          { $push: { books: book._id } }
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
              bookComment: {commentText, bookCommentCreator: context.user.userName},
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
          createdBy: context.user.userName,
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
                bookCommentCreator: context.user.userName,
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
  
