import { Response, Request, NextFunction } from "express";

require("dotenv").config();

const express = require("express");

const app = express();

const bodyParsers = require("body-parser");

const formBodyParser = bodyParsers.urlencoded({ extended: false });

// app.use(bodyParsers)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/MDitor");

import * as FileModel from "./Models/File";

// FileModel.File.FileModel

const file = new FileModel.File.FileModel({ title: "testing File!" });

file.save(function (err) {
    if (err) return console.error(err);

    console.log("Save it!");
});

import * as FolderModel from "./Models/Folder";

// const fileForFoler = new FileModel.File.FileModel({ title: "testing Folder File!" });

// const folder = new FolderModel.Folder.FolderModel({ title: "Folder", file: fileForFoler._id });


const folder = new FolderModel.Folder.FolderModel({
    _id: new mongoose.Types.ObjectId(),
    title: "folder inside have files3123233"
});

folder.save(function (err) {
    if (err) return console.error(err);

    const file = new FileModel.File.FileModel({
        title: "file inside folde1231231r",
        folder: folder._id
    });

    file.save(function (err) {
        if (err) return console.error(err);

    });
});
FileModel.File.FileModel
    .findOne({ title: "file inside folde1231231r" })
    .populate("folder")
    .exec((err, data) => {
        if (err) return console.error(err);

        console.log(data);
        console.log(data.folder.title);
    });


// ============= 🔥 =============

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server listen in port ${PORT}`));

export { app };