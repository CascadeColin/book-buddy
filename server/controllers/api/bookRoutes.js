const router = require("express").Router();
// package that allows for fetch to be used in Node
const { Book, User } = require("../../models/");

// NOTE: not intended for production at the moment.  Just an easy way to clear all books from the DB during development.  Use this route in Insomnia.
router.delete("/deleteallbooks", async (req, res) => {
  try {
    await Book.deleteMany({});
    // update any user that has any string as a username, set books to empty array
    await User.updateMany({ userName: /[\s\S]/ }, { books: [] });
    res.status(200).json({ message: "all books deleted!" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
