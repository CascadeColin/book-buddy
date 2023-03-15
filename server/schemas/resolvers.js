// const {AuthenticationError} = require("apollo-server-express");
const {User, Book} = require("../models");
const {signToken} = require ("../utils/auth")



// Note from Colin:  I did this while debugging the server.  Discard any of this one the resolvers get written.
const resolvers = {}
module.exports = resolvers