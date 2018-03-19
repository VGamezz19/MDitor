import mongoose from "mongoose";

const mongo = {
    host: process.env.MONGO_HOST_DEV,
    port: process.env.MONGO_PORT_DEV,
    database: process.env.MONGO_DB_DEV,
};

mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.database}`);