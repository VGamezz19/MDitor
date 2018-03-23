import mongoose from "mongoose";

require("dotenv").config();

const mongo = {
    host: "localhost",
    port: 27017,
    database: "MDitor",
};

export = mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.database}`);