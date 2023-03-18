const db = require("./connection");
const { User, Book } = require("../models");

db.once("open", async () => {

  const book = [
    {
      createdBy: "Pamela Washington",
      title: "The Hobbit",
      author: '"J.R.R. Tolkien"',
      desc: "In a hole in the ground there lived a hobbit. Not a nasty diry wet hole, filled with ends of worms and an oozy smell...",
      bookCover: "https://covers.openlibrary.org/b/id/2341310-L.jpg",
      isbn: "0261103318",
      isRead: false,
      toRead: true,
      isReading: true,
      bookRating: 5,
      bookComment: [
        {
          commentText: "Reading Ninja recommended this book!",
          bookCommentCreator: "Pamela Washington",
        },
      ],
    },
    {
      createdBy: "Pamela Washington",
      title: "House of Flame and Shadow",
      author: "Sarah J. Maas",
      desc: "Source title: House of Flame and Shadow (Crescent City, 3)",
      bookCover: "https://covers.openlibrary.org/b/id/13525139-L.jpg",
      isbn: "1635574102",
      bookComment: [
        {
          commentText: "Read this again!",
          bookCommentCreator: "Pamela Washington",
        },
      ],
    },
    {
      createdBy: "Pamela Washington",
      title: "Hello Beautiful",
      author: "Ann Napolitano",
      desc: "No description available",
      bookCover: "",
      isbn: "0593597265",
      isRead: true,
      toRead: false,
      isReading: false,
      bookRating: 0,
      bookComment: [
        {
          commentText: "This book is awesome",
          bookCommentCreator: "Pamela Washington",
        },
      ],
    },
    {
      createdBy: "Reading Ninja",
      title: "The inheritance games",
      author: "Jennifer Lynn Barnes",
      desc: "No description available",
      bookCover: "https://covers.openlibrary.org/b/id/12897763-L.jpg",
      isbn: "8380089456",
      isRead: true,
      toRead: false,
      isReading: false,
      bookRating: 0,
      bookComment: [
        {
          commentText: "Chapter 7 was the best.",
          bookCommentCreator: "Reading Ninja",
        },
      ],
    },
    {
      createdBy: "Reading Ninja",
      title: "Atomic Habits",
      author: "James Clear",
      desc: "Source title: Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      bookCover: "https://covers.openlibrary.org/b/id/12539702-L.jpg",
      isbn: "9781804220207",
    },
  ];


  await User.deleteMany();

  await User.create({
    userName: "Pamela Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    bookGoal: 45,
    bookCompleted: 2,
   books: [book[0], book[1], book[2]],
  });

  await User.create({
    userName: "Speed Reader",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  await User.create({
    userName: "Reading Ninja",
    email: "ninja@testmail.com",
    password: "password12345",
    books: [book[3], book[4]],
  });

  console.log("users seeded");

  process.exit();
});
