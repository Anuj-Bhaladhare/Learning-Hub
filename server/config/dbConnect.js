const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then( () => {
        console.log("Database connected successFully...");
    }).catch( (err) => {
        console.log("Error occure while Database connection ", err);
        process.exit(1);
    })
}

module.exports = dbConnect;