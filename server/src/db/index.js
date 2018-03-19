const mongoose = require("mongoose")

const mongo = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DB,
}

with(mongo) {
    mongoose.connect(`mongodb://${host}:${port}/${database}`)
}