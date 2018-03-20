import { Response, Request, NextFunction } from "express";

import { logic } from "./logic";

import { Folder } from "./Models";

import mongoose from "mongoose";

require("dotenv").config();

const express = require("express");

const app = express();

const bodyParsers = require("body-parser");

const formBodyParser = bodyParsers.urlencoded({ extended: false });

// mongoose.connect(`mongodb://localhost/MDitor`);

require("./db");

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

// const folder = new Folder({
//     title: "HellowFolder Test",
//     files: []
// });



logic.folder.create("SomeFolder bla bla bla Logic")
    .then((id) => {
        return logic.folder.create("new Folder ble ble");
    })
    .then((idFolder) => {
        return logic.file.create(idFolder, "peneasdasdsadsdasdasd");
    })
    .then(() => {
        return logic.folder.list();
    })
    .then(folders => {
        return logic.folder.delete(folders[1]._id);
    })
    .then(console.log);

// logic.createFile("File");

// folder.save((err: never) => {
//     if (err) return console.error(err);

//    // createFile(folder._id, "someTitle");
// });
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