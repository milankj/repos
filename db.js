const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE;
const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;