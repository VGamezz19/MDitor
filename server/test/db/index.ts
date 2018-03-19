import mongoose from "mongoose";

require("dotenv").config();

const mongo = {
    host: process.env.MONGO_HOST_TEST,
    port: process.env.MONGO_PORT_TEST,
    database: process.env.MONGO_DB_TEST,
};

mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.database}`);