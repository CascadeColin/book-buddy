const router = require('express').Router();
const bookRoutes = require('./bookRoutes')
const userRoutes = require('./userRoutes')

// localhost:3001/api/ (this index.js is for the api paths)
router.use('/books', bookRoutes);

// localhost:3001/api/users (because we are already in api, this routes to a subdirectory called /api/users)
router.use('/users', userRoutes);

module.exports = router;