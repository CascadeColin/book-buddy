// i put in "user1", "user2", etc for createdBy because I wasn't sure what you are calling the users on your end.  Change the createdBy values to match your user seed data.

// the third one genuinely does not have a cover image available - first time I came across that, so I'll factor it into the API calls and talk to front-end about how to handle that

const books = [
    {
        createdBy: "user1",
        title: "The Hobbit",
        author: '"J.R.R. Tolkien"',
        desc: "In a hole in the ground there lived a hobbit. Not a nasty diry wet hole, filled with ends of worms and an oozy smell...",
        bookCover: "https://covers.openlibrary.org/b/id/2341310-L.jpg",
        isbn: "0261103318",
        isRead: false,
        toRead: true,
        isReading: false,
        bookRating: 0,
        bookComment: [
            {
                commentText: "This is a comment!",
                bookCommentCreator: "user2"
            }
        ]
    },
    {
        createdBy: "user2",
        title: "House of Flame and Shadow",
        author: "Sarah J. Maas",
        desc: "Source title: House of Flame and Shadow (Crescent City, 3)",
        bookCover: "https://covers.openlibrary.org/b/id/13525139-L.jpg",
        isbn: "1635574102",
        isRead: false,
        toRead: true,
        isReading: false,
        bookRating: 0,
        bookComment: [
            {
                commentText: "This is another comment!",
                bookCommentCreator: "user4"
            }
        ]
    },
    {
        createdBy: 'user3',
        title: "Hello Beautiful",
        author: "Ann Napolitano",
        desc: "No description available",
        bookCover: "No cover available",
        isbn: "0593597265",
        isRead: false,
        toRead: true,
        isReading: false,
        bookRating: 0,
        bookComment: [
            {
                commentText: "Comment on Ann's book goes here!",
                bookCommentCreator: "user1"
            }
        ]
    },
    {
        createdBy: 'user4',
        title: "The inheritance games",
        author: "Jennifer Lynn Barnes",
        desc: "No description available",
        bookCover: "https://covers.openlibrary.org/b/id/12897763-L.jpg",
        isbn: "8380089456",
        isRead: false,
        toRead: true,
        isReading: false,
        bookRating: 0,
        bookComment: [
            {
                commentText: "Comment 43534345",
                bookCommentCreator: "user5"
            }
        ]
    },
    {
        createdBy: 'user5',
        title: "Atomic Habits",
        author: "James Clear",
        desc: "Source title: Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        bookCover: "https://covers.openlibrary.org/b/id/12539702-L.jpg",
        isbn: "9781804220207",
        isRead: false,
        toRead: true,
        isReading: false,
        bookRating: 0,
        bookComment: [
            {
                commentText: "asllkasdfjk",
                bookCommentCreator: "user4"
            }
        ]
    },
]