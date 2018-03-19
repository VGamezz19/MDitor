import { Response, Request, NextFunction } from "express";

require("dotenv").config();

const express = require("express");

const app = express();

const bodyParsers = require("body-parser");

const formBodyParser = bodyParsers.urlencoded({ extended: false });

require("./db");

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

import { File } from "./Models/File/";

import { Folder } from "./Models/Folder";

// const folder = new Folder({
//     _id: new mongoose.Types.ObjectId(),
//     title: "HellowFolder1",
//     files: []
// });


// folder.save((err: never) => {
//     if (err) return console.error(err);

//     const file = new File({
//         _id: new mongoose.Types.ObjectId(),
//         title: "Hello Fil1",
//         folder: folder._id
//     });

//     file.save();

//     folder.files.push(file._id);
//     folder.save();
// });

// const id = "5aafa97ac10be1163218488e";
// File.findById(id).populate("file").exec(function (err: never, file: any ) {
//     if (err) return console.error(err);

//     console.log(file);
//     // prints "The author is Ian Fleming"
//   });
// ============= 🔥 =============

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server listen in port ${PORT}`));

export { app };