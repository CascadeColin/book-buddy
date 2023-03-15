const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URL || "mongod://127.0.0.1:27017/book-buddy", 
    {
        useNewUrlPages: true,
        useUnifiedTopology: true,
    
    }
);

module.exports = mongoose.connection;