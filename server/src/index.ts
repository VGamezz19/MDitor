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

async function create () {

    const idFolder = await logic.createFolder("SomeFolder Logic");

    await logic.createFile(idFolder, "peneasdasdasd");
    await logic.createFile(idFolder, "peneasdasdsadsdasdasd");
    await logic.createFile(idFolder, "p123213e12neasdasdasd");
    await logic.createFile(idFolder, "pe5463434243neasdasdasd");
        // .then(console.log);

        logic.listFolder(idFolder)
            .then(console.log);
}

create();
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